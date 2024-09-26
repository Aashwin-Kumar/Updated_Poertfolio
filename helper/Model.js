// import { useState } from "react";
import {useState, useEffect} from "react";
import Image from "next/image";
import Keanu from "../assets/img/keanu.gif";


import { GrClose } from "@react-icons/all-files/gr/GrClose";

const Model = () => {

  return (
    <>
      <div className="fixed inset-0  bg-white bg-opacity-75 px-3 md:px-0 hidden items-center justify-center">
        <div className="flex flex-col bg-white shadow-2xl border-2 p-6 border-gray-400">
          <div className="flex flex-row-reverse	 mb-4">
            <button>
              <GrClose />
            </button>
          </div>
          <div className="pb-2">
            <p className="text-lg">You are on my site since 2min so i think..</p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="w-full flex items-center"
              src={Keanu}
              alt="Keanu-meme"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
