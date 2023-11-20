import React from "react";
import {
  ReservationContextProvider,
  ThemeContextProvider,
} from "./AppContext";

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReservationContextProvider>
      <ThemeContextProvider>
        {children}
      </ThemeContextProvider>
    </ReservationContextProvider>
  );
}

export default AppProviders;
