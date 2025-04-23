"use client";
import { Project } from "@/util/type";
import { createContext, useContext, useState } from "react";

interface AppContextProps {
  showMore: boolean;
  toggleShowMore: () => void;
  showModal: boolean;
  toggleShowModal: () => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleShowMore = () => setShowMore((prev) => !prev);
  const toggleShowModal = () => setShowModal(!showModal);

  return (
    <AppContext.Provider
      value={{
        showMore,
        toggleShowMore,
        showModal,
        toggleShowModal,
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe estar dentro de un AppProvider");
  }
  return context;
};