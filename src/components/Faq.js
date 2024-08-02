import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Faq() {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };
  const { t, i18n } = useTranslation();

  return (
    <div
      id="service"
      className="container max-w-screen-xl dark:text-white font-['SpaceGrotesk'] flex-col md:flex-row gap-12 md:gap-16 items-center justify-center mx-auto p-4 md:p-6 lg:p-8"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full md:w-auto">
        <h1 className="bg-green p-1 text-3xl rounded text-black text-center font-medium md:mb-0 mb-4">
          {t("faq")}
        </h1>
        <p className="text-center md:text-left w-full md:w-auto text-black dark:text-white">
          {t("faqtext1")}
        </p>
      </div>
      <div className="w-full justify-items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 md:gap-8 mt-28 transition-transform duration-500 ease-in-out">
        <div
          id="accordion-color"
          data-accordion="collapse"
          data-active-classes="bg-green dark:bg-green text-black text-blue-600 dark:text-white"
        >
          <h2 id="accordion-color-heading-1">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 rounded-t-xl gap-3 ${
                activeIndexes.includes(0)
                  ? "bg-green dark:bg-green text-black"
                  : ""
              }`}
              onClick={() => toggleAccordion(0)}
              aria-expanded={activeIndexes.includes(0)}
              aria-controls="accordion-color-body-1"
            >
              <span>{t("faqtext2")}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transform ${
                  activeIndexes.includes(0) ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-1"
            className={`${
              activeIndexes.includes(0)
                ? "max-h-[1000px] transition-max-height duration-500 ease-in-out"
                : "max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out"
            }`}
            aria-labelledby="accordion-color-heading-1"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {t("faqtext3")}
              </p>
            </div>
          </div>
          <h2 id="accordion-color-heading-2">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 gap-3 ${
                activeIndexes.includes(1)
                  ? "bg-green dark:bg-green text-black"
                  : ""
              }`}
              onClick={() => toggleAccordion(1)}
              aria-expanded={activeIndexes.includes(1)}
              aria-controls="accordion-color-body-2"
            >
              <span>{t("faqtext4")}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transform ${
                  activeIndexes.includes(1) ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-2"
            className={`${
              activeIndexes.includes(1)
                ? "max-h-[1000px] transition-max-height duration-500 ease-in-out"
                : "max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out"
            }`}
            aria-labelledby="accordion-color-heading-2"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {t("faqtext5")}
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {t("faqtext6")}
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {t("faqtext7")}
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {t("faqtext8")}
              </p>
            </div>
          </div>
          <h2 id="accordion-color-heading-3">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 gap-3 ${
                activeIndexes.includes(2)
                  ? "bg-green dark:bg-green text-black"
                  : ""
              }`}
              onClick={() => toggleAccordion(2)}
              aria-expanded={activeIndexes.includes(2)}
              aria-controls="accordion-color-body-3"
            >
              <span>{t("faqtext9")}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transform ${
                  activeIndexes.includes(2) ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-3"
            className={`${
              activeIndexes.includes(2)
                ? "max-h-[1000px] transition-max-height duration-500 ease-in-out"
                : "max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out"
            }`}
            aria-labelledby="accordion-color-heading-3"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {t("faqtext10")}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faqtext11")}
              </p>
            </div>
          </div>
          <h2 id="accordion-color-heading-4">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 gap-3 ${
                activeIndexes.includes(4)
                  ? "bg-green dark:bg-green text-black"
                  : ""
              }`}
              onClick={() => toggleAccordion(4)}
              aria-expanded={activeIndexes.includes(4)}
              aria-controls="accordion-color-body-4"
            >
              <span>{t("faqtext12")}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transform ${
                  activeIndexes.includes(4) ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-4"
            className={`${
              activeIndexes.includes(4)
                ? "max-h-[1000px] transition-max-height duration-500 ease-in-out"
                : "max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out"
            }`}
            aria-labelledby="accordion-color-heading-3"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {t("faqtext13")}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faqtext14")}
              </p>
            </div>
          </div>
          <h2 id="accordion-color-heading-5">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 gap-3 ${
                activeIndexes.includes(5)
                  ? "bg-green dark:bg-green text-black"
                  : ""
              }`}
              onClick={() => toggleAccordion(5)}
              aria-expanded={activeIndexes.includes(5)}
              aria-controls="accordion-color-body-5"
            >
              <span>{t("faqtext15")}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transform ${
                  activeIndexes.includes(5) ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-5"
            className={`${
              activeIndexes.includes(5)
                ? "max-h-[1000px] transition-max-height duration-500 ease-in-out"
                : "max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out"
            }`}
            aria-labelledby="accordion-color-heading-3"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {t("faqtext16")}
              </p>
            </div>
          </div>
          <h2 id="accordion-color-heading-6">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 gap-3 ${
                activeIndexes.includes(6)
                  ? "bg-green dark:bg-green text-black"
                  : ""
              }`}
              onClick={() => toggleAccordion(6)}
              aria-expanded={activeIndexes.includes(6)}
              aria-controls="accordion-color-body-6"
            >
              <span>{t("faqtext17")}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transform ${
                  activeIndexes.includes(6) ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-6"
            className={`${
              activeIndexes.includes(6)
                ? "max-h-[1000px] transition-max-height duration-500 ease-in-out"
                : "max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out"
            }`}
            aria-labelledby="accordion-color-heading-6"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {t("faqtext18")}
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {t("faqtext19")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
