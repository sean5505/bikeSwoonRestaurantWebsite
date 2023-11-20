import React, {
  useState,
  createContext,
  SetStateAction,
  ReactNode,
} from "react";

type ReservationContextType = {
  //replace "any"
  resData: any;
  setResData: React.Dispatch<SetStateAction<any>>;
};

const ReservationContext = createContext<ReservationContextType>({
  resData: false,
  setResData: () => {},
});

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
  },
  setTheme: () => {},
});

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


export {
  ReservationContext,
  ReservationContextProvider,
  ThemeContext,
  ThemeContextProvider,
};
