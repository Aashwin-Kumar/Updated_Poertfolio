import Image from "next/image";
import sms from "../assets/img/sms.png";
import funds from "../assets/img/fund.jpeg";

const Projects = () => {
  return (
    <>
      <div
        className="max-w-7xl mx-auto justify-center py-12 pt-40 pb-40"
        id="projects"
      >
        <p className="text-center text-2xl sm:text-4xl lg:font-cursive">
          Browse My Recent Projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center pt-2 cursor-pointer">
          <div className="flex flex-col border w-full p-10 m-10 overflow-hidden bg-white shadow-xl shadow-sky-200 rounded-xl hover:shadow-md transition duration-200">
            <a
              href="https://cleansms.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="w-full h-48 object-cover shadow-md shadow-red-45 rounded-lg drop-shadow-sm" // Set a fixed height
                src={sms}
                alt="project-sms-spam-detection"
              />
            </a>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              SMS SPAM DETECTION USING MACHINE LEARNING
            </p>
          </div>

          <div className="flex flex-col border w-full p-10 m-10 overflow-hidden bg-white shadow-xl shadow-sky-200 rounded-xl hover:shadow-md transition duration-200">
            <Image
              className="w-full h-48 object-cover shadow-md shadow-red-45 rounded-lg drop-shadow-sm" // Set a fixed height
              src={funds}
              alt="project-sms-spam-detection"
            />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              EDA On Indian Election Fund Flow
            </p>
          </div>

          <div className="flex flex-col border w-full p-10 m-10 overflow-hidden bg-white shadow-xl shadow-sky-200 rounded-xl hover:shadow-md transition duration-200">
            <Image
              className="w-full h-48 object-cover shadow-md shadow-red-45 rounded-lg drop-shadow-sm" // Set a fixed height
              src={sms}
              alt="project-sms-spam-detection"
            />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              SMS SPAM DETECTION USING MACHINE LEARNING
            </p>
          </div>
        </div>
        <a
          className="flex align-center justify-center pt-10"
          href="https://github.com/Aashwin-Kumar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="rounded-lg border border-blue-800 shadow-md shadow-sky-300 hover:shadow-md transition duration-200 px-10 py-4 cursor-pointer"
            aria-label="Download Resume"
          >
            Check Them All
          </button>
        </a>
      </div>
    </>
  );
};

export default Projects;
