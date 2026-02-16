import Home from './pages/Home.jsx';
import './App.css';
import Navbar from './components/Navbar.jsx';

function App() {
return (
  <div className="min-h-screen bg-gray-50 pt-14">
      <Navbar />
      <Home />
    </div>
  );
}

export default App
