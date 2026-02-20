import Home from './pages/Home.jsx';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
return (
  <div className="min-h-screen bg-gray-50 pt-14">
    <Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
    
    </div>
  );
}

export default App
