import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Rol from './Pages/Rol/Rol';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/rol" element={<Rol />} />

    </Routes>
  );
}

export default App;
