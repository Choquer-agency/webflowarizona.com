"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface ContactFormContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactFormContext = createContext<ContactFormContextValue>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <ContactFormContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  return useContext(ContactFormContext);
}
