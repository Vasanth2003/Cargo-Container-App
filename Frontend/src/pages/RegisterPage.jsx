import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const  RegisterPage= () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

   const registerUser = async(ev) => {
    ev.preventDefault();
    try{
        await axios.post('/exporter/signup',{
            name,
            email,
            password,
        });
        alert("Registration SUccessful")

    }catch(e){
        console.log(e)
    }
    
   }

  return (
    <div className='mt-4 grow items-center justify-around'>
    <h1 className='text-4xl text-center mb-4'>Register Now!!</h1>
        <form className='max-w-2xl mx-auto border' onSubmit={registerUser}>
            <input type='text' 
            value={name}
            placeholder='Name'
            onChange={ev=> setName(ev.target.value)}    
            />
            <input type='email' 
            value={email} 
            placeholder='johndoe@gmail.com'
            onChange={ev=> setEmail(ev.target.value)}
            />
            <input type='password' 
            value={password} 
            placeholder='Minimum 6 letters'
            onChange={ev=> setPassword(ev.target.value)}    
            />
            
            <button className='primary'>Register</button>
        </form>
        <div className='text-center py-2'>
            Already a Member? <Link to={'/login'} className='underline text-black'>Login Now</Link>
        </div>
    </div>
)}

export default RegisterPage