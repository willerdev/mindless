import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import Notifications from './pages/Notifications';
import Friends from './pages/Friends';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Friend Request', description: 'John Doe sent you a friend request' },
    { id: 2, title: 'Post Liked', description: 'Your recent post received 10 likes' },
    { id: 3, title: 'New Comment', description: 'Sarah commented on your photo' },
  ]);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Header notifications={notifications} />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/chat" element={<ProtectedRoute element={<Chat />} />} />
              <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
              <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
              <Route path="/friends" element={<ProtectedRoute element={<Friends />} />} />
              <Route
                path="/notifications"
                element={
                  <ProtectedRoute
                    element={<Notifications notifications={notifications} setNotifications={setNotifications} />}
                  />
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;