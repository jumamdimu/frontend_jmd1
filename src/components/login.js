import React, { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Dashboard from './Dashboard/Dashboard';
import Preferences from './Preferences/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

const Login = ({ setToken }) => {
    const [email, setUserName] = useState();
    const [password, setPassword] = useState();

    const [formValue, setformValue] = React.useState({
        email: '',
        password: ''
    });  

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {  
        data.preventDefault();
        const token = loginUser({
        email,
        password
        });
                          
        try {
            // make axios post request
            const response = axios({ 
            method: "get",
            url: "https://testapi.teleskop.app/v2.0/users/me", //url endpoint to be requested 
            data: data, // login data
            headers: { "Content-Type": "multipart/form-data" },
            });
            const isLoggedIn = true;
            if (isLoggedIn) {
                //console.log(data.email);
                setToken(token);
            }
        } catch(error) {
                //console.log("error")
        }    
    }

    return (

        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">

            <div className="max-w-md w-full mx-auto">
                <div className="text-center font-medium text-xl">Login</div> 
                <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Enter User Name and Password</div>            
            </div>
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label className="text-sm font-bold text-gray-600 block">User Name</label>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input name="email" type="email" onChange={e => setUserName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mt-1" 
                    {...register("email", { required: true })} />
                    {/* errors will return when emal field validation fails  */}
                    {errors.email && <p>email field is required</p>}
                    <label className="text-sm font-bold text-gray-600 block">Password</label>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input name="password" type="password" onChange={e => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mt-1" 
                    {...register("password", { required: true })} />
                    {/* errors will return when password field validation fails  */}
                    {errors.password && <p>password field is required</p>}
                </div>
                <div>
                    <br />
                    <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Login</button>
                </div>
            </form>
            </div>            
        </div>
    );
}

//make a request from your login page
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;