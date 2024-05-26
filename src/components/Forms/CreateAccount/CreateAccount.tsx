import { useState} from "react";
import style from "./CreateAccount.module.css";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { CreateAccountData } from "../../../types/types";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, fireStoreDB } from "../../../firebase";
import { useNavigate } from "react-router-dom";

// https://firebase.google.com/docs/auth/web/manage-users  --> could be interesting for an admin
export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: {
      Name: "",
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

  const onSubmit = async (data: CreateAccountData, e: any) => {
    e.preventDefault();
    if (data.Password === data.ConfirmPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.Email,
          data.Password
        );
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: data.Name,
          photoURL: "https://static.thenounproject.com/png/574704-200.png",
        });
        await addDoc(collection(fireStoreDB, "allUsers"),{
          ...data,
          CreationDate: serverTimestamp(),
          userID: userCredential.user.uid,
        })

        await setDoc(doc(fireStoreDB, "users", userCredential.user.uid), {
          ...data,
          img: user.photoURL,
          CreationDate: serverTimestamp(),
          userID: userCredential.user.uid,
        });
        navigate('/')
        toast.success("Account Successfully Created");
      } catch (error) {
        console.log(error);
        toast.error((error as Error).message);
      }
    }
  };

  return (
    <>
      <form className={style.createAccount} onSubmit={handleSubmit(onSubmit)}>
        <>
          <label htmlFor="Name">Name</label>
          <input
            {...register("Name", {
              required: { value: true, message: "Required" },
              minLength: {
                value: 6,
                message: "Must be at least 6 characters",
              },
            })}
            type="text"
            id="Name"
            className={errors.Name ? style.inputFieldError : " "}
          />
          {errors.Name ? (
            <span data-testid={'name-error'} className={style.error}>{errors.Name?.message}</span>
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
            <span data-testid={'email-error'} className={style.error}>{errors.Email?.message}</span>
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
            <span data-testid={'password-error'} className={style.error}>{errors.Password?.message}</span>
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
            <span data-testid={'confirmPassword-error'} className={style.error}>
              {errors.ConfirmPassword?.message}
            </span>
          ) : null}
        </>
        <button
          type="submit"
          disabled={
            isSubmitting ||
            !!(errors.Email || errors.Password || errors.ConfirmPassword)
          }
          style={{ marginTop: "2rem" }}
        >
          Create Account
        </button>
      </form>
    </>
  );
}
