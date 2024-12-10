import React from 'react';
import { latestNews } from '../../utils/constants';

export function NewsSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
      <ul className="space-y-4">
        {latestNews.map((news, index) => (
          <li key={index}>• {news}</li>
        ))}
      </ul>
    </div>
  );
}