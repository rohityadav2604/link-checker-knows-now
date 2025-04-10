import React from 'react';
import { Github, Twitter, Facebook } from 'lucide-react';
import portfolioConfig from '../data/portfolio-config.json';

const Footer = () => {
  const twitterUsername = portfolioConfig.personalInfo.twitterUsername;
  const githubUsername = portfolioConfig.personalInfo.githubUsername;
  
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center">
        <span className="mr-2">find me in:</span>
        <a 
          href={`https://twitter.com/${twitterUsername}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-primary transition-colors px-1"
        >
          <Twitter size={16} />
        </a>
        <a 
          href={portfolioConfig.contacts.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-primary transition-colors px-1"
        >
          <Facebook size={16} />
        </a>
      </div>
      
      <div className="flex items-center">
        <a 
          href={portfolioConfig.contacts.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-primary transition-colors flex items-center"
        >
          <span className="mr-1">@{githubUsername}</span>
          <Github size={16} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
