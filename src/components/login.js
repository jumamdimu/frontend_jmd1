import React, { useState, useEffect, Component } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {

    const [formValue, setformValue] = React.useState({
        email: '',
        password: ''
    });  

  const { register, handleSubmit, formState: { errors } } = useForm();

  //const url = "https://testapi.teleskop.app/v2.0/users/login";

  const onSubmit = data => {
      //console.log(data);
    // store the states in the form data
    var bodyFormData = new FormData();
    bodyFormData.append('email', formValue.email);
    bodyFormData.append('password', formValue.password);

    console.log("sdfsdfsff");
    
    try {
        // make axios post request
        const response = axios({
        method: "post",
        url: "https://testapi.teleskop.app/v2.0/users/login",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
        });
        } catch(error) {
            console.log(error)
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
                <input name="email" type="email" 
                className="w-full p-2 border border-gray-300 rounded mt-1" 
                {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <p>This field is required</p>}
                <label className="text-sm font-bold text-gray-600 block">Password</label>
                {/* include validation with required or other standard HTML validation rules */}
                <input name="password" type="password" 
                className="w-full p-2 border border-gray-300 rounded mt-1" 
                {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.password && <p>This field is required</p>}
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

export default Login;