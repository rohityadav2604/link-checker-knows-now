
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import portfolioConfig from '../data/portfolio-config.json';

const About = () => {
  const bioLines = portfolioConfig.bio;
  const skills = portfolioConfig.skills;
  
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <div className="vscode-line mb-2">
            <span className="vscode-line-number">1</span>
            <span className="vscode-comment">/**</span>
          </div>
          <div className="vscode-line mb-2">
            <span className="vscode-line-number">2</span>
            <span className="vscode-keyword">* About {portfolioConfig.personalInfo.name}</span>
          </div>
          
          {bioLines.map((line, index) => (
            <div className="vscode-line mb-2" key={index}>
              <span className="vscode-line-number">{index + 3}</span>
              <span className="vscode-comment">* {line}</span>
            </div>
          ))}
          
          <div className="vscode-line mb-2">
            <span className="vscode-line-number">{bioLines.length + 3}</span>
            <span className="vscode-comment">*/</span>
          </div>
        </div>
        
        <Outlet />
      </div>
      
      <div className="w-full md:w-1/2">
        <div className="mb-8">
          <h3 className="text-xl text-[hsl(var(--vscode-comment))] mb-4">// Programming languages I have learned or am learning</h3>
          <div className="flex flex-wrap gap-4">
            {skills.programmingLanguages.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <input type="checkbox" checked className="h-4 w-4" readOnly />
                <span className="text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl text-[hsl(var(--vscode-comment))] mb-4">// Frameworks and libraries</h3>
          <div className="flex flex-wrap gap-4">
            {skills.frameworks.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <input type="checkbox" checked={skill.level > 70} className="h-4 w-4" readOnly />
                <span className="text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl text-[hsl(var(--vscode-comment))] mb-4">// Operating System and other programs</h3>
          <div className="flex flex-wrap gap-4">
            {skills.os.concat(skills.tools).map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <input type="checkbox" checked className="h-4 w-4" readOnly />
                <span className="text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
