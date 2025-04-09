
import React from 'react';
import portfolioConfig from '../data/portfolio-config.json';

const AboutBio = () => {
  const bioLines = portfolioConfig.bio;
  
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Bio</h3>
      <div className="vscode-syntax">
        {bioLines.map((line, index) => (
          <div className="mb-2" key={index}>
            <span className="text-[hsl(var(--vscode-string))]">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBio;
