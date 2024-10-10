import React from 'react';
import Post from '../components/Post';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

const Home: React.FC = () => {
  const { posts } = useAuth();

  return (
    <div className="pb-16">
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      {posts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">No posts yet</p>
          <Link to="/chat" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <PlusCircle className="mr-2" size={20} />
            Add Post
          </Link>
        </div>
      ) : (
        <div>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;