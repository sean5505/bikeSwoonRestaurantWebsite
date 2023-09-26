import React, { useState, useContext } from "react";
import style from "./CreateAccount.module.css";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { ModalContext, UserAuth } from "../../../context/AppContext";

// https://firebase.google.com/docs/auth/web/manage-users  --> could be interesting for an admin
export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { closeModal } = useContext(ModalContext);
  const { setIsUserLoggedIn } = useContext(UserAuth);
  const auth = getAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data) => {
    if (data.Password === data.ConfirmPassword) {
      createUserWithEmailAndPassword(auth, data.Email, data.Password)
        .then((userCredential) => {
          const user = userCredential.user;
          const displayName = `${data.FirstName} ${data.LastName}`;
          updateProfile(user, {
            displayName: displayName,
          });
          toast("Account Successfully Created");
          closeModal();
          setIsUserLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
          toast(error.message);
        });
    }
  };

  return (
    <>
      <h2>Create Your Account</h2>
      <form className={style.createAccount} onSubmit={handleSubmit(onSubmit)}>
        <>
          <label htmlFor="FirstName">First Name</label>
          <input
            {...register("FirstName", {
              required: { value: true, message: "Required" },
              minLength: {
                value: 3,
                message: "Must be at least 3 characters"
              }
            })}
            type="text"
            id="FirstName"
            className={errors.FirstName ? style.inputFieldError : " "}
          />
          {errors.FirstName ? (
            <span className={style.error}>{errors.FirstName?.message}</span>
          ) : null}
        </>

        <>
          <label htmlFor="LastName">Last Name</label>
          <input
            {...register("LastName", {
              required: { value: true, message: "Required" },
              minLength: {
                value: 3,
                message: "Must be at least 3 characters"
              }
            })}
            type="text"
            id="LastName"
            className={errors.LastName ? style.inputFieldError : " "}
          />
          {errors.LastName ? (
            <span className={style.error}>{errors.LastName?.message}</span>
          ) : null}
        </>

        <>
          <label htmlFor="email">Email</label>
          <input
            {...register("Email", {
              required: { value: true, message: "Required" },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid Email Format",
              },
            })}
            type="text"
            id="email"
            className={errors.Email ? style.inputFieldError : " "}
          />
          {errors.Email ? (
            <span className={style.error}>{errors.Email?.message}</span>
          ) : null}
        </>

        <>
          <label htmlFor="password">Password </label>
          <div className={style.passwordInput}>
            <input
              {...register("Password", {
                required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                onBlur: () => {
                  console.log("password touched");
                },
              })}
              type={showPassword ? "text" : "password"}
              id="password"
              className={errors.Password ? style.inputFieldError : " "}
            />
            <span
              className={style.togglePassword}
              onClick={handleTogglePassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
          {errors.Password ? (
            <span className={style.error}>{errors.Password?.message}</span>
          ) : null}
        </>
        <>
          <label htmlFor="ConfirmPassword">Confirm Password </label>
          <div className={style.passwordInput}>
            <input
              {...register("ConfirmPassword", {
                required: { value: true, message: "Required" },
                validate: (value) =>
                  value === watch("Password") || "Passwords do not match",
              })}
              type={showConfirmPassword ? "text" : "password"}
              id="ConfirmPassword"
              className={errors.Password ? style.inputFieldError : " "}
            />
            <span
              className={style.togglePassword}
              onClick={handleToggleConfirmPassword}
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
          {errors.ConfirmPassword ? (
            <span className={style.error}>{errors.ConfirmPassword?.message}</span>
          ) : null}
        </>
        <button
          type="submit"
          disabled={
            !isSubmitting &&
            (errors.Email || errors.Password || errors.ConfirmPassword)
          } // how can i make this more scalable
          style={{ marginTop: "2rem" }}
        >
          Create Account
        </button>
      </form>
    </>
  );
}
