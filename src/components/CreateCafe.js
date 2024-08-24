import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://fastapi-example-ito8.onrender.com";

const CreateCafe = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [wifipass, setWifipass] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const textareaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [description]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = sessionStorage.getItem("access_token");

    const newCafe = {
      name,
      location,
      description,
      phonenumber,
      wifipass,
      logo_url: logoUrl,
      image_url: imageUrl,
    };

    try {
      const response = await axios.post(`${BASE_URL}/cafes/`, newCafe, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin");
      console.log("Kafe muvaffaqiyatli yaratildi:", response.data);
    } catch (error) {
      console.error(
        "Kafeni yaratishda xato:",
        error.response ? error.response.data : error.message
      );
      setErrorMessage(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full p-8 bg-white rounded-lg "
      >
        <h2 className="text-3xl font-bold mb-6 text-green text-center">
          Kafe yaratish
        </h2>

        {errorMessage && (
          <div className="mb-4 p-4 text-red bg-red-100 rounded-lg">
            {errorMessage}
          </div>
        )}

        <div className="mb-4">
          <label
            className="block text-black text-sm font-medium mb-2"
            htmlFor="name"
          >
            Kafe nomi
          </label>
          <input
            id="name"
            type="text"
            placeholder="Kafe nomi"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-medium mb-2"
            htmlFor="location"
          >
            Manzil
          </label>
          <input
            id="location"
            type="text"
            placeholder="Manzil"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-medium mb-2"
            htmlFor="description"
          >
            Tavsif
          </label>
          <textarea
            id="description"
            placeholder="Tavsif"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            ref={textareaRef}
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-medium mb-2"
            htmlFor="phonenumber"
          >
            Telefon raqami
          </label>
          <input
            id="phonenumber"
            type="text"
            placeholder="Telefon raqami"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            required
            className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-medium mb-2"
            htmlFor="wifipass"
          >
            WiFi paroli
          </label>
          <input
            id="wifipass"
            type="text"
            placeholder="WiFi paroli"
            value={wifipass}
            onChange={(e) => setWifipass(e.target.value)}
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-medium mb-2"
            htmlFor="logoUrl"
          >
            Logotip URL'i
          </label>
          <input
            id="logoUrl"
            type="text"
            placeholder="Logotip URL'i"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-medium mb-2"
            htmlFor="imageUrl"
          >
            Surat URL'i
          </label>
          <input
            id="imageUrl"
            type="text"
            placeholder="Surat URL'i"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-green text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Kafe yaratish
        </button>
      </form>
    </div>
  );
};

export default CreateCafe;
