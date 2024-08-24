import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://fastapi-example-ito8.onrender.com";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (usernameOrEmail, password) => {
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        username_or_email: usernameOrEmail,
        password,
      });

      const { access, refresh } = response.data.data.token;

      sessionStorage.setItem("access_token", access);
      sessionStorage.setItem("refresh_token", refresh);

      const cafeResponse = await axios.get(`${BASE_URL}/cafes/check`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });

      console.log("Cafe response:", cafeResponse.data);

      if (cafeResponse.data.has_cafe) {
        navigate("/admin");
      } else {
        navigate("/create_cafe");
      }

      setSuccessMessage("Login successful!");
    } catch (error) {
      console.log("Login failed:", error);
      setError("Login failed. Please check your username and password.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(usernameOrEmail, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-grey">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-green text-center ">
          FoodMe tizimiga kirish
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div>
            <label
              htmlFor="usernameOrEmail"
              className="block text-sm font-medium text-dark"
            >
              Username or Email
            </label>
            <input
              id="usernameOrEmail"
              type="text"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-grey rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-dark"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-grey rounded-md shadow-sm focus:outline-none focus:ring-green focus:border-green sm:text-sm"
              required
            />
          </div>
          {error && <p className="text-red text-sm mt-2">{error}</p>}
          {successMessage && (
            <p className="text-green text-sm mt-2">{successMessage}</p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green text-white font-bold rounded-md hover:bg-green200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
            disabled={loading}
          >
            {loading ? (
              <span className="inline-flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-green animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                Loading...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
