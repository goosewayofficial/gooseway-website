"use client";
// src/context/ModalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  isComingSoonOpen: boolean;
  openComingSoon: () => void;
  closeComingSoon: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const openComingSoon = () => setIsComingSoonOpen(true);
  const closeComingSoon = () => setIsComingSoonOpen(false);

  return (
    <ModalContext.Provider value={{ isComingSoonOpen, openComingSoon, closeComingSoon }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
