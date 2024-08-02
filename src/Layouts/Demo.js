import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhone, FaWifi } from "react-icons/fa";
import MenuList from "../components/Menu/MenuList";

function Demo() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);

    localStorage.setItem("lang", newLang);
  };
  return (
    <div
      className={`max-w-screen-sm font-['SpaceGrotesk'] flex flex-wrap items-center mx-auto justify-between  h-auto`}
    >
      <div
        className={`back h-[200px] w-full flex items-end text-black justify-end`}
      >
        <select
          className="h-10 m-5 rounded-md p-2 "
          onChange={handleLanguageChange}
          value={i18n.language}
        >
          <option value="en">{t("english")}</option>
          <option value="uz">{t("uzbek")}</option>
          <option value="ru">{t("russion")}</option>
        </select>
      </div>
      <div className="w-full h-auto pb-5 bg-white relative -top-2 rounded-t-2xl text-black">
        <h1 className="text-3xl m-5 font-semibold">{t("cafeName")}</h1>
        <a href="#" className="flex  text-sm my-2 mx-4 gap-2">
          <FaMapMarkerAlt size={18} color="grey" />
          <span>{t("location")}</span>
        </a>
        <div className="flex">
          <div className="flex text-sm  my-2 mx-4 gap-2">
            <FaPhone size={18} color="grey" />
            <span>+1234567890</span>
          </div>
          <div className="flex text-sm  my-2 mx-4 gap-2">
            <FaWifi size={18} color="grey" />
            <span>WiFi_Password123</span>
          </div>
        </div>
        <p className="text-sm  my-2 mx-4 text-justify">{t("description")}</p>

        <div className="my-2 mx-4">
          <button className={`bg-green py-1 px-4 rounded-3xl`}>
            {t("mainMenuButton")}
          </button>

          <form class="max-w-md mx-auto mt-5">
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm outline-none rounded-lg bg-grey"
                placeholder={t("searchPlaceholder")}
                required
              />
              <button
                type="submit"
                class="text-black absolute end-2.5 bottom-2.5 bg-green font-medium rounded-lg text-sm px-4 py-2 "
              >
                {t("searchButton")}
              </button>
            </div>
          </form>
          <MenuList />
        </div>
      </div>
    </div>
  );
}

export default Demo;
