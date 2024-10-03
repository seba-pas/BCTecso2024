import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginMuma from './Pages/LoginMuma';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginMuma />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
