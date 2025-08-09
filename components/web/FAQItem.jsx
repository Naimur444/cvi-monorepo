import React from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`bg-white p-4 rounded-lg shadow mb-4 ${
        isOpen ? "border-t-4 border-[#0E4F53]" : ""
      }`}
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-2 text-left font-semibold  focus:outline-none"
      >
        {question}
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
              stroke="#181818"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};
export default FAQItem;
