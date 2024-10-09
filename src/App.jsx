import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SplashScreen from './Pages/SplashScreen';
import StartedScreen from './Pages/StartedScreen';
import Login from './Pages/Login/Login';


import Home from './Pages/Home';

import ProtectorRegister from './Pages/ProtectorRegister';
import PetterRegister from './Pages/PetterRegister';
// import AccountValidation from './Pages/AccountValidation';
import RegisteredMail from './Pages/RegisteredMail/RegisteredMail';
// import RegisterRefused from './Pages/RegisterRefused';
// import RegisterSuccess from './Pages/RegisterSuccess';
import SelectUser from './Pages/SelectUser/SelectUser';
import SuccessScreen from './Pages/SuccessScreen/SuccessScreen';
import AccountValidation from './Pages/AccountValidation/AccountValidation';



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
      <Route path="/register/refused" element={<RegisteredMail />} />
      <Route path="/register/success" element={<SuccessScreen/>} />
      {/* <Route path="/success" element={<SuccessScreen />} /> */}
      {/* <Route path="/account-validation" element={<AccountValidation />} /> */}
      {/* <Route path="/registered-mail" element={<RegisteredMail />} /> */}



    </Routes>
  );
}

export default App;
