import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For routing
import logo from './images/logo.png';
import one from './images/on.png';
import two from './images/tw.png';
import three from './images/thr.png';
import four from './images/fou.png';
import gm from './images/gm.webp'; // Your Gmail image
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import s4 from './images/s4.png';
import { Link } from 'react-scroll'; // For smooth scrolling

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // For redirection

  const images = [one, two, three, four];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 shadow-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 border-b-4 border-black shadow-[0_4px_6px_rgba(0,0,0,1)]">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Company Logo" className="h-12 w-auto" />
          <h1 className="text-white text-xl font-montserrat">BulkMail</h1>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              offset={-80} // Adjust offset to account for navbar height
              className="text-white hover:text-teal-400 font-montserrat cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-80}
              className="text-white hover:text-teal-400 font-montserrat cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              offset={-80}
              className="text-white hover:text-teal-400 font-montserrat cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              className="text-white hover:text-teal-400 font-montserrat cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div
  id="home"
  className="relative bg-gradient-to-r from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] p-10 text-center h-screen flex flex-col justify-center items-center"
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content Container */}
  <div className="relative container mx-auto text-white z-10">
    {/* Title */}
    <h2 className="text-5xl font-extrabold mb-6 leading-tight glow-text sm:text-3xl">
      Welcome to <span className="text-neon-pink">BulkMail</span>!
    </h2>

    {/* Subtitle */}
    <p className="text-lg font-montserrat mb-8 sm:text-base">
      <em>"At a single click, email n number of people."</em>
    </p>

    {/* Subheading */}
    <h2 className="text-3xl font-bold mb-6 sm:text-xl">
      Power Your Business with Effortless Communication
    </h2>

    {/* Slider Section */}
    <div
      id="sli"
      className="relative w-full h-[50vh] sm:h-[40vh] overflow-hidden rounded-lg border-4 border-neon-blue shadow-[0_0_20px_rgba(0,255,255,0.8)]"
    >
      <img
        src={images[currentIndex]}
        alt={`Slider Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
    </div>

    {/* CTA Section */}
    <h2 className="text-2xl font-semibold mt-10 mb-6 sm:text-xl glow-text">
      Effortlessly Reach Your Audience in One Click
    </h2>

    <button
      id="b1"
      onClick={() => navigate('/compose')}
      className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 px-8 rounded-full text-lg font-bold hover:bg-cyan-700 transition-all duration-300 glow-button"
    >
      Let's Compose!
    </button>
  </div>
</div>


      {/* About Section */}
      <div id="about" className="min-h-screen bg-gradient-to-r from-[#4e2a84] via-[#121212] to-[#1a3c7f] p-6">
        <section className="mt-16">
          {/* About Heading */}
          <h1 className="text-white text-4xl font-extrabold text-center mb-[6%] tracking-wide animate__animated animate__fadeIn text-[#ff2d00]">
            About
          </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-16 max-w-6xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
                 {/* Image Section */}
                 <div className="flex-shrink-0 lg:w-[50%] animate__animated animate__fadeIn animate__delay-2s">
                   <img
                     src={gm}
                     alt="Gmail illustration"
                     className="w-full h-[500px] rounded-md shadow-[0_0_20px_rgba(255,105,180,0.7)] border-4 border-[#00ffff]"
                   />
                 </div>
           
                 {/* Content Section */}
                 <div className="lg:w-[45%] bg-gradient-to-br from-[#2c1b3e] to-[#212121] border-2 border-[#ff66b2] rounded-lg p-10 shadow-[0_0_30px_rgba(138,43,226,0.7)] text-center max-w-md lg:max-w-full animate__animated animate__fadeIn animate__delay-3s">
                   <h2 className="text-[#76c7f4] text-2xl font-bold mb-6">
                     What is BulkMail?
                   </h2>
                   <div className="text-lg text-[#b3b3b3] space-y-4 leading-relaxed">
                     <p>
                       <strong className="text-[#ff66b2]">BulkMail</strong> is a cutting-edge platform built to send mass emails with just one click.
                     </p>
                     <p>
                       It simplifies communication for businesses, allowing them to connect with their audience quickly and effortlessly.
                     </p>
                     <p>
                       With advanced features like an intuitive interface, attachment support, and real-time tracking, BulkMail is your ultimate email management solution.
                     </p>
                   </div>
                 </div>
               </div>
        </section>
      </div>

      {/* Services Section */}
      <div id="services" className="min-h-screen bg-gradient-to-r from-[#4e2a84] via-[#121212] to-[#1a3c7f] p-6">
        <section className="mt-16">
          <h1 className="text-white text-4xl font-extrabold text-center mb-12 tracking-wide animate__animated animate__fadeIn text-[#ff2d00]">
            Our Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
                
                {/* Service Box 1 */}
                <div className="bg-gradient-to-br from-[#2c1b3e] to-[#212121] p-6 rounded-lg shadow-[0_0_30px_rgba(138,43,226,0.7)] border-2 border-[#ff66b2] text-center hover:scale-105 transform transition duration-300">
                  <img
                    src={s1} // Replace with your image URL
                    alt="S1"
                    className="w-full h-[250px] object-cover rounded-md mb-4 shadow-[0_0_15px_rgba(255,105,180,0.7)]"
                  />
                  <h2 className="text-[#76c7f4] text-xl font-bold mb-4">Mass Email Campaigns</h2>
                  <p className="text-[#b3b3b3] text-lg leading-relaxed">
                  Easily send out email campaigns to thousands of recipients with just a single click. Our platform ensures high deliverability and seamless integration with your business workflows
                  </p>
                </div>
          
                {/* Service Box 2 */}
                <div className="bg-gradient-to-br from-[#2c1b3e] to-[#212121] p-6 rounded-lg shadow-[0_0_30px_rgba(138,43,226,0.7)] border-2 border-[#ff66b2] text-center hover:scale-105 transform transition duration-300">
                  <img
                    src={s2} // Replace with your image URL
                    alt="Service 2"
                    className="w-full h-[250px] object-cover rounded-md mb-4 shadow-[0_0_15px_rgba(255,105,180,0.7)]"
                  />
                  <h2 className="text-[#76c7f4] text-xl font-bold mb-4">Real-Time Tracking & Analytics</h2>
                  <p className="text-[#b3b3b3] text-lg leading-relaxed">
                  Track your email campaigns with real-time analytics on open rates, click-through rates, and more to understand audience behavior and optimize future campaigns.
                  </p>
                </div>
          
                {/* Service Box 3 */}
                <div className="bg-gradient-to-br from-[#2c1b3e] to-[#212121] p-6 rounded-lg shadow-[0_0_30px_rgba(138,43,226,0.7)] border-2 border-[#ff66b2] text-center hover:scale-105 transform transition duration-300">
                  <img
                    src={s3} // Replace with your image URL
                    alt="Service 3"
                    className="w-full h-[250px] object-cover rounded-md mb-4 shadow-[0_0_15px_rgba(255,105,180,0.7)]"
                  />
                  <h2 className="text-[#76c7f4] text-xl font-bold mb-4">Customizable Templates</h2>
                  <p className="text-[#b3b3b3] text-lg leading-relaxed">
                  Choose from a variety of customizable email templates designed for different types of communication. Whether you’re sending promotions, newsletters, or updates, we have templates to suit your needs.
                  </p>
                </div>
          
                {/* Service Box 4 */}
                <div className="bg-gradient-to-br from-[#2c1b3e] to-[#212121] p-6 rounded-lg shadow-[0_0_30px_rgba(138,43,226,0.7)] border-2 border-[#ff66b2] text-center hover:scale-105 transform transition duration-300">
                  <img
                    src={s4} // Replace with your image URL
                    alt="Service 4"
                    className="w-full h-[250px] object-cover rounded-md mb-4 shadow-[0_0_15px_rgba(255,105,180,0.7)]"
                  />
                  <h2 className="text-[#76c7f4] text-xl font-bold mb-4">Attachment & Multimedia Support</h2>
                  <p className="text-[#b3b3b3] text-lg leading-relaxed">
                  Send emails with attachments and multimedia content like images, PDFs, and videos. Perfect for engaging your audience and adding rich content to your email campaigns
                  </p>
                </div>
             </div>
        </section>
      </div>

      <div id="contact" className="min-h-screen bg-gradient-to-r from-[#4e2a84] via-[#121212] to-[#1a3c7f] p-6">
      <section className="mt-16">
        {/* Contact Heading */}
        <h1 className="text-white text-4xl font-extrabold text-center mb-12 tracking-wide animate__animated animate__fadeIn text-[#ff2d00]">
          Contact Us
        </h1>

        {/* Contact Form & Details Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16 max-w-6xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          {/* Contact Form */}
          <div className="lg:w-[50%] bg-gradient-to-br from-[#2c1b3e] to-[#212121] border-2 border-[#ff66b2] rounded-lg p-10 shadow-[0_0_30px_rgba(138,43,226,0.7)]">
            <h2 className="text-[#76c7f4] text-2xl font-bold mb-6 text-center">Get in Touch</h2>
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-[#b3b3b3] text-lg mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#ff66b2] rounded text-white focus:outline-none focus:ring-2 focus:ring-[#ff66b2] transition duration-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-[#b3b3b3] text-lg mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#ff66b2] rounded text-white focus:outline-none focus:ring-2 focus:ring-[#ff66b2] transition duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-[#b3b3b3] text-lg mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#ff66b2] rounded text-white focus:outline-none focus:ring-2 focus:ring-[#ff66b2] transition duration-300"
                  placeholder="Enter your message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:w-[45%] text-center bg-gradient-to-br from-[#2c1b3e] to-[#212121] border-2 border-[#ff66b2] rounded-lg p-10 shadow-[0_0_30px_rgba(138,43,226,0.7)]">
            <h2 className="text-[#76c7f4] text-2xl font-bold mb-6">Contact Details</h2>
            <p className="text-lg text-[#b3b3b3] leading-relaxed mb-6">
              Have questions? Reach out to us through any of the methods below!
            </p>
            <div className="space-y-4">
              <p className="text-[#ff66b2] text-lg">
                <strong>Address:</strong> 123 BulkMail Street, Tech City, TN 12345
              </p>
              <p className="text-[#76c7f4] text-lg">
                <strong>Email:</strong> support@bulkmail.com
              </p>
              <p className="text-[#76c7f4] text-lg">
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#76c7f4] text-2xl hover:text-[#ff66b2] transition duration-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#76c7f4] text-2xl hover:text-[#ff66b2] transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#76c7f4] text-2xl hover:text-[#ff66b2] transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#76c7f4] text-2xl hover:text-[#ff66b2] transition duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default HomePage;
