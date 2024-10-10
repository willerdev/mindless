import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Send } from 'lucide-react';
import { Post as PostType } from '../context/AuthContext';

const Post: React.FC<PostType> = ({ id, content, image, likes: initialLikes, comments: initialComments, author, createdAt }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments(comments + 1);
      setNewComment('');
      // Here you would typically send the comment to a backend
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-2">
        <img src={`https://i.pravatar.cc/40?u=${author}`} alt={author} className="w-10 h-10 rounded-full mr-2" />
        <div>
          <span className="font-semibold">{author}</span>
          <p className="text-xs text-gray-500">{new Date(createdAt).toLocaleString()}</p>
        </div>
      </div>
      {image && <img src={image} alt="Post" className="w-full h-64 object-cover rounded-lg mb-4" />}
      <p className="text-gray-800 mb-4">{content}</p>
      <div className="flex justify-between items-center text-gray-600">
        <button className="flex items-center" onClick={handleLike}>
          <ThumbsUp className="mr-1" size={20} />
          {likes}
        </button>
        <button className="flex items-center" onClick={toggleComments}>
          <MessageSquare className="mr-1" size={20} />
          {comments}
        </button>
      </div>
      {showComments && (
        <form onSubmit={handleCommentSubmit} className="mt-4">
          <div className="flex">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-grow px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-r-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Post;