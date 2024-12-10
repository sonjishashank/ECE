import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Department of Electronics and Communication Engineering</p>
            <p>Guru Nanak Dev Engineering College</p>
            <p>Bidar, Karnataka</p>
            <p>Email: ece@gndec.ac.in</p>
            <p>Designed & Developed by : Sheshank Sonji</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-blue-300">Syllabus</a></li>
              <li><a href="#" className="hover:text-blue-300">Time Table</a></li>
              {/* <li><a href="#" className="hover:text-blue-300">Faculty Login</a></li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">Twitter</a>
              <a href="#" className="hover:text-blue-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-700 text-center">
          <p>© 2023 Department of ECE, GNDEC Bidar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;