import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);  // Track if the user is signing up
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the user exists in localStorage
    const storedUser = JSON.parse(localStorage.getItem(username));
    if (storedUser && storedUser.password === password) {
      navigate("/home"); // Redirect to HomePage if login is successful
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Validate if password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Check if username already exists
    if (localStorage.getItem(username)) {
      alert("Username already exists. Please choose a different one.");
      return;
    }

    // Save the new user in localStorage
    const newUser = { username, password };
    localStorage.setItem(username, JSON.stringify(newUser));

    alert("Account created successfully! Please log in.");
    setIsSignUp(false);  // Switch back to login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#1f1c2c] via-[#928dab] to-[#1f1c2c]">
      <div className="relative p-8 bg-black bg-opacity-50 rounded-lg shadow-lg border-4 border-cyan-400 max-w-sm w-full">
        <div className="absolute inset-0 blur-lg opacity-50 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 -z-10"></div>

        <h2 className="text-3xl text-cyan-400 font-extrabold text-center mb-8 glow-text">
          {isSignUp ? "Create Account" : "Login to BulkMail"}
        </h2>

        <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-cyan-400 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 text-white bg-black bg-opacity-60 rounded-md border border-cyan-400 focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50 shadow-md"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-cyan-400 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 text-white bg-black bg-opacity-60 rounded-md border border-cyan-400 focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50 shadow-md"
            />
          </div>

          {isSignUp && (
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-cyan-400 font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 text-white bg-black bg-opacity-60 rounded-md border border-cyan-400 focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50 shadow-md"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 mt-4 text-lg font-bold text-white bg-gradient-to-r from-teal-500 to-purple-500 rounded-md hover:from-teal-600 hover:to-purple-600 transition-all duration-300 glow-button"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-cyan-400 text-center mt-6">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <a
                href="#"
                className="text-pink-500 underline hover:text-pink-600"
                onClick={() => setIsSignUp(false)}
              >
                Login
              </a>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <a
                href="#"
                className="text-pink-500 underline hover:text-pink-600"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
