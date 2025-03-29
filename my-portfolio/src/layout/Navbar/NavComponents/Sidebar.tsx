"use client";
import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSidebarContext } from "@/context/SidebarContext";
import { CommonTexts } from "@/ui/CommonTexts";
import { SelectLanguageSideBar } from "./SelectLaguage";
import { SidebarItems } from "./NavItems";

const Sidebar = () => {
  const { isSideBarActive, toggleSidebar } = useSidebarContext();

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isSideBarActive ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 h-full w-full lg:hidden bg-coalBlue shadow-md z-[1010] p-7 space-y-7 smx:w-1/2 md:w-[40%]"
    >
      <div className="flex justify-between items-center">
        <div className="flex">
          <CommonTexts className="text-[18px] xs:text-xl sm:text-2xl "/>
        </div>
        <button
          className="p-2 rounded-full hover:bg-gray-700 hover:bg-opacity-20 transition-colors duration-150 cursor-pointer"
          onClick={toggleSidebar}
        >
          <XMarkIcon className="text-lightSeaGreen w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
      <SidebarItems />
      <div>
        <SelectLanguageSideBar />
      </div>
    </motion.div>
  );
};

export default Sidebar;