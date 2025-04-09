
import React from 'react';
import portfolioConfig from '../data/portfolio-config.json';

const AboutEducation = () => {
  const education = portfolioConfig.education;
  
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Education</h3>
      <div className="vscode-syntax">
        {education.map((edu, index) => (
          <div className="mb-4" key={index}>
            <div className="mb-1">
              <span className="vscode-keyword">[{edu.degree}]</span>
              <span className="text-[hsl(var(--vscode-string))]"> {edu.field}</span>
            </div>
            <div className="mb-1 pl-4">
              <span className="text-[hsl(var(--vscode-comment))]">Institution: {edu.institution}</span>
            </div>
            <div className="mb-1 pl-4">
              <span className="text-[hsl(var(--vscode-comment))]">Year: {edu.year}</span>
            </div>
            {edu.location && (
              <div className="mb-1 pl-4">
                <span className="text-[hsl(var(--vscode-comment))]">Location: {edu.location}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEducation;
