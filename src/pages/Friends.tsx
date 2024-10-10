import React from 'react';
import { UserPlus } from 'lucide-react';

interface Friend {
  id: number;
  name: string;
  mutualFriends: number;
}

interface SuggestedUser {
  id: number;
  name: string;
  mutualFriends: number;
}

const Friends: React.FC = () => {
  const friends: Friend[] = [
    { id: 1, name: 'Ethan Walker', mutualFriends: 15 },
    { id: 2, name: 'Amanda Lissa', mutualFriends: 8 },
    { id: 3, name: 'Brandon Smith', mutualFriends: 12 },
  ];

  const suggestedUsers: SuggestedUser[] = [
    { id: 4, name: 'Gary Chen', mutualFriends: 5 },
    { id: 5, name: 'Dori Mason', mutualFriends: 3 },
  ];

  return (
    <div className="pb-16">
      <h2 className="text-2xl font-bold mb-4">Friends</h2>
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4">Your Friends</h3>
        <ul className="space-y-4">
          {friends.map((friend) => (
            <li key={friend.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={`https://i.pravatar.cc/40?u=${friend.id}`} alt={friend.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">{friend.name}</p>
                  <p className="text-sm text-gray-500">{friend.mutualFriends} mutual friends</p>
                </div>
              </div>
              <button className="btn-secondary">Message</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-xl font-semibold mb-4">Suggested Friends</h3>
        <ul className="space-y-4">
          {suggestedUsers.map((user) => (
            <li key={user.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={`https://i.pravatar.cc/40?u=${user.id}`} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.mutualFriends} mutual friends</p>
                </div>
              </div>
              <button className="btn-primary flex items-center">
                <UserPlus size={18} className="mr-1" />
                Add Friend
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Friends;