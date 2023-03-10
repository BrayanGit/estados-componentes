import { useState } from 'react';
import Alert from './components/Alert';
import Login from './components/Login';
import './App.css';

function App() {
  const [alert, setAlert] = useState({
    mensaje: "",
    color: ""
  });

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="card p-4 cubo">
        <Login setAlert={setAlert}/>

        <Alert color={alert.color}>{alert.mensaje}</Alert>
      </div>
    </div>
  );
}

export default App;

