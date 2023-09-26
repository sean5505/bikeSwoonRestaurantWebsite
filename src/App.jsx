import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reservations from "./pages/Reservations/Reservations";
import BookingConfirmation from "./pages/BookingConfirmed/BookingConfirmation";
import Menu from "./pages/Menu";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import About from "./pages/About";
import Order from "./pages/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect} from "react";
import { UserAuth } from "./context/AppContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
></link>;

export default function App() {
  const { setIsUserLoggedIn } = useContext(UserAuth);
  
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
    return () => {
      listen();
    };
  }, []);

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
          <Route path="/bookingConfirmed" element={<BookingConfirmation />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="order" element={<Order />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
