import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

function ComposePage() {
  const [msg, setmsg] = useState("");
  const [status, setstatus] = useState(false);
  const [emailList, setEmailList] = useState([]);

  const BACKEND_URL = "https://bulkbacked.onrender.com";

  function handlemsg(evt) {
    setmsg(evt.target.value);
  }

  function handlefile(e) {
    const file = e.target.files[0]; // Ensure it's "files" (not "file")

    const reader = new FileReader();
    reader.onload = function (event) {
      // The result is an ArrayBuffer
      const arrayBuffer = event.target.result;
      console.log("File content as ArrayBuffer:", arrayBuffer);

      // If you need a binary string:
      const data = new Uint8Array(arrayBuffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      );
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const emailList = XLSX.utils.sheet_to_json(worksheet, { header: "A" });
      const totalemail = emailList.map(function (item) {
        return item.A;
      });
      console.log(totalemail);
      setEmailList(totalemail);
    };

    reader.readAsArrayBuffer(file);
  }

  function send() {
    setstatus(true);
    axios
      .post(`${BACKEND_URL}/sendemail`, { msg: msg, emailList: emailList })
      .then(function (data) {
        if (data.data === true) {
          alert("Email Sent Successfully");
          setstatus(false);
        } else {
          alert("Failed!");
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
        setstatus(false);
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="w-[650px] p-8 bg-gray-800 shadow-2xl rounded-lg text-center border border-gray-700">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-white mb-6 border-b-4 border-blue-500 pb-2">
          Bulk Mail
        </h1>

        {/* Textarea */}
        <div className="mb-6">
          <textarea
            onChange={handlemsg}
            value={msg}
            placeholder="Write your message here..."
            className="w-full h-[200px] p-4 text-white bg-gray-700 rounded-lg shadow-inner border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* File Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Attach Your File
          </label>
          <input
            onChange={handlefile}
            type="file"
            className="w-full p-3 border-2 border-dashed border-gray-600 text-gray-300 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* File Info */}
        <p className="text-gray-300 text-sm mb-4">
          <span className="font-semibold text-blue-500">
            Total Emails: {emailList.length}
          </span>
        </p>

        {/* Submit Button */}
        <button
          onClick={send}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {status ? "Sending..." : "Send Bulk"}
        </button>
      </div>
    </div>
  );
}

export default ComposePage;
