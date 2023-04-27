import React, { useContext, useState } from 'react'
import style from  './loginForm.module.css'
import {useFormik} from 'formik'
import {Link} from 'react-router-dom'
import { Visibility, VisibilityOff, Star, Lock } from '@mui/icons-material'
import { ThemeContext } from '../../ThemeContext'
import { Avatar } from '@mui/material'


const initialValues = {
    username: '',
    password: '',
 }

 const onSubmit = values =>{
    console.log('Form data', values)
}

const validate =  values => {
    let errors = {}
    if(!values.username){
        errors.username = "Required"
    }
    if(!values.password){
        errors.password = "Input your password goofy"
    }
    return errors
}


export default function LoginForm() {
    const {theme} = useContext(ThemeContext);
    const [showPassword, setShowPassword] = useState(false)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })

   // console.log('Form values are: ' , formik.values)

  return (
    <section className={style.loginFormContainer} style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}>
  <Star className={style.logo} style={{color: theme.secondaryColor , fontSize: '50px'}}/>
  <header className={style.formHeader}>
    <h1>Sign in</h1>
  </header>
  <form className={style.loginForm} onSubmit={formik.handleSubmit} >
    <label htmlFor='username'>Username</label>
    <input type="text"
      id='username'
      name='username'
      onBlur={formik.handleBlur}
      value={formik.values.username}
      onChange={formik.handleChange}
    />
    {formik.touched.username && formik.errors.username ? <div className={style.error}> {formik.errors.username}</div> : null}
    <label htmlFor='password'>Password </label>
    <div className={style.passwordInput}>
      <input type={showPassword ? "text" : "password"}
        id='password'
        name='password' 
        onBlur={formik.handleBlur}
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <span className={style.togglePassword} onClick={handleTogglePassword}>
        {showPassword ? <VisibilityOff/> : <Visibility/>}
      </span>
    </div>
    {formik.touched.password && formik.errors.password ? <div className={style.error}> {formik.errors.password}</div> : null}
    <button type='button' className={style.forgotButton}>Forgot Password?</button>
    <Link to='/'>
      <button type='submit' disabled={!formik.values.password || !formik.values.username} className={style.forgotButton}>Login</button>
    </Link>
  </form>
</section>
  )
}

