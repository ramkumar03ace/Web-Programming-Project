import { Link } from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function RegisterPage(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    async function registerUser(ev){
        ev.preventDefault();
        try{
            await axios.post('/register',{
                name,
                email,
                password,
            });
            alert("Registration successfull,Now you can Sign In!")
        } catch(e){
            alert('Registration Failed. Please try again later')
        }
          
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className='text-5xl text-center mb-5 font-bold'>Sign Up</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text" placeholder="Name" 
                    value={name} 
                    onChange={ev=>setName(ev.target.value)}></input>
                    <input type="email" placeholder="xyz@vitstudent.ac.in" 
                    value={email} 
                    onChange={ev=>setEmail(ev.target.value)}></input>
                    <input type="password" placeholder="Password" 
                    value={password} 
                    onChange={ev=>setPassword(ev.target.value)}></input>
                    <button className="primary">Sign Up</button>
                    <div className="text-center py-2 text-gray-500">
                        Already have an account? <Link className="text-black underline" to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}   