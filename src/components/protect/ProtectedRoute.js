import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://fastapi-example-ito8.onrender.com";

const ProtectedRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCafe, setHasCafe] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      const accessToken = sessionStorage.getItem("access_token");
      if (!accessToken) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const cafeResponse = await axios.get(`${BASE_URL}/cafes/check`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setIsAuthenticated(true);
        setHasCafe(cafeResponse.data.has_cafe);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!hasCafe) {
    return <Navigate to="/create_cafe" />;
  }

  return element;
};

export default ProtectedRoute;
