import React, { useEffect } from "react";
import Header from "./header/Header/Header";

import InView from "./InView";
import Footer from "./Footer/Footer";
import { useAppSelector } from "../app/hooks";

export default function Layout({ children }: { children: React.ReactNode }) {
  const cart = useAppSelector((state) => state.cart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); //utilizing in layout so it doesnt matter where, as long as the user is on a page and there is a change in the cart
  }, [cart]);
  return (
    <>
      <Header />
      <InView>
        <main>{children}</main>
      </InView>
      <Footer />
    </>
  );
}
