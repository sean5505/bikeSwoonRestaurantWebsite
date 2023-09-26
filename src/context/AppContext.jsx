import React, { useState, createContext } from "react";

const ReservationContext = createContext();

function ReservationContextProvider({ children }) {
  const value = () => {
    const data = localStorage.getItem("reservation");
    return data ? JSON.parse(data) : false;
  };

  const [resData, setResData] = useState(value); //resData represents the reservation data from the user

  return (
    <ReservationContext.Provider value={{ resData, setResData }}>
      {children}
    </ReservationContext.Provider>
  );
}

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState({
    primaryColor: "#070c26",
    secondaryColor: "#be29ec",
    tertiaryColor: "teal",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const UserAuth = createContext(); // have to hook this up with useLocalStorage to store state across application reloads since firebasew does it under the hood

function UserAuthProvider({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <UserAuth.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </UserAuth.Provider>
  );
}

const ModalContext = createContext();

function ModalContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export {
  ReservationContext,
  ReservationContextProvider,
  ThemeContext,
  ThemeContextProvider,
  UserAuth,
  UserAuthProvider,
  ModalContext,
  ModalContextProvider,
};
