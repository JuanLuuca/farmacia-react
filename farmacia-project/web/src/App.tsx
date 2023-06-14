import { useEffect } from 'react';
import './App.css'
import { RotasPrivadas } from './routes/rotasPrivadas';
import { RotasPublicas } from "./routes/rotasPublicas";
import { useNavigate } from 'react-router-dom';

const App = () => {
  const getToken = localStorage.getItem('token');

  const navigate = useNavigate();

  useEffect(() => {
    if(getToken) {
      navigate('/home');
    }
  }, [])

  return (
    <>
    <div>
      {getToken ? <RotasPublicas /> : <RotasPrivadas />}
    </div>
    </>
  );
};

export default App;