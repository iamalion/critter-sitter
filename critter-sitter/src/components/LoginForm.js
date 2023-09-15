import React from 'react';
import { useFormik } from 'formik';

function LoginForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
    })
    
    console.log('Form values', formik.values);

  return 
  (
    <div>
        <form>
            <label htmlFor='email'>Enter your email</label>
            <input 
                id='email' 
                name='email' 
                type='email'
                onChange={formik.handleChange} 
                value={formik.values.email} 
            />
            <label htmlFor='password'>Enter your password</label>
            <input 
                id='password' 
                name='password' 
                type='password' 
                onChange={formik.handleChange} 
                value={formik.values.password} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}


export default LoginForm