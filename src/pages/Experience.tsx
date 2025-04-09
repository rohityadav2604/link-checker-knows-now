
import React from 'react';
import portfolioConfig from '../data/portfolio-config.json';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioConfig;
  
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-semibold mb-6">Professional Experience</h1>
      
      <div className="space-y-8">
        {experience.map((job, index) => (
          <div key={index} className="vscode-syntax border-l-4 border-[hsl(var(--primary))] pl-4">
            <div className="flex items-center mb-2">
              <Briefcase size={20} className="mr-2 text-[hsl(var(--primary))]" />
              <h2 className="text-xl font-semibold">
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--primary))]">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h2>
            </div>
            
            <div className="mb-2">
              <span className="text-[hsl(var(--vscode-string))] font-medium">{job.role}</span>
              <span className="text-[hsl(var(--vscode-comment))] ml-2 text-sm">{job.period}</span>
            </div>
            
            <div className="vscode-syntax">
              <div className="mb-1">
                <span className="text-[hsl(var(--vscode-keyword))]">responsibilities</span>
                <span className="text-white"> = [</span>
              </div>
              
              {job.description.map((item, idx) => (
                <div className="pl-6 mb-1" key={idx}>
                  <span className="text-[hsl(var(--vscode-string))]">"{item}"</span>
                  {idx < job.description.length - 1 && <span>,</span>}
                </div>
              ))}
              
              <div>
                <span className="text-white">];</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
