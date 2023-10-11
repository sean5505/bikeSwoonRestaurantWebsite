import { Star } from "@mui/icons-material";
import Layout from "../../components/Layout";
import style from "./Login.module.css";
import { useContext, useEffect } from "react";
import { ThemeContext, UserAuth } from "../../context/AppContext";
import SignIn from "../../components/LoginForm/SignIn/SignInForm";
import CreateAccount from "../../components/LoginForm/CreateAccount/CreateAccount";
import Modal from "../../components/utils/Modal/Modal";
import AuthDetails from "../../components/AuthDetails";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const { isUserLoggedIn } = useContext(UserAuth);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => { //if the user tries to go to the login page while logged in, it will automatically navigate to the home page
    if (isUserLoggedIn) {
      navigate("/");
    }
  }, [auth.currentUser]);

  return (
    <>
      <Layout>
        <section
          className={style.loginFormContainer}
          style={{
            backgroundColor: theme.primaryColor,
            color: theme.secondaryColor,
          }}
        >
          <Star
            className={style.logo}
            style={{ color: theme.secondaryColor, fontSize: "3rem" }}
          />
          {!isUserLoggedIn && <SignIn />}
          <Modal>
            <CreateAccount />
          </Modal>
          <AuthDetails />
        </section>
      </Layout>
    </>
  );
}
