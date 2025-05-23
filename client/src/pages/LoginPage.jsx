import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const{setUser}=useContext(UserContext);

    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            // Send login data to the server
            const {data}=await axios.post('/login', { email, password });
            setUser(data);
            alert('Signin Successful');
            setRedirect(true);
        } catch (e) {
            alert("SignIn Failed");
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
      }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className='text-5xl text-center mb-5 font-bold'>Sign In</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        placeholder="xyz@vitstudent.ac.in"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}></input>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}></input>
                    <button className="primary" type="submit">Sign In</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account? <Link className="text-black underline" to={'/register'}>Register Now</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
