import { useTranslation } from "react-i18next";

function Freetrial() {
  const { t, i18n } = useTranslation();

  return (
    <div
      id="bepulsinov"
      className="container max-w-screen-xl dark:text-white font-['SpaceGrotesk'] flex-col md:flex-row gap-12 md:gap-16 items-center justify-center mx-auto p-4 md:p-6 lg:p-8"
    >
      <div
        className={`w-full justify-items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 md:gap-8 transition-transform duration-500 ease-in-out `}
      >
        <div
          className={`md:w-2/4 lg:w-2/4 h-auto rounded-xl border-2 border-black bg-grey flex-col text-center text-black p-8`}
        >
          <h1 className={`text-xl font-semibold`}>{t("freetrialtext")}</h1>
          <p className={`text-sm my-6`}>{t("freetrialtext1")}</p>
          <button
            className={`border border-green py-2 px-4 rounded-lg text-black`}
          >
            {t("freetrial")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Freetrial;
