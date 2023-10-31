import React from "react";
import {
  ReservationContextProvider,
  ThemeContextProvider,
  UserAuthProvider,
} from "./AppContext";

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReservationContextProvider>
      <ThemeContextProvider>
        <UserAuthProvider>{children}</UserAuthProvider>
      </ThemeContextProvider>
    </ReservationContextProvider>
  );
}

export default AppProviders;
