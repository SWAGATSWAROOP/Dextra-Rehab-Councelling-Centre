import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full max-w-[1620px] h-[73px] bg-[#163172] flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <Image src="/favicon.jpg" alt="Dextra Logo" width={48} height={48} />
        <h1 className="text-white ml-3">Dextra Rehab</h1>
      </div>
    </div>
  );
}
