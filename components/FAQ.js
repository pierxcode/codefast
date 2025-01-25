"use client"; // This marks the component as a Client Component
import React, { useState } from "react";

const faqs = [
  {
    question: "Waarom heb ik Klanten.io nodig?",
    answer: "Klanten.io helpt je feedback te verzamelen en producten te bouwen waar klanten van houden.",
  },
  {
    question: "Werkt het voor eenmalige aankopen?",
    answer: "Ja, je kunt feedback verzamelen, zelfs voor producten die eenmalig worden gekocht.",
  },
  {
    question: "Werkt het voor abonnementen?",
    answer: "Ja, Klant.io werkt naadloos samen met abonnementsmodellen.",
  },
  {
    question: "Is het veilig?",
    answer: "Ja, Klant.io volgt de beste beveiligingspraktijken uit de industrie.",
  },
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="dark py-32 px-8 max-w-3xl mx-auto">
      <p className="text-sm uppercase font-medium text-center text-primary mb-4">
        FAQ
      </p>
      <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
        Veelgestelde vragen
      </h2>
      <ul className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <li key={index} className="border-b border-gray-700 pb-5 pt-1">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`font-medium ${
                    isOpen ? "text-primary font-bold" : "text"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="text-xl">{isOpen ? "−" : "+"}</span>
              </button>
              <div
                className={`faq-answer overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  transition: "max-height 0.5s ease-in-out, opacity 0.3s ease-in-out",
                }}
              >
                <p className="mt-3 0">{faq.answer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}