"use client";
import React from "react";
import FooterBrand from "./subcomponents/FooterBrand";
import FooterNav from "./subcomponents/FooterNav";
import FooterTech from "./subcomponents/FooterTech";

const Footer: React.FC = () => {
  return (
    <div className="bg-coalBlue w-full z-[500] mt-10 py-6 rounded-t-3xl border-t-[1px] border-vibrantOrange/50">
      <footer className="relative max-w-6xl mx-auto text-white px-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <FooterBrand />
          <div className="sm:w-full md:w-1/2 lg:w-[40%] flex flex-col smx:flex-row items-center smx:items-start justify-center md:justify-between gap-5 smx:gap-16">
            <FooterNav />
            <FooterTech />
          </div>
        </div>
        <div className="mt-6 border-t border-vibrantOrange/50 pt-4 text-center text-sm text-lightSeaGreen">
          © {new Date().getFullYear()} Emilio Pereira.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
