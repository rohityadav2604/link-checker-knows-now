
import React from 'react';
import { Github, Twitter, Facebook } from 'lucide-react';
import portfolioConfig from '../data/portfolio-config.json';

const Footer = () => {
  const twitterUsername = portfolioConfig.personalInfo.twitterUsername;
  
  return (
    <div className="vscode-footer">
      <div className="flex items-center">
        <span className="mr-2">find me in:</span>
        <a href={`https://twitter.com/${twitterUsername}`} target="_blank" rel="noopener noreferrer" className="vscode-social-link">
          <Twitter size={16} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="vscode-social-link">
          <Facebook size={16} />
        </a>
      </div>
      
      <div className="flex items-center">
        <a href={portfolioConfig.contacts.github} target="_blank" rel="noopener noreferrer" className="vscode-social-link flex items-center">
          <span className="mr-1">@{twitterUsername}</span>
          <Twitter size={16} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
