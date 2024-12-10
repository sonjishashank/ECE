import React from 'react';
import { homeQuickLinks } from '../../utils/constants';

export function QuickLinksSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
      <ul className="space-y-4">
        {homeQuickLinks.map((link, index) => (
          <li key={index}>• {link}</li>
        ))}
      </ul>
    </div>
  );
}