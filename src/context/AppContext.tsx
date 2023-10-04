import React, { useState, createContext, SetStateAction, ReactNode, Dispatch } from "react";


type ReservationContextType = { //replace "any"
  resData: any; 
  setResData: React.Dispatch<SetStateAction<any>>; 
};

const ReservationContext = createContext<ReservationContextType>({
  resData: false,
  setResData: () => {}
}
);

function ReservationContextProvider({ children }: { children: ReactNode }) {
  const value = () => {
    const data = localStorage.getItem("reservation");
    return data ? JSON.parse(data) : false;
  };

  const [resData, setResData] = useState<ReservationContextType>(value); //resData represents the reservation data from the user

  return (
    <ReservationContext.Provider value={{ resData, setResData }}>
      {children}
    </ReservationContext.Provider>
  );
}
type Theme = {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: {
    primaryColor: "#070c26",
    secondaryColor: "#be29ec",
    tertiaryColor: "teal",
  } ,
  setTheme: () => {}
}
);

function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>({
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

type UserAuthProps = {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
};
const UserAuth = createContext<UserAuthProps>({
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => {}
});

function UserAuthProvider({ children }: { children: ReactNode }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  return (
    <UserAuth.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </UserAuth.Provider>
  );
}

type ModalContext = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContext>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  closeModal : () => {},
  openModal: () => {},
});

function ModalContextProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, setIsModalOpen, openModal, closeModal }}
    >
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
