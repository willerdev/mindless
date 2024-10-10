import React, { useState } from 'react';
import { User, Lock, Bell, MessageCircle, Palette, Globe, HelpCircle, Info, LogOut } from 'lucide-react';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Here you would typically apply the dark mode to the entire app
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2 flex items-center"><User className="mr-2" /> Account Settings</h3>
          <p className="text-gray-600 dark:text-gray-400">Manage your account details and preferences.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2 flex items-center"><Lock className="mr-2" /> Privacy Settings</h3>
          <p className="text-gray-600 dark:text-gray-400">Control your privacy and security options.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2 flex items-center"><Bell className="mr-2" /> Notification Settings</h3>
          <p className="text-gray-600 dark:text-gray-400">Customize your notification preferences.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2 flex items-center"><MessageCircle className="mr-2" /> Chat Settings</h3>
          <p className="text-gray-600 dark:text-gray-400">Adjust your chat and messaging settings.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2 flex items-center"><Palette className="mr-2" /> Theme and Appearance</h3>
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex items-center h-6 rounded-full w-11 ${darkMode ? 'bg-blue-600' : 'bg-gray-200'}`}
            >
              <span className={`inline-block w-4 h-4 transform transition ${darkMode ? 'translate-x-6' : 'translate-x-1'} rounded-full bg-white shadow`} />
            </button>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2 flex items-center"><Globe className="mr-2" /> Language Preferences</h3>
          <p className="text-gray-600 dark:text-gray-400">Choose your preferred language.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2 flex items-center"><HelpCircle className="mr-2" /> Feedback and Support</h3>
          <p className="text-gray-600 dark:text-gray-400">Get help or provide feedback about the app.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2 flex items-center"><Info className="mr-2" /> About the App</h3>
          <p className="text-gray-600 dark:text-gray-400">View information about the app version and terms of service.</p>
        </section>
        <section>
          <button className="flex items-center text-red-600 hover:text-red-800">
            <LogOut className="mr-2" /> Logout
          </button>
        </section>
      </div>
    </div>
  );
};

export default Settings;