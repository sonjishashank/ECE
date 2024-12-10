import React from 'react';
import { ContactInfo } from './footer/ContactInfo';
import { QuickLinks } from './footer/QuickLinks';
import { SocialLinks } from './footer/SocialLinks';
// import { Designed } from './footer/Designed';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactInfo />
          <QuickLinks />
          <SocialLinks />
          
        </div>
        <div className="mt-8 pt-8 border-t border-blue-700 text-center">
          <p>© {new Date().getFullYear()} Department of ECE, GNDEC Bidar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}