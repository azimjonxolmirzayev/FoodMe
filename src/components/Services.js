import { useInView } from "react-intersection-observer";
import ServiceItem from "./ServiceItem";
import searchengine from "../assets/searchengine.png";
import analytics from "../assets/alanytics.png";
import mijoz from "../assets/mijoz.png";
import tajriba from "../assets/tajriba.png";
import { useTranslation } from "react-i18next";

function Services() {
  const { ref: serviceRef, inView: serviceInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { t, i18n } = useTranslation();

  return (
    <div
      id="afzalliklar"
      className="container max-w-screen-xl dark:text-white font-['SpaceGrotesk'] flex-col md:flex-row gap-12 md:gap-16 items-center justify-center mx-auto p-4 md:p-6 lg:p-8"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full md:w-auto">
        <h1 className="bg-green p-1 text-3xl rounded text-black text-center font-medium md:mb-0 mb-4">
          {t("adventages")}
        </h1>
        <p className="text-center md:text-left w-full md:w-auto text-black dark:text-white">
          {t("qrmenu")}
        </p>
      </div>
      <div
        ref={serviceRef}
        className={`w-full justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mt-28 transition-transform duration-500 ease-in-out`}
      >
        <ServiceItem
          main={t("serviceItem1main")}
          submain={t("serviceItem1submain")}
          title={t("qrmenu")}
          image={tajriba}
        />
        <ServiceItem
          main={t("serviceItem2main")}
          submain={t("serviceItem2submain")}
          image={searchengine}
          title={t("serviceItem2longtext")}
        />
        <ServiceItem
          main={t("serviceItem3main")}
          submain={t("serviceItem3submain")}
          image={analytics}
          title={t("serviceItem3longtext")}
        />
        <ServiceItem
          main={t("serviceItem4main")}
          submain={t("serviceItem4submain")}
          title={t("serviceItem4longtext")}
          image={mijoz}
        />
      </div>
    </div>
  );
}

export default Services;
