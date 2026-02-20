
import { Link } from "react-router-dom";
function Navbar(){
    return(

      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <h1 className="text-xl font-bold">Smart Travel</h1>

      <div className="space-x-4">
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="bg-white text-blue-600 px-4 py-1 rounded">
          Sign Up
        </Link>
      </div>
    </nav>
    );  
}
export default Navbar;