import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6 border-t border-gray-800 px-4">
      <div className="container mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Box 1 - Contact */}
        <div className="border border-[#C5A059] rounded-md text-[#C5A059] p-4 ">
          <h3 className="text-lg font-semibold  mb-2">CONNECT WITH US</h3>
          <p className="mt-2 ">+91 1234567891</p>
          <p>info@deepnetsoft.com</p>
        </div>

        {/* Box 2 - Logo */}
        <div className="border border-[#C5A059] rounded-md p-4 flex flex-col items-center">
          <img src="/logo.png" alt="Deep Net Soft" className="w-16 mb-3" />
          <h3 className="text-[#C5A059] font-medium text-xl"><span className="text-[#C5A059]">DEEP </span>
            <span className="text-white">NET </span>
            <span className="text-[#857878]">SOFT</span></h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-[#C5A059] hover:text-[#C5A059] text-xl" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-[#C5A059] hover:text-[#C5A059] text-xl" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-[#C5A059] hover:text-[#C5A059] text-xl" />
            </a>
          </div>
        </div>

        {/* Box 3 - Address */}
        <div className="border border-[#C5A059] text-[#C5A059] rounded-md p-4">
          <h3 className="text-lg font-semibold  mb-2">FIND US</h3>
          <p className="mt-2">First Floor, Disa, Irinjalakuda</p>
          <p>Irinjalakuda (P.O), Kerala</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-sm text-[#C5A059] border-t border-gray-800 pt-4">
        <p>© {new Date().getFullYear()} Deepnetsoft Solutions. All rights reserved.</p>
        <div className="mt-2">
          <a href="/terms" className="mr-4 hover:text-[#C5A059]">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:text-[#C5A059]">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
