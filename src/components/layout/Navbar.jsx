import React from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from './NavLinks';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl">
              ECE Department - GNDEC
            </Link>
          </div>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}