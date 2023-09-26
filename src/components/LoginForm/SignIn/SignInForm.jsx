import { useContext, useState } from "react";
import style from "./SignInForm.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {  Visibility, VisibilityOff } from "@mui/icons-material";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { ModalContext, UserAuth } from "../../../context/AppContext";
import GoogleSignIn from "./GoogleSignIn";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const { openModal } = useContext(ModalContext);
  const userContext = useContext(UserAuth);
  const { setIsUserLoggedIn } = userContext || {};
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      Email: "",
      Password: "",
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.Email, data.Password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsUserLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        setShowError(true);
        toast(error.code);
        console.log(error);
      });
  };

  return (
    <>
      <h2>Sign In</h2>
      <form className={style.SignInForm} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          {...register("Email", {
            required: { value: true, message: "Required" },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid Email Format",
            },
            onChange: () => {
              setShowError(false);
            },
          })}
          type="text"
          id="email"
          className={errors.Email ? style.inputFieldError : " "}
        />
        <p className={style.error}>{errors.Email?.message}</p>
        <label htmlFor="password">Password </label>
        <div className={style.passwordInput}>
          <input
            {...register("Password", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Min length is 8",
              },
              onChange: () => {
                setShowError(false);
              },
            })}
            type={showPassword ? "text" : "password"}
            id="password"
            className={errors.Password ? style.inputFieldError : " "}
          />
          <span className={style.togglePassword} onClick={handleTogglePassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </span>
        </div>
        <p className={style.error}>{errors.Password?.message}</p>

        <>
          <div className={style.buttonContainer}>
            <button
              type="submit"
              disabled={!isSubmitting && (errors.Email || errors.Password)}
            >
              Login
            </button>

            <GoogleSignIn/>

            <button onClick={openModal}>Create New Account</button>
          </div>
        </>
        {showError ? (
          <p className={style.error}>Invalid Email Or Password</p>
        ) : null}
      </form>
    </>
  );
}
