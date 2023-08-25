
import { Star } from "@mui/icons-material";
import Layout from "../components/Layout";
import style from "../components/LoginForm/LoginForm.module.css";
import { useContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {
  const { theme } = useContext(ThemeContext);
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
          <header className={style.formHeader}>
            <h1>Sign in</h1>
          </header>
          <LoginForm />
        </section>
      </Layout>
    </>
  );
}
