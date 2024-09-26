// import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BiSun } from "@react-icons/all-files/bi/BiSun";
import { BiMoon } from "@react-icons/all-files/bi/BiMoon";
// import Myday from "./myDay";
import logo from "../assets/img/logo2.png";
const Heads = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounnted] = useState(false);

  useEffect(() => {
    setMounnted(true);
  }, []);

  const changeTheme = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <div className="flex flex-col items-center">
          <BiMoon
            className="mt-5"
            size={30}
            role="button"
            onClick={() => setTheme("light")}
          />
          <span className="text-xs font-semibold">Dark</span>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center">
          <BiSun
            className="mt-5 animate-spin-slow"
            color="black"
            size={30}
            role="button"
            onClick={() => setTheme("dark")}
          />
          <span className="text-xs text-black font-semibold">Light</span>
        </div>
      );
    }
  };

  return (
    <>
      <div className="p-5 flex justify-between">
        <a className="mt-4 lg:w-28 w-20 cursor-pointer " href="#">
          {/* <a className="text-3xl lg:text-5xl ml-1 lg:ml-5 font-Helvetica cursor-pointer " href="https://www.ashwink.net/" >{"<A>"} </a> */}
          <Image src={logo} alt="logo" />
        </a>
        <div className="text-white pt-1">
          {changeTheme()}

          {/* <BiSun size={20}/> */}
        </div>
      </div>
    </>
  );
};

export default Heads;
