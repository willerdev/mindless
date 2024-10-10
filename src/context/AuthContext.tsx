import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  city: string;
  country: string;
  profilePicture: string;
}

export interface Post {
  id: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  author: string;
  createdAt: Date;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string, city: string, country: string) => Promise<void>;
  updateProfilePicture: (url: string) => void;
  posts: Post[];
  addPost: (content: string, image: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedPosts = localStorage.getItem('posts');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name: 'Anonymous', // In a real app, this would come from the backend
      city: 'Kigali',
      country: 'Rwanda',
      profilePicture: 'https://via.placeholder.com/150',
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (email: string, password: string, name: string, city: string, country: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      city,
      country,
      profilePicture: 'https://via.placeholder.com/150',
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const updateProfilePicture = (url: string) => {
    if (user) {
      const updatedUser = { ...user, profilePicture: url };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const addPost = (content: string, image: string) => {
    if (user) {
      const newPost: Post = {
        id: Date.now().toString(),
        content,
        image,
        likes: 0,
        comments: 0,
        author: user.name,
        createdAt: new Date(),
      };
      const updatedPosts = [newPost, ...posts];
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, register, updateProfilePicture, posts, addPost }}>
      {children}
    </AuthContext.Provider>
  );
};