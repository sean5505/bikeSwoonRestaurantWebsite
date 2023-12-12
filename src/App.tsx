import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Reservations from "./pages/Reservations/Reservations";
import BookingConfirmation from "./pages/BookingConfirmed/BookingConfirmation";
import Menu from "./pages/Menu";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { ReservationContext } from "./context/AppContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Profile from "./pages/Profile/Profile";
import { useAppSelector } from "./app/hooks";

<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
></link>;

export default function App() {
  const { resData } = useContext(ReservationContext);
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("isAuthenticated", "true");
      } else {
        localStorage.setItem("isAuthenticated", "false");
      }
    });
    return () => {
      listen();
    };
  }, []);

  const RequireAuthentication = ({ children }: any) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated"); //firebase features inbuilt state persistance but that was persistently annoying
    return isAuthenticated === "true" ? children : <Navigate to="/login" />;
  };
  const RequireLogin = ({ children }: any) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated"); //firebase features inbuilt state persistance but that was persistently annoying
    return isAuthenticated === "true" ? <Navigate to="/"/> : children ;
  };
  const RequireData = ({ children }: any) => {
    return resData ? children : <Navigate to="/reservations" />;
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route
            path="/bookingConfirmed"
            element={
              <RequireData>
                <BookingConfirmation />
              </RequireData>
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/login"
            element={
              <RequireLogin>
                <Login />
              </RequireLogin>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={
              <RequireAuthentication>
                <Profile />
              </RequireAuthentication>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
