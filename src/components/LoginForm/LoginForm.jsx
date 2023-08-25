import { useState } from "react";
import style from "./loginForm.module.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";



export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      Username: "",
      Password: "",
    },
   
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) =>{
    console.log(data.Username)
   
    navigate("/")
  }

  
  return (
    <>
      <form
        className={style.loginForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="username">Username</label>
        <input
          {...register("Username", {
            required: { value: true, message: "Required" },
          })}
          type="text"
          id="username"
        />
        <p className={style.error}>{errors.Username?.message}</p>
        <label htmlFor="password">Password </label>
        <div className={style.passwordInput}>
          <input
            {...register("Password", {
              required: "Password is Required",
              minLength: {
                value: 4,
                message: "Min length is 4",
              },
              onBlur: () => {
                console.log("password touched");
              },
            })}
            type={showPassword ? "text" : "password"}
            id="password"
          />
          <span className={style.togglePassword} onClick={handleTogglePassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </span>
          
        </div>
        <p className={style.error}>{ errors.Password?.message}</p>
        <button type="submit" disabled={!isSubmitting && (errors.Username || errors.Password)}>Login</button>
      </form>
    </>
  );
}
