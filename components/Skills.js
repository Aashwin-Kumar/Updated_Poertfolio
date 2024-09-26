import { SiGoogleads } from "@react-icons/all-files/si/SiGoogleads";
import { FaPeopleCarry } from "@react-icons/all-files/fa/FaPeopleCarry";
import { GiThreeFriends } from "@react-icons/all-files/gi/GiThreeFriends";
import { GiPublicSpeaker } from "@react-icons/all-files/gi/GiPublicSpeaker";
import { GiThink } from "@react-icons/all-files/gi/GiThink";
import { GiMonaLisa } from "@react-icons/all-files/gi/GiMonaLisa";

const Skills = () => {
  return (
    <>
      <div
        className="max-w-4xl mx-auto justify-center py-12 pt-40 pb-40"
        id="scroll"
      >
        <p className="text-center text-2xl sm:text-4xl lg:font-cursive">
          SOFT SKILLS
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center pt-2">
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 rounded-xl hover:shadow-md transition duration-400">
            <SiGoogleads className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              DOMAIN KNOWLEDGE
            </p>
          </div>
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <FaPeopleCarry className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              COLLABORATIVE
            </p>
          </div>
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <GiThreeFriends className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black truncate">
              TEAM PLAYER
            </p>
          </div>
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <GiPublicSpeaker className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-xl font-semibold text-center text-black">
              COMMUNICATIONS
            </p>
          </div>
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <GiThink className="mx-auto text-4xl sm:text-5xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              CRITICAL THINKING
            </p>
          </div>
          <div className="flex flex-col w-64 p-10 m-6 overflow-hidden bg-white shadow-xl shadow-sky-200 hover:shadow-md transition duration-400 rounded-xl">
            <GiMonaLisa className="mx-auto text-4xl sm:text-6xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-black">
              CREATIVE
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
