
import React from 'react';
import portfolioConfig from '../data/portfolio-config.json';
import { FileText, ExternalLink } from 'lucide-react';

const Publications = () => {
  const { publications } = portfolioConfig;
  
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-semibold mb-6">Technical Publications</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((pub, index) => (
          <div key={index} className="vscode-syntax p-4 border border-[hsl(var(--vscode-border))] rounded-md">
            <div className="flex items-center mb-2">
              <FileText size={20} className="mr-2 text-[hsl(var(--primary))]" />
              <h2 className="text-lg font-medium">{pub.title}</h2>
            </div>
            
            <div className="mb-3 text-[hsl(var(--vscode-string))] text-sm">
              Published on: {pub.publisher}
            </div>
            
            <p className="text-[hsl(var(--vscode-comment))] mb-4 text-sm">
              {pub.description}
            </p>
            
            <a 
              href={pub.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-[hsl(var(--primary))] hover:underline"
            >
              Read Article <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
