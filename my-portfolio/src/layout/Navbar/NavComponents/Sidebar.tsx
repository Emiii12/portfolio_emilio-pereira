"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSidebarContext } from "@/context/SidebarContext";
import { NamePage } from "@/ui/common/CommonTexts";
import { SelectLanguageSideBar } from "./SelectLaguage";
import { SidebarItems } from "./NavItems";
import ButtonX from "@/ui/button/ButtonX";

const Sidebar = () => {
  const { isSideBarActive, toggleSidebar } = useSidebarContext();

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isSideBarActive ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 h-full w-full lg:hidden bg-coalBlue shadow-md z-[600] flex flex-col smx:w-1/2 md:w-[40%]"
    >
      <div className="p-4 sm:p-7 flex justify-between items-center border-b border-charcoalBlue/30">
        <NamePage className="text-[18px] xs:text-xl sm:text-2xl" />
        <ButtonX onClick={toggleSidebar} />
      </div>
      
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-lightSeaGreen scrollbar-track-transparent">
        <div className="p-4 sm:p-7 space-y-4 sm:space-y-7">
          <SidebarItems />
        </div>
      </div>
      
      <div className="p-4 sm:p-7 border-t border-charcoalBlue/30">
        <SelectLanguageSideBar />
      </div>
    </motion.div>
  );
};

export default Sidebar;