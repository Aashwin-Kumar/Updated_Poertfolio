import Image from "next/image";
import profile from "../assets/img/blink.gif";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaDev } from "@react-icons/all-files/fa/FaDev";
import { FaKaggle } from "@react-icons/all-files/fa/FaKaggle";


const Card = () => {
  const handleDownloadClick = () => {
    try {
      window.open(
        "https://drive.google.com/drive/folders/1D4xZRbmFEl3COi35hu2Z0ALXeGfK3wwU?usp=sharing"
      );
    } catch (error) {
      alert("Failed to open the resume link:", error);
    }
  };
  return (
    <>
      <div className="w-full pb-32">
        <div className="flex flex-col justify-center max-w-sm	mx-auto shadow-2xl shadow-sky-200 rounded-t-full p-5">
          <div>
            <Image
              className="shadow-md shadow-red-45 rounded-full drop-shadow-sm"
              src={profile}
              alt="profile-photo"
            />
          </div>

          <div className="text-center mt-6">
            <p className="text-xl sm:text-2xl text-black-600 font-semibold lg:font-cursive">
              ASHWIN KUMAR{" "}
            </p>
            <p className="text-base sm:text-lg pt-4 pb-5 px-5 font-semibold w-auto inline-block border-b-2 ">
              Engineer | Marketer | Analyst
            </p>
            <div className="flex align-center justify-center gap-4 pt-2">
              <button
                className="rounded-lg border border-blue-800 shadow-md shadow-sky-300 hover:shadow-md transition duration-300 px-4 py-1 cursor-pointer"
                onClick={handleDownloadClick}
                aria-label="Download Resume"
              >
                📋 Resume
              </button>

              <button
                className="rounded-lg border border-blue-800 shadow-md shadow-sky-300 hover:shadow-md transition duration-300 px-4 py-1 cursor-pointer"
                onClick={() => (window.location.href = "./#projects")}
              >
                👨🏻‍💻 Projects
              </button>
            </div>
            <div className="flex align-center justify-center mt-4">
              <a
                className="text-xl mr-4 m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-100 rounded-full"
                href="https://twitter.com/Ashw1nKumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
                <span className="sr-only">FaTwitter</span>
              </a>

              <a
                className="text-xl mr-4 m-1 p-1 sm:m-2 sm:p-2 text-black-700 hover:bg-blue-100 rounded-full"
                href="https://github.com/Aashwin-Kumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-blue-700" />
                <span className="sr-only">GitHub</span>
              </a>

              <a
                className="text-xl m-1 mr-4 p-1 sm:m-2 sm:p-2 text-blue-700	 hover:bg-blue-100 rounded-full"
                href="https://www.linkedin.com/in/ashwin-kumar-data-analyst"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span className="sr-only">FaLinkedin</span>
              </a>
              <a
                className="text-xl mr-4 m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-100 rounded-full"
                href="https://www.kaggle.com/aashwinkumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaKaggle />
                <span className="sr-only">Kaggle</span>
              </a>

              <a
                className="text-xl m-1 mr-4 p-1 sm:m-2 sm:p-2 text-inherit hover:bg-blue-100 rounded-full"
                href="https://dev.to/aashwinkumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDev className="text-blue-700" />
                <span className="sr-only">DEV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
