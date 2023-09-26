import React from 'react';
import {  ReservationContextProvider, ThemeContextProvider, ModalContextProvider, UserAuthProvider } from './AppContext';


function AppProviders({ children }) {
  return (
    <ReservationContextProvider>
      <ThemeContextProvider>
        <ModalContextProvider>
          <UserAuthProvider>
            {children}
          </UserAuthProvider>
        </ModalContextProvider>
      </ThemeContextProvider>
    </ReservationContextProvider>
  );
}

export default AppProviders;