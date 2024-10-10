import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Report: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [reason, setReason] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the report to a backend
    console.log('Report submitted:', { postId: id, reason });
    // Reset form or redirect user
    setReason('');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Report Post</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">You are reporting post #{id}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for reporting</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default Report;