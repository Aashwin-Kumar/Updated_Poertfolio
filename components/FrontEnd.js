import { IoLogoJavascript } from "@react-icons/all-files/io/IoLogoJavascript";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { AiOutlineConsoleSql } from "@react-icons/all-files/ai/AiOutlineConsoleSql";
import { SiMicrosoftexcel } from "@react-icons/all-files/si/SiMicrosoftexcel";
import { RiBearSmileFill } from "@react-icons/all-files/ri/RiBearSmileFill";
import { ImSigma } from "@react-icons/all-files/im/ImSigma";
import { FaRobot } from "@react-icons/all-files/fa/FaRobot";
import { SiPowerbi } from "@react-icons/all-files/si/SiPowerbi";
import { BsGraphUp } from "@react-icons/all-files/bs/BsGraphUp";

const FrontEnd = () => {
  return (
    <>
      <div
        className="max-w-4xl mx-auto justify-center py-12 pt-40 pb-40"
        id="scroll"
      >
        <p className="text-center text-2xl sm:text-4xl lg:font-cursive">
          TECHNICAL SKILLS
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center pt-2">
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 rounded-xl hover:shadow-md transition duration-400">
            <SiPython className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              PYTHON
            </p>
          </div>
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <AiOutlineConsoleSql className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              SQL
            </p>
          </div>
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <SiMicrosoftexcel className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black truncate">
              EXCEL
            </p>
          </div>
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <RiBearSmileFill className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              PANDAS
            </p>
          </div>
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <ImSigma className="mx-auto text-4xl sm:text-5xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              STATS
            </p>
          </div>
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <FaRobot className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              ML BASICS
            </p>
          </div>

          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <SiPowerbi className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              POWER BI
            </p>
          </div>

          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <BsGraphUp className="mx-auto text-4xl sm:text-5xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              VISUALIZTION
            </p>
          </div>

          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <IoLogoJavascript className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              JAVASCRIPT
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontEnd;
