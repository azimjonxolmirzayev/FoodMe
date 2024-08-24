import { useState } from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navclick = () => {
    const accessToken = sessionStorage.getItem("access_token");

    if (accessToken) {
      navigate("/admin");
    } else {
      navigate("/registration");
    }
  };

  return (
    <nav className="bg-white sticky inset-0 font-['SpaceGrotesk'] z-10 dark:bg-dark bg-clip-padding dark:bg-clip-padding backdrop-filter dark:backdrop-filter backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-10 dark:bg-opacity-10 dark:border-b-[1px] dark:border-green200 dark:text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-auto">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="font-['SpaceGrotesk'] self-center text-2xl font-semibold whitespace-normal flex align-top">
            FoodMe <span className={`text-[8px] mt-[-5px]`}>demo</span>
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
          <Button text={t("createmenu")} onClick={navclick} />

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  text-black rounded-lg md:hidden hover:bg-orange-400 dark:text-white hover:dark:text-zinc-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium font-['SpaceGrotesk'] p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-orange-400 md:dark:bg-orange-400 dark:border-orange-400">
            <li>
              <a href="#afzalliklar">{t("adventages")}</a>
            </li>
            <li>
              <a href="#xizmatlar">{t("service")}</a>
            </li>
            <li>
              <a href="#price">{t("price")}</a>
            </li>
            <li>
              <a href="#bepulsinov">
                <button>{t("freetrial")}</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
