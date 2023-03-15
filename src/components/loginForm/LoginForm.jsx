import React, { useContext, useState } from 'react'
import './loginForm.css'
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
    <div className="loginFormContainer" style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}>
        <Star id='logo' style={{color: theme.secondaryColor}}/>
            <div className="formHeader">
                <h1>Sign in</h1>
            </div>
  
         <form className='loginForm' onSubmit={formik.handleSubmit} >
            <label htmlFor='username'>Username</label>
            <input type="text"
                id='username'
                name='username'
                onBlur={formik.handleBlur}
                value={formik.values.username}
                onChange = {formik.handleChange} />
          
        {formik.touched.username && formik.errors.username ? <div className='error'> {formik.errors.username}</div> : null}
      
            <label htmlFor='password'>Password </label>
            <div className="passwordInput">
                <input type= {showPassword ? "text" : "password"}
                        id='password'
                        name='password' 
                        onBlur={formik.handleBlur}
                        value = {formik.values.password}
                        onChange = {formik.handleChange}/>
              
                <span className='togglePassword' onClick={handleTogglePassword}>
                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                 </span>
              
         </div>
       
        {formik.touched.password && formik.errors.password ? <div className='error'> {formik.errors.password}</div> : null}
      
      <button type='button' className='forgotButton'>Forgot Password?</button>
      <Link to = '/'>
      <button type='submit' disabled ={!formik.values.password || !formik.values.username} className='forgotButton'>Login</button>
      </Link>
    </form>
    </div>
  )
}

