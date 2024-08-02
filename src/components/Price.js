import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function Price() {
  const { ref: serviceRef, inView: serviceInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { t, i18n } = useTranslation();

  return (
    <div
      id="price"
      className="container max-w-screen-xl dark:text-white font-['SpaceGrotesk'] flex-col md:flex-row gap-12 md:gap-16 items-center justify-center mx-auto p-4 md:p-6 lg:p-8"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full md:w-auto">
        <h1 className="bg-green p-1 text-3xl rounded text-black text-center font-medium md:mb-0 mb-4">
          {t("narxlar")}
        </h1>
        <p className="text-center md:text-left w-full md:w-auto text-black dark:text-white">
          {t("narxlartext1")}
        </p>
      </div>
      <div
        ref={serviceRef}
        className={`w-full justify-items-center text-black  grid grid-cols-1 md:grid-cols-1 md:justify-center lg:grid-cols-3 gap-6 md:gap-8 mt-28 transition-transform duration-500 ease-in-out `}
      >
        <div
          className={`bg-grey w-full h-[300px] text-center flex flex-col items-center justify-between py-[30px] rounded-xl  hover:scale-[1.01] border-2 border-black transition-transform duration-300 cursor-pointer`}
        >
          <p className={`text-xl md:text-3xl`}>{t("narxlartext2")}</p>
          <h1 className={`text-5xl font-semibold text-green`}>
            {t("narxlartext3")}
          </h1>
          <p className={`text-sm text-center`}>{t("narxlartext4")}</p>
        </div>

        <div
          className={`bg-grey w-full h-[300px] flex flex-col items-center justify-between py-[30px] rounded-xl  hover:scale-[1.01] border-2 border-black transition-transform duration-300 cursor-pointer`}
        >
          <p className={`text-xl md:text-3xl`}>{t("narxlartext5")}</p>
          <h1 className={`text-5xl font-semibold text-green`}>
            {t("narxlartext6")}
          </h1>
          <p className={`text-sm text-center`}>{t("narxlartext7")}</p>
        </div>

        <div
          className={`bg-grey w-full h-[300px] flex flex-col items-center justify-between py-[30px] rounded-xl  hover:scale-[1.01] border-2 border-black transition-transform duration-300 cursor-pointer`}
        >
          <p className={`text-xl md:text-3xl`}>{t("narxlartext8")}</p>
          <h1 className={`text-5xl font-semibold text-green`}>
            {t("narxlartext9")}
          </h1>
          <p className={`text-sm text-center`}>{t("narxlartext10")}</p>
        </div>
      </div>
    </div>
  );
}

export default Price;
