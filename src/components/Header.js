import Button from "./Button";
import DayImage from "../assets/order.jpg";
import NightImage from "../assets/orderblack.png";
import { useEffect, useState, useRef } from "react";
import "tailwindcss/tailwind.css"; // Tailwind CSS ni import qilish

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
    return () => mediaQuery.removeEventListener("change", () => {});
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Elementning kamida 10% ko'rinsa
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div
      ref={headerRef}
      className={`max-w-screen-xl dark:text-white font-['SpaceGrotesk'] flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-center mx-auto p-4 mt-24 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 md:mb-8 leading-tight">
          Muvaffaqiyat uchun
          <br /> raqamli Menyu <br /> navigatsiyasi
        </h1>
        <p className="mb-6 md:mb-8 text-sm md:text-base">
          Bizning maxsulot ijtimoiy media marketingi va oson interface kabi bir
          qator xizmatlar orqali korxonalarning onlayn rivojlanishi va
          muvaffaqiyat yordam beradi.
        </p>
        <Button text={"Boshlash"} onClick={handleClick} />
      </div>
      <div className="flex-shrink-0">
        <img
          className="w-full h-0 md:h-auto lg max-w-xs md:max-w-sm lg:max-w-md"
          src={isDarkMode ? NightImage : DayImage}
          alt="Header Image"
        />
      </div>
    </div>
  );
}

export default Header;
