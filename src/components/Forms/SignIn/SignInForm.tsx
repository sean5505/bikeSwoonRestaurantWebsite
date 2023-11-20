import {  useState } from "react";
import style from "./SignInForm.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import GoogleSignIn from "../../Buttons/GoogleSignIn";
import CreateNewAccount from "../../Buttons/CreateNewAccount"
import { SignInData } from "../../../types/types";
import { auth } from "../../../firebase";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false)
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();


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

  const onSubmit = async (data: SignInData) => {
    signInWithEmailAndPassword(auth, data.Email, data.Password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setShowError(true);
        toast.error(error.code);
        console.log(error);
      });
  };

  return (
    <>
      <div className={style.formContainer}>
      <form className={style.SignInForm} onSubmit={handleSubmit(onSubmit)}>
      <>
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
          placeholder="Email"
          className={errors.Email ? style.inputFieldError : " "}
          data-testid = "email-test"
        />
        <p className={style.error}>{errors.Email?.message}</p>
        </>
        <>
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
                setShowPasswordToggle(true)
              },
            })}
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            className={errors.Password ? style.inputFieldError : " "}
            data-testid = 'password-test'
          />
          <span className={style.togglePassword} onClick={handleTogglePassword}>
            {showPasswordToggle? (showPassword ? <VisibilityOff /> : <Visibility />): null }
          </span>
        </div>
        <p className={style.error}>{errors.Password?.message}</p>
        </>

        <>
       
            <button
              type="submit"
              disabled={isSubmitting || !!(errors.Email || errors.Password)}
            >
              Login
            </button>
            
          
        </>
        {showError ? (
          <p id="error-message" className={style.error}>Invalid Email Or Password</p>
        ) : null}
      </form>
      <div className={style.buttonContainer}>
      <GoogleSignIn />
     <CreateNewAccount />
     </div>
      </div>
    </>
  );
}
