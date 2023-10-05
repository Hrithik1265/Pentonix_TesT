import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Table = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://afc7a104784594208b12c3474fa3c924-1060237241.us-east-2.elb.amazonaws.com:9002/login')
        .then(res => console.log(res.data))
        .catch(err =>console.log(err));
    }, [])
    return (
        <div className="table-responsive">
             <table>
                <thead>
                    <tr>
                    <th>Email</th>
                    <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
        </div>
    );
}