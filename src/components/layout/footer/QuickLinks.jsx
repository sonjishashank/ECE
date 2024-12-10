import React from 'react';
import { quickLinks } from '../../../utils/constants';

export function QuickLinks() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="hover:text-blue-300">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}