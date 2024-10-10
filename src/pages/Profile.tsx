import React, { useState } from 'react';
import { User, Calendar, Mail, FileText, Heart, MessageSquare, Users, Camera } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user, updateProfilePicture } = useAuth();
  const [isEditingPicture, setIsEditingPicture] = useState(false);
  const [newPictureUrl, setNewPictureUrl] = useState('');

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  const handlePictureUpdate = () => {
    if (newPictureUrl) {
      updateProfilePicture(newPictureUrl);
      setIsEditingPicture(false);
      setNewPictureUrl('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Your Profile</h3>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="relative">
            <img src={user.profilePicture} alt="Profile" className="w-20 h-20 rounded-full mr-4" />
            <button
              onClick={() => setIsEditingPicture(!isEditingPicture)}
              className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1"
            >
              <Camera size={16} />
            </button>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.city}, {user.country}</p>
          </div>
        </div>
        {isEditingPicture && (
          <div className="mb-4">
            <input
              type="text"
              value={newPictureUrl}
              onChange={(e) => setNewPictureUrl(e.target.value)}
              placeholder="Enter new picture URL"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handlePictureUpdate}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Update Picture
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center">
            <Mail className="mr-2" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2" />
            <span>Joined: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Your Posts</h3>
        <p className="text-gray-600">You haven't made any posts yet.</p>
      </div>
    </div>
  );
};

export default Profile;