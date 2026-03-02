import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <h1 className="text-xl font-bold">Smart Travel</h1>

      <div className="space-x-4 flex items-center">
        {user ? (
          <>
            <span className="font-medium">{user.email}</span>

            <button
              onClick={logout}
              className="bg-white text-blue-600 px-4 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>

            <Link
              to="/register"
              className="bg-white text-blue-600 px-4 py-1 rounded"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;