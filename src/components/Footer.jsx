import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-foot text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <p>© {new Date().getFullYear()} CryptoStare. All rights reserved.</p>
          <p>Designed and developed by <span className="font-bold">Satyam Kanojiya</span></p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://twitter.com/satyamkanojiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white flex items-center"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/satyamkanojiya/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white flex items-center"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/satyamkanojiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white flex items-center"
          >
            <FaGithub />
          </a>
          <a
            href="https://satyamkanojiya.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white flex items-center"
          >
            Portfolio
          </a>
        </div>
      </div>
    
    </footer>
  );
}


