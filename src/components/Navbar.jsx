import React from 'react';
import Link from 'next/link';

export default function Navbar(){
    return (
        <div className="w-full max-w-[1620px] h-[73px] bg-[#163172] flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
            {/* Logo */}
            <img src="Dextra-Rehab-Councelling-Centre\logo_img.png" alt="Dextra Logo" className="h-8 w-auto mr-2" />
            {/* Title */}
            <h1 className="text-white">Dextra Rehab</h1>
        </div>
    </div>
    )
}