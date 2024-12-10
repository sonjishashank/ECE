import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl">
              ECE Department - GNDEC
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md">About Us</Link>
              <Link to="/Faculty" className="hover:bg-blue-700 px-3 py-2 rounded-md">Faculty</Link>
              <Link to="/events" className="hover:bg-blue-700 px-3 py-2 rounded-md">Events Gallery</Link>
              <Link to="/study-corner" className="hover:bg-blue-700 px-3 py-2 rounded-md">Study Corner</Link>
              <Link to="/clubs" className="hover:bg-blue-700 px-3 py-2 rounded-md">Clubs</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}