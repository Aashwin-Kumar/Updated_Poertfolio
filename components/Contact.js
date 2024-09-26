import { useState, useEffect } from "react";

import Image from "next/image";
import hands from "../assets/img/newemail.gif";

const Contact = () => {
  const [dailyQuote, setDailyQuote] = useState("");

  const dailyQuotes = [
    "The Internet is becoming the town square for the global village of tomorrow. - Bill Gates",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Technology is best when it brings people together. - Matt Mullenweg",
    "You have to dream before your dreams can come true. - Dr. APJ Abdul Kalam",
    "The power of youth is the common wealth for the entire world. - Swami Vivekananda",
    "Success is not a destination, but the road that you're on. - Shah Rukh Khan",
    "Education is the most powerful weapon which you can use to change the world. - Dr. B.R. Ambedkar",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "AI is the new electricity. - Andrew Ng",
    "Data is the new oil. - Clive Humby",
    "Data are becoming the new raw material of business. - Craig Mundie",
    "The world’s most valuable resource is no longer oil, but data. - The Economist",
    "Data really powers everything that we do. - Jeff Weiner",
  ];

  const fetchRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * dailyQuotes.length);
    return dailyQuotes[randomIndex];
  };

  const updateDailyQuote = () => {
    const quote = fetchRandomQuote();
    setDailyQuote(quote);
  };

  useEffect(() => {
    updateDailyQuote();
    const intervalId = setInterval(() => {
      updateDailyQuote();
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="max-w-lg w-full text-center m-auto pt-40 pb-10">
        <h1 className="sm:text-3xl text-lg lg:text-2xl pt-5">
          Thanks for stopping by my little corner of the internet. It's great to
          have you here!
        </h1>
        <a
          href="mailto:ashwinkumar577@gmail.com"
          className="mt-10 inline-block"
        >
          <span className="border border-blue-800 shadow-lg shadow-sky-300 hover:shadow-md transition duration-300 rounded-full flex items-center justify-center px-6 py-4 cursor-pointer">
            <span className="text-base md:text-xl">Let's Connect!</span>
            <span className="ml-2 pt-2">
              <Image src={hands} width={24} height={24} alt="lets connect" />
            </span>
          </span>
        </a>

        <div className="mx-auto sm:w-4/5 pt-5">
          <div className="mx-auto font-style: italic text-base  text-center">
          <div>
          Todays Quote ✍
          </div>
            "{dailyQuote}"
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
