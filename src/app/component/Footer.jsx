import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="w-full max-w-[1620px] h-[320px] bg-[#163172] fixed bottom-0 left-1/2 transform -translate-x-1/2 text-white">
      <div className="h-[280px] flex justify-around items-center">
        <div className="flex-1 flex justify-around items-center space-x-28">
          <div className=" flex-1 flex justify-around items-center ">
            <span className="">TheraClinic</span>
          </div>
          <div className=" flex space-x-20 ">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href="#content" className="hover:underline">Contact</a>
          </div>
        </div>
        <div className="flex-1 flex justify-around items-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
      {/* Line */}
      <div className="w-full border-b border-white"></div>
      <div className="h-[40px] bg-[#163172] flex justify-between items-center px-20">
        <div className="text-center flex-1 px-4">
          <span>2024 TheraClinic.All rights are reserved</span>
        </div>
        <div className="text-center flex-1">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="text-center flex-1">
          <a href="#terms" className="hover:underline">Terms of Services</a>
        </div>
        <div className="text-center flex-1">
          <a href="#cookies" className="hover:underline">Cookie Settings</a>
        </div>
      </div>
    </div>
  );
}

