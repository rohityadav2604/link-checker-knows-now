
import React from 'react';
import portfolioConfig from '../data/portfolio-config.json';

const AboutInterests = () => {
  const interests = portfolioConfig.interests;
  
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Interests</h3>
      <div className="vscode-syntax">
        <div className="vscode-line mb-2">
          <span className="vscode-line-number">1</span>
          <span className="vscode-comment">/**</span>
        </div>
        <div className="vscode-line mb-2">
          <span className="vscode-line-number">2</span>
          <span className="vscode-keyword">* [Interests]</span>
        </div>
        
        {interests.map((interest, index) => (
          <div className="vscode-line mb-2" key={index}>
            <span className="vscode-line-number">{index + 3}</span>
            <span className="vscode-comment">* {interest}</span>
          </div>
        ))}
        
        <div className="vscode-line mb-2">
          <span className="vscode-line-number">{interests.length + 3}</span>
          <span className="vscode-comment">*/</span>
        </div>
      </div>
    </div>
  );
};

export default AboutInterests;
