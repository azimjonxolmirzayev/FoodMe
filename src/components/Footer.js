import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);

    localStorage.setItem("lang", newLang);
  };

  return (
    <footer className="bg-white dark:border-t-[1px] dark:border-green200 dark:bg-clip-padding backdrop-filter dark:backdrop-filter backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-10 dark:bg-opacity-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                FoodMe
              </span>
            </a>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-white">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                {t("blogs")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                foodme@oddmenu.com
              </a>
            </li>

            <li className="text-black">
              <select onChange={handleLanguageChange} value={i18n.language}>
                <option value="en">{t("english")}</option>
                <option value="uz">{t("uzbek")}</option>
                <option value="ru">{t("russion")}</option>
              </select>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-white">
          © 2024{" "}
          <a href="#" className="hover:underline">
            FoodMe™
          </a>
        </span>
      </div>
    </footer>
  );
}
