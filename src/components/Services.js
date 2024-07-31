import { useInView } from "react-intersection-observer";
import ServiceItem from "./ServiceItem";
import searchengine from "../assets/searchengine.png";
import analytics from "../assets/alanytics.png";
import mijoz from "../assets/mijoz.png";
import tajriba from "../assets/tajriba.png";

function Services() {
  const { ref: serviceRef, inView: serviceInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      id="service"
      className="container max-w-screen-xl dark:text-white font-['SpaceGrotesk'] flex-col md:flex-row gap-12 md:gap-16 items-center justify-center mx-auto p-4 md:p-6 lg:p-8"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full md:w-auto">
        <h1 className="bg-green p-1 text-3xl rounded text-black text-center font-medium md:mb-0 mb-4">
          Afzalliklar
        </h1>
        <p className="text-center md:text-left w-full md:w-auto text-black dark:text-white">
          Raqamli menyu bilan ishlash osonroq. Menyuni yuklash tezroq. Raqamli{" "}
          <br />
          menyuda ko'proq foydali ma'lumotlar mavjud.
        </p>
      </div>
      <div
        ref={serviceRef}
        className={`w-full justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mt-28 transition-transform duration-500 ease-in-out ${
          serviceInView
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-10 opacity-0"
        }`}
      >
        <ServiceItem
          main={"Mijoz tajribasini"}
          submain={"oshirish"}
          title={
            "Raqamli menyu bilan ishlash osonroq. Menyuni yuklash tezroq. Raqamli menyuda ko'proq foydali ma'lumotlar mavjud."
          }
          image={tajriba}
        />
        <ServiceItem
          main={"QR kod menyusi"}
          submain={"savdoni oshiradi"}
          image={searchengine}
          title={
            "Qulay menyu tilini almashtirish - ko'proq mehmonlar-chet elliklar."
          }
        />
        <ServiceItem
          main={"Biznes resurslarini"}
          submain={"Tejash"}
          image={analytics}
          title={
            "Raqamli QR kod menyusi ko'proq sotadi. Suratlar ishtahani oshiradi - tuyadi o'rtacha chekni oshiradi."
          }
        />
        <ServiceItem
          main={"Yangi mijozlarni"}
          submain={"jalb qilish"}
          title={
            "Bizning QR menyumiz darhol ishlaydi. Ilovalarni o'rnatish, terminallarni sotib olish, tasdiqlashni kutish va hokazo larsiz."
          }
          image={mijoz}
        />
      </div>
    </div>
  );
}

export default Services;
