import React from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../../utils/constants';

export function NavLinks() {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigationLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}