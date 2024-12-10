import React from 'react';
import { socialLinks } from '../../../utils/constants';

export function SocialLinks() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}