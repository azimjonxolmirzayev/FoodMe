import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function Xizmatlar() {
  const { ref: serviceRef } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { t } = useTranslation();

  return (
    <div
      id="xizmatlar"
      className="container max-w-screen-xl dark:text-white font-['SpaceGrotesk'] flex-col md:flex-row gap-12 md:gap-16 items-center justify-center mx-auto p-4 md:p-6 lg:p-8"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full md:w-auto">
        <h1 className="bg-green p-1 text-3xl rounded text-black text-center font-medium md:mb-0 mb-4">
          {t("xizmatlar")}
        </h1>
        <p className="text-center md:text-left w-full md:w-auto text-black dark:text-white">
          {t("xizmatlartext2")}
        </p>
      </div>
      <div
        ref={serviceRef}
        className={`w-full justify-items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 md:gap-8 mt-28 transition-transform duration-500 ease-in-out `}
      >
        <div
          className={`w-full border-2 border-black h-auto rounded-xl bg-grey flex flex-col md:flex-row lg:flex-row text-justify text-black p-4`}
        >
          <p className={`p-8 text-sm lg:w-1/3 md:w-1/3`}>
            {t("xizmatlartext3")}
          </p>
          <div className={`border border-green`}></div>
          <p className={`p-8 text-sm  lg:w-1/3 md:w-1/3`}>
            {" "}
            {t("xizmatlartext4")}
          </p>
          <div className={`border border-green`}></div>
          <p className={`p-8 text-sm  lg:w-1/3 md:w-1/3`}>
            {" "}
            {t("xizmatlartext5")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Xizmatlar;
