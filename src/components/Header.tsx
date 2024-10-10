import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell, LogOut, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  notifications: { title: string; description: string }[];
}

const Header: React.FC<HeaderProps> = ({ notifications }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Mindless
        </Link>
        {user ? (
          <div className="flex items-center space-x-4">
            <Link to="/notifications" className="text-gray-600 hover:text-gray-800 relative">
              <Bell size={24} />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {notifications.length}
                </span>
              )}
            </Link>
            <button onClick={handleLogout} className="text-gray-600 hover:text-gray-800">
              <LogOut size={24} />
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/login" className="btn-secondary">
              Login
            </Link>
            <Link to="/register" className="btn-primary">
              Register
            </Link>
          </div>
        )}
      </div>
      {location.pathname === '/' && user && (
        <div className="container mx-auto px-4 py-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;