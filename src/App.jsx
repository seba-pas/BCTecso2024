import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';

import SelectUser from './Pages/SelectUser/SelectUser';
// import ProtectorRegister from './Pages/ProtectorRegister';
// import PetterRegister from './Pages/PetterRegister';
// import RegisterRefused from './Pages/RegisterRefused';
// import RegisterSuccess from './Pages/RegisterSuccess';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />

      <Route path="/select-user" element={<SelectUser />} />
      {/* <Route path="/register/protector" element={<ProtectorRegister />} /> */}
      {/* <Route path="/register/petter" element={<PetterRegister />} />
      <Route path="/register/refused" element={<RegisterRefused />} />
      <Route path="/register/success" element={<RegisterSuccess />} /> */}


    </Routes>
  );
}

export default App;
