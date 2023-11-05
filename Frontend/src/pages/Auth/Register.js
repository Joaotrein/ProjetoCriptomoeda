import {} from "./Style";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/register", {
                email,
                password,
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <h1>Cadastrar</h1>
            <form action="POST">
                <label>
                    <input
                        type="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        placeholder="Email"
                    ></input>
                </label>
                <label>
                    <input
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        placeholder="Password"
                    ></input>
                </label>
               
               
                    <input type="submit" onClick={submit}/>
               
               
            </form>
        </div>
    );
};

export default Login;
