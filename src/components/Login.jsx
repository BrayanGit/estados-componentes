import { useState } from 'react';

const Login = ({ setAlert }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarLogin = (e) => {
    e.preventDefault();

    if(email.trim() === "prueba@prueba.com" && password.trim() === "123456") {
      setAlert({
        // Alert que esta correcto
        mensaje: "Sesion iniciada",
        color: "success"
      });
      setEmail("");
      setPassword("");

      return;
    }
    // Alert email y contraseña incorrectos
    setAlert({
      mensaje: "Los datos son incorrectos",
      color: "danger"
    });
  };

  return (
    <form onSubmit={validarLogin}>
      <label htmlFor="email"><strong>Email</strong></label>
      <input 
      type="email"
      name="email"
      id="email"
      className="form-control mb-2"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      />
      <label htmlFor="password"><strong>Password</strong></label>
      <input 
      type="password"
      name="password"
      id="password"
      className="form-control mb-2"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />
      <button 
        type="submit"
        className="btn btn-dark"
        disabled={!email.trim() || !password.trim()}
      >
        Iniciar Sesion
      </button>
    </form>
  );

};

export default Login;
