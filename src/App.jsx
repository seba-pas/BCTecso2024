import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SplashScreen from './Pages/SplashScreen';
import StartedScreen from './Pages/StartedScreen';
import Login from './Pages/Login/Login';
import Home from './Pages/Home';
import SelectUser from './Pages/SelectUser';
import ProtectorRegister from './Pages/ProtectorRegister';
import PetterRegister from './Pages/PetterRegister';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }


  return (
    <Routes>
      <Route path="/" element={<StartedScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/select-user" element={<SelectUser />} />
      <Route path="/register/protector" element={<ProtectorRegister />} />
      <Route path="/register/petter" element={<PetterRegister />} />
    </Routes>
  );
}

export default App;
