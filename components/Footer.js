import ScrollToTop from "react-scroll-up";
import { BiUpArrowCircle } from "@react-icons/all-files/bi/BiUpArrowCircle";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaDev } from "@react-icons/all-files/fa/FaDev";
import { AiTwotoneHeart } from "@react-icons/all-files/ai/AiTwotoneHeart";
import { FaKaggle } from "@react-icons/all-files/fa/FaKaggle";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col shadow-2xl rounded-t-3xl font-thin shadow-sky-300 ">
        <div className="flex justify-center mt-4">
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
            href="https://www.linkedin.com/in/ashwin-kumar-joy"
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
            className="text-xl m-1 mr-4 p-1 sm:m-2 sm:p-2 text-inherit	hover:bg-blue-100 rounded-full"
            href="https://dev.to/aashwinkumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDev className="text-blue-700" />
            <span className="sr-only">DEV</span>
          </a>
        </div>
        <div className="flex mt-5 justify-center">
          <p className="mb-4 mt-5 text-1xl">
            Handcrafted With{" "}
            <span
              className="mr-1 inline-block"
              role={"link"}
              aria-labelledby="heart"
            >
              <AiTwotoneHeart
                className="text-blue-700 animate-pulse"
                size={20}
              />
            </span>{" "}
            By
            <a className="hover:text-blue-600" href="#">
              {" "}
              Ashwin Kumar
            </a>
          </p>
        </div>
        <ScrollToTop showUnder={400}>
          <BiUpArrowCircle size={35} />
        </ScrollToTop>
      </div>
    </>
  );
};

export default Footer;
