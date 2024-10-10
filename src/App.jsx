import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SplashScreen from './Pages/SplashScreen';
import StartedScreen from './Pages/StartedScreen';
import Login from './Pages/Login';
import Home from './Pages/Home';
import SelectUser from './Pages/SelectUser';
import ProtectorRegister from './Pages/ProtectorRegister';
import PetterRegister from './Pages/PetterRegister';
import RegisterSuccess from './Pages/RegisterSuccess';
import AccountValidation from './Pages/AccountValidation';
import RegisterRefused from './Pages/RegisterRefused';

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
      <Route path="/register/account-validation" element={<AccountValidation />} />
      <Route path="/register/refused" element={<RegisterRefused />} />
      <Route path="/register/success" element={<RegisterSuccess/>} />
    </Routes>
  );
}

export default App;
