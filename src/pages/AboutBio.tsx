
import React from 'react';
import portfolioConfig from '../data/portfolio-config.json';

const AboutBio = () => {
  const bioLines = portfolioConfig.bio;
  const experience = portfolioConfig.experience || [];
  
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Bio</h3>
      <div className="vscode-syntax mb-6">
        {bioLines.map((line, index) => (
          <div className="mb-2" key={index}>
            <span className="text-[hsl(var(--vscode-string))]">{line}</span>
          </div>
        ))}
      </div>

      {experience && experience.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          {experience.map((exp, index) => (
            <div className="mb-6 bg-[hsl(var(--vscode-editor-bg))] p-4 rounded" key={index}>
              <div className="flex flex-wrap justify-between mb-2">
                <h4 className="text-lg font-medium">
                  <span className="text-[hsl(var(--primary))]">{exp.role}</span> at {" "}
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-[hsl(var(--vscode-link))]">
                      {exp.company}
                    </a>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                </h4>
                <span className="text-sm text-[hsl(var(--vscode-comment))]">{exp.period}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm text-[hsl(var(--vscode-foreground))]">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutBio;
