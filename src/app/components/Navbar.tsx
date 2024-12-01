import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-3 sm:px-6 py-1">
      <div className="flex items-center gap-1">
        <Image
          src="/Rectangle 208.png"
          alt=""
          width={0}
          height={0}
          className="w-[55px] h-[50px]"
          unoptimized
        />
        <Image
          src="/Rectangle 209.png"
          alt=""
          width={0}
          height={0}
          className="w-[290px] h-[50px] hidden sm:block"
          unoptimized
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-[#FD0000] rounded-[42px] px-4 py-1 text-white text-xl font-sans font-extrabold leading-7">
          Login
        </button>
        <button className="bg-[#000000] rounded-[42px] px-4 py-1 text-white text-xl font-sans font-extrabold leading-7">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;
