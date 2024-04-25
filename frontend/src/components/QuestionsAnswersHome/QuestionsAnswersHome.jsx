import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswersHome.css";
import QuestionSvg from "../../utils/QuestionSvg";
import StarSvg from "../../utils/StarSvg";
import ShippingSvg from "../../utils/ShippingSvg";
import ReturnSvg from "../../utils/ReturnSvg";
const QuestionsAnswersHome = ({ landing }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  const QAs = [
    {
      question: "How does it work?",
      answer:
        "While you will notice softer, smoother, and instantly hydrated skin, it's important to know that changing your anti-aging routine will take a few weeks to show more permanent results. Most wrinkle creams are between 1 and 2 fl oz. Please note that Gle for Wrinkles is 4 FL OZ (double the size of most products) to ensure you have enough product for at least 60 days. Yes, for the best results, you should combine your wrinkle cream with other Gle products based on your routine. Pro tip: Wrinkle Cream works best with an Eye Serum and a Night Time Retinol Cream",
      answer_id: "1",
    },
    {
      question: "How to use?",
      answer:
        "You can use the product during the day and during the night, but for best results, we recommend you bundle it with a Retinol Night Cream!",
      answer_id: "2",
    },
    {
      question: "How do I ship?",
      answer:
        "Order processing takes 1-3 business days before shipment. Once your item/s is dispatched, the estimated delivery time is: - USA: 2-5 business days - UK: 7-18 business days - Australia: 7-18 business days - Canada: 7-18 business days - Europe: 7-18 business days - Rest of world: 14-20 business days",
      answer_id: "3",
    },
    {
      question: "Refund Policy",
      answer:
        "We love our Gle skincare and we're confident you will too! In case things don't go as planned, our return and refund policy is designed to make things as easy as possible for you. <a href='/refund-policy' style='text-decoration: underline;' >Click here</a> to learn more about how we can help.",
      answer_id: "4",
    },
  ];

  return (
    <div
      id="q&a"
      className={`w-full flex flex-wrap justify-center items-center gap-y-12 ${
        landing ? "py-10" : "py-0"
      }`}
    >
      {landing ? (
        <div className="w-full flex flex-wrap justify-center">
          <h1 className="w-full text-center  text-yellow-700 font-sans-400 text-xl">
            Respuestas a tus preguntas
          </h1>
          <p className="w-full text-center text-gray-900 font-sans-500 text-4xl">
            Preguntas frecuentes
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="w-full flex flex-wrap justify-start items-center space-y-2 max-w-[800px]">
        {QAs?.map((qa, index) => (
          <div key={index}>
            <div className="w-full">
              <button
                className="w-full flex justify-between items-center space-x-2 text-gray-200 py-2"
                onClick={() => {
                  answer !== qa.answer_id
                    ? handleAnswer(qa.answer_id)
                    : handleAnswer("");
                }}
              >
                {index === 0 && <QuestionSvg />}
                {index === 1 && <StarSvg />}
                {index === 2 && <ShippingSvg />}
                {index === 3 && <ReturnSvg />}

                <span className="w-3/4 flex-grow text-left font-sans-600 text-gray-800 text-md lg:text-lg">
                  {qa.question}
                </span>
                <IoIosArrowDown
                  className="w-1/4 md:w-auto text-gray-700"
                  style={{
                    transform: `rotate(${
                      answer === qa.answer_id ? 180 : 0
                    }deg)`,
                    transition: "transform 0.5s",
                  }}
                />
              </button>
            </div>
            <div
              className={`w-full  answer text-left ${
                answer === qa.answer_id ? "show" : ""
              }`}
            >
              <span
                className="flex-grow text-left font-sans-300 text-gray-500 text-md lg:text-lg"
                dangerouslySetInnerHTML={{ __html: qa.answer }}
              ></span>
            </div>
            <div className="w-full flex justify-center ">
              <div className="w-full">
                <hr className=" border-[0.5pxrem] border-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswersHome;
