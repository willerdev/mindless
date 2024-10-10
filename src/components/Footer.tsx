import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MessageCircle, User, Settings, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex justify-around">
          <Link to="/" className="text-gray-600 hover:text-primary">
            <Home size={24} />
          </Link>
          <Link to="/chat" className="text-gray-600 hover:text-primary">
            <MessageCircle size={24} />
          </Link>
          <Link to="/friends" className="text-gray-600 hover:text-primary">
            <Users size={24} />
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-primary">
            <User size={24} />
          </Link>
          <Link to="/settings" className="text-gray-600 hover:text-primary">
            <Settings size={24} />
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;