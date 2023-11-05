import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/", {
        email,
        password,
      });

      if (response.data.token) {
        // Token gerado com sucesso, redirecione o usuário
        localStorage.setItem("token", response.data.token);
        navigate("/oquesao", { state: { id: email } });
      } else if (response.data === "notexist") {
        setError("Usuário não cadastrado.");
      } else {
        setError("Credenciais incorretas.");
      }
    } catch (e) {
      setError("Ocorreu um erro ao processar a solicitação.");
      console.error(e);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
