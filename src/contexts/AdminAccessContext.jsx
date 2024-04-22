import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const AdminAccessContext = ({ children }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default AdminAccessContext;
