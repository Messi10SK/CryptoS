import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foot text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>© {currentYear} CryptoStare. All rights reserved.</p>
          <p>Designed and developed by <span className="font-bold">Satyam Kanojiya</span></p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://twitter.com/satyamkanojiya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-300 hover:text-white"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/satyamkanojiya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Messi10SK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://sk-port-6e2m.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
            className="text-gray-300 hover:text-white"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}

