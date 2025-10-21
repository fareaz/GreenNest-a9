import React from "react";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { Link } from  'react-router';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8 ">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="flex flex-col md:flex-row gap-3 text-sm">
            <li>
              <Link
                
                className="hover:underline hover:text-green-200 transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                
                className="hover:underline hover:text-green-200 transition-all"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                
                className="hover:underline hover:text-green-200 transition-all"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        
        <div className="flex gap-5 text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-200 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-200 transition-transform transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-200 transition-transform transform hover:scale-110"
          >
            <FaPinterestP />
          </a>
        </div>
      </div>
      <div className="w-11/12 mx-auto border-t border-green-400 my-6"></div>
      <p className="text-center text-sm text-green-100">
        © 2025 <span className="font-semibold">GreenNest</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;