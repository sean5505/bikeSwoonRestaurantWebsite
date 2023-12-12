import { Star } from "@mui/icons-material";
import Layout from "../../components/Layout";
import style from "./Login.module.css";
import { useContext} from "react";
import { ThemeContext } from "../../context/AppContext";
import SignIn from "../../components/Forms/SignIn/SignInForm";

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
          <div className={style.details}>
          <Star
            className={style.logo}
            style={{ color: theme.secondaryColor, fontSize: "3rem" }}
          />
          <h2>BikeSwoon</h2>
          <p>Sign in to access your personalized account </p>
          </div>
          <SignIn />
        </section>
      </Layout>
    </>
  );
}
