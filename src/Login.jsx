import React, { useState } from "react";
import axios from 'axios';
import { Table } from "./Table";


export const Login = () => {
    const[email, setEmail] = useState('');
    const [password ,setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(password);
        const response =  axios.post('http://afc7a104784594208b12c3474fa3c924-1060237241.us-east-2.elb.amazonaws.com:9002/login', {
        email: email,
        password: password,
      });
      
    }

    return(
        <div className="auth-form">
            <h1>Login form</h1>
            <form className="loginform" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} type ="email" placeholder="Enter your Email ID" id="email" name="email" onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input value={password} type ="password" placeholder="Enter your password" id="password" name="password" onChange={e => setPassword(e.target.value)}/>
                <button onClick={Table}>Login</button>
            </form>
        </div>
    )
}