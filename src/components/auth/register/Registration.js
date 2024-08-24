import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://fastapi-example-ito8.onrender.com";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (username, email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        username,
        email,
        password,
      });
      setSuccessMessage("Signup successful!");
      navigate("/create_cafe");
    } catch (error) {
      console.log("Signup failed:", error);
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, email, password);
  };

  const openclick = () => {
    navigate("/login");
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between mb-4 p-8">
        <div className="text-xl font-bold">FoodMe</div>
        <div className="flex gap-3 items-center justify-center">
          <h3>Allaqachon aʼzosizmi?</h3>
          <button
            onClick={openclick}
            className="border border-green px-4 py-1 rounded-lg"
          >
            Kirish
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="dark:text-white rounded-lg w-full">
          <div className="text-center mb-8 mt-14">
            <h1 className="text-2xl font-bold mb-5">
              14 kunlik bepul sinov muddatini bugun boshlang.
            </h1>
            <p className="text-green">KREDIT KARTA TALAB ETMAYDI!</p>
          </div>
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="text-black lg:w-2/4 w-full mx-5 md:w-2/4"
            >
              <div className="mb-4">
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Parol"
                  className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
                {/* <div className="flex justify-between items-center mt-2 text-xs text-green">
                  <div>Kalit so'z mustahkamligi</div>
                  <div>Kuchsiz</div>
                </div> */}
                {error && <p className="text-red text-sm mt-2">{error}</p>}
                {successMessage && (
                  <p className="text-green text-sm mt-2">{successMessage}</p>
                )}
                <div className="mt-1 h-1 w-full bg-red-400"></div>
              </div>
              <button
                type="submit"
                className={`w-full mt-5 p-3 rounded-lg font-bold ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green text-white"
                }`}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path d="M4 12a8 8 0 0 1 16 0" fill="currentColor"></path>
                    </svg>
                  </div>
                ) : (
                  "Davom etish"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
