import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reservations from "./pages/Reservations";
import BookingConfirmation from "./pages/BookingConfirmation";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Order from "./pages/Cart";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import MyContext from "./components/context/MyContext";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
></link>;

function App() {
  const [resData, setResData] = useState(false); //resData represents the reservation data from the user

  return (
    <>
      <MyContext.Provider value={{ resData, setResData }}>
        <ThemeContextProvider>
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
                element={<BookingConfirmation />}
              />
              <Route path="/menu" element={<Menu />} />
              <Route path="/login" element={<Login />} />
              <Route path="order" element={<Order />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </ThemeContextProvider>
      </MyContext.Provider>
    </>
  );
}

export default App;
