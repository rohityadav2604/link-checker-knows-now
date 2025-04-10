import React from 'react';
import portfolioConfig from '@/data/portfolio-config.json';
import { GitPullRequest, ExternalLink } from 'lucide-react';

const OpenSource = () => {
  const { openSource } = portfolioConfig;
  
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-semibold mb-6">Open Source Contributions</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {openSource.map((contribution, index) => (
          <div key={index} className="vscode-syntax p-4 border border-[hsl(var(--vscode-border))] rounded-md">
            <div className="flex items-center mb-2">
              <GitPullRequest size={20} className="mr-2 text-[hsl(var(--primary))]" />
              <h2 className="text-lg font-medium">{contribution.organization}</h2>
            </div>
            
            <div className="mb-3 text-[hsl(var(--vscode-string))] text-sm">
              {contribution.date}
            </div>
            
            <p className="text-[hsl(var(--vscode-comment))] mb-4 text-sm">
              {contribution.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {contribution.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-2 py-1 bg-[hsl(var(--vscode-bg))] text-[hsl(var(--vscode-comment))] rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={contribution.prLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-[hsl(var(--primary))] hover:underline"
            >
              View Pull Request <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenSource; 