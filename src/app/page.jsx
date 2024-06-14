import Image from "next/image";
import image1 from '../../public/1324356.jpg';
import image2 from '../../public/7317079.jpg';
import image3 from '../../public/3764085.jpg';
import image4 from '../../public/6409847.jpg';
import image5 from '../../public/4307457.jpg';

import Link from 'next/link';
import React from "react";

export default function Home() {
  const therapies = [
    {
      src: image3,
      alt: 'Occupational Therapy',
      title: 'Occupational Therapy'
    },
    {
      src: image4,
      alt: 'Speech Therapy',
      title: 'Speech Therapy'
    },
    {
      src: image5,
      alt: 'Psychological Therapy',
      title: 'Psychological Therapy'
    }
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-blue-50 md:flex-row md:p-20 sm:pt-10">
        <div className="mb-6 text-center md:mb-0 md:mr-10 md:text-left">
          <h1 className="text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl">Welcome to</h1>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl md:text-6xl">Dextra Rehab</h2>
          <p className="mt-2 text-xl text-gray-600 sm:text-2xl md:text-4xl">Your Health, Our Priority</p>
          <Link href="/ContactUs" >
            <button className="px-4 py-2 mt-4 text-white bg-blue-700 rounded hover:bg-blue-800">
            Get Started
          </button>
          </Link>
        </div>
        <div className="flex-shrink-0 p-4 md:p-0">
          <Image
            src={image1}
            alt="Doctor with patient"
            width={380}
            height={300}
            className="rounded w-full h-auto object-cover"
          />
        </div>
      </div>



      <div className="flex flex-col items-center justify-center bg-white md:flex-row">
        <div className="ml-0 mt-6 text-center md:ml-10 md:mt-0 md:text-left md:order-2">
          <h2 className="text-4xl font-semibold text-gray-800">
            Your Trusted Health Partner
          </h2>
        </div>
        <div className="flex-shrink-0 p-4 md:p-0 md:order-1">
          <Image
            src={image2}
            alt="Healthcare illustration"
            width={600}
            height={400}
            className="rounded w-full h-auto"
          />
        </div>
      </div>




      <div className="flex flex-col pb-20 md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="text-center">
          <div className="bg-blue-900 text-white w-24 h-24 md:w-32 md:h-32 rounded-full flex justify-center items-center text-2xl md:text-3xl mx-auto">
            +10
          </div>
          <div className="mt-2 text-lg">Years of Experience</div>
        </div>
        <div className="text-center">
          <div className="bg-blue-900 text-white w-24 h-24 md:w-32 md:h-32 rounded-full flex justify-center items-center text-2xl md:text-3xl mx-auto">
            12
          </div>
          <div className="mt-2 text-lg">Schools in collaboration</div>
        </div>
        <div className="text-center">
          <div className="bg-blue-900 text-white w-24 h-24 md:w-32 md:h-32 rounded-full flex justify-center items-center text-2xl md:text-3xl mx-auto">
            3K+
          </div>
          <div className="mt-2 text-lg">Patients treated</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-6 bg-blue-50 md:flex-row md:space-x-8">
        {therapies.map((therapy, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg sm:scroll-auto ">
            <div className="flex-shrink-0">
              <Image
                src={therapy.src}
                alt={therapy.alt}
                width={300}
                height={300}
                className="rounded w-full h-auto"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{therapy.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-100 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Committed to delivering superior healthcare services with a focus on quality, safety, and patient satisfaction.
          <br />
          Our mission is to create a healing environment where advanced medical practices meet personalized care, ensuring the best outcomes for our patients.
        </p>
      </div>
    </>
  );
}
