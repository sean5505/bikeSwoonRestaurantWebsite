import React from 'react';
import {  ReservationContextProvider, ThemeContextProvider, ModalContextProvider, UserAuthProvider } from './AppContext';


function AppProviders({ children }: {children: React.ReactNode}) {
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