import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SplashScreen from './Pages/SplashScreen';
import StartedScreen from './Pages/StartedScreen';
import Login from './auth/Login';
import Home from './Pages/Home';
import SelectUser from './Pages/SelectUser';
import ProtectorRegister from './Pages/ProtectorRegister';
import PetterRegister from './Pages/PetterRegister';
import RegisterSuccess from './Pages/RegisterSuccess';
import AccountValidation from './Pages/AccountValidation';
import RegisterRefused from './Pages/RegisterRefused';
import HomeLayout from './layouts/HomeLayout';
import UploadSuccessful from './Pages/UploadSuccessful';
import PettAdd from "./Pages/PettAdd"

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
      <Route path="/home" element={
        <HomeLayout><Home /></HomeLayout>}
      />
      <Route path="/select-user" element={<SelectUser />} />
      <Route path="/register/protector" element={<ProtectorRegister />} />
      <Route path="/register/petter" element={<PetterRegister />} />
      <Route path="/register/account" element={<AccountValidation />} />
      <Route path="/register/refused" element={<RegisterRefused />} />
      <Route path="/register/success" element={<RegisterSuccess/>} />
      <Route path="/register/pet/upload-successful" element={<UploadSuccessful/>} />
      <Route path="/register/pett-add" element={<PettAdd/>} />
    </Routes>
  );
}

export default App;
