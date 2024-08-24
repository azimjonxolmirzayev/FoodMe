import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MenuList from "../components/Menu/MenuList";
import { FaMapMarkerAlt, FaPhone, FaWifi } from "react-icons/fa";

const BASE_URL = "https://fastapi-example-ito8.onrender.com";

function Cafes() {
  const { cafe_id } = useParams();
  const [cafe, setCafe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);

    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    const fetchCafeData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/cafes/${cafe_id}`);
        setCafe(response.data);
      } catch (err) {
        setError("Bunday restoran ID si topilmadi! ):");
      } finally {
        setLoading(false);
      }
    };

    fetchCafeData();
  }, [cafe_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      className={`max-w-screen-sm font-['SpaceGrotesk'] flex flex-wrap items-center mx-auto justify-between  h-auto`}
    >
      <div
        className={`back bg-fixed h-[200px] w-full flex items-end text-black justify-end`}
      >
        <select
          className="h-10 m-5 rounded-md p-2"
          onChange={handleLanguageChange}
          value={i18n.language}
        >
          <option value="en">{t("english")}</option>
          <option value="uz">{t("uzbek")}</option>
          <option value="ru">{t("russion")}</option>
        </select>
      </div>
      <div className="w-full h-auto pb-5 bg-white relative -top-2 rounded-t-2xl text-black">
        <h1 className="text-3xl m-5 font-semibold">{cafe.name}</h1>
        <a href="#" className="flex  text-sm my-2 mx-4 gap-2">
          <FaMapMarkerAlt size={18} color="grey" />
          <span>{cafe.location}</span>
        </a>
        <div className="flex">
          <div className="flex text-sm  my-2 mx-4 gap-2">
            <FaPhone size={18} color="grey" />
            <span> {cafe.phonenumber} </span>
          </div>
          <div className="flex text-sm  my-2 mx-4 gap-2">
            <FaWifi size={18} color="grey" />
            <span> {cafe.wifipass} </span>
          </div>
        </div>
        <p className="text-sm  my-2 mx-4 text-justify"> {cafe.description} </p>

        <div className="my-2 mx-4">
          <button className={`bg-green py-1 px-4 rounded-3xl`}>
            {t("mainMenuButton")}
          </button>

          <form className="max-w-md mx-auto mt-5">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm outline-none rounded-lg bg-grey"
                placeholder={t("searchPlaceholder")}
                required
              />
              <button
                type="submit"
                className="text-black absolute end-2.5 bottom-2.5 bg-green font-medium rounded-lg text-sm px-4 py-2 "
              >
                {t("searchButton")}
              </button>
            </div>
          </form>
          <MenuList />
        </div>
      </div>
      {/* <div>
        <h1>{cafe.name}</h1>
        <p>Location: {cafe.location}</p>
        <p>Description: {cafe.description}</p>
        <p>Phone Number: {cafe.phonenumber}</p>
        <p>WiFi Password: {cafe.wifipass}</p>
        <p>Logo URL: {cafe.logo_url}</p>
        <p>Image URL: {cafe.image_url}</p>
      </div> */}
    </div>
  );
}

export default Cafes;
