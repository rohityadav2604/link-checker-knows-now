
import React from 'react';
import portfolioConfig from '../data/portfolio-config.json';

const Home = () => {
  const { name, title, greeting } = portfolioConfig.personalInfo;
  const { email, phone, github, linkedin, behance } = portfolioConfig.contacts;
  
  return (
    <div className="flex flex-col h-full justify-center items-center md:items-start px-4 md:px-20">
      <div className="text-lg text-[hsl(var(--vscode-comment))]">{greeting}</div>
      <h1 className="text-4xl md:text-6xl font-bold my-2">{name}</h1>
      <div className="flex items-center text-[hsl(var(--primary))] mb-8">
        <span className="mr-2">&gt;</span>
        <span className="text-xl md:text-2xl">{title}</span>
      </div>
      
      <div className="mt-8 text-[hsl(var(--vscode-comment))] opacity-80 max-w-lg">
        <div className="vscode-line mb-2">
          <span className="vscode-comment">// my number</span>
        </div>
        <div className="vscode-line mb-4">
          <span className="vscode-keyword">const</span>
          <span className="vscode-variable ml-2">telephoneNum</span>
          <span className="ml-2">=</span>
          <span className="vscode-string ml-2">{phone.replace(/\s/g, '')};</span>
        </div>
        
        <div className="vscode-line mb-2">
          <span className="vscode-comment">// my e-mail</span>
        </div>
        <div className="vscode-line mb-4">
          <span className="vscode-keyword">const</span>
          <span className="vscode-variable ml-2">email</span>
          <span className="ml-2">=</span>
          <span className="vscode-string ml-2">"{email}";</span>
        </div>
        
        <div className="vscode-line mb-2">
          <span className="vscode-comment">// you can also see it on my Github page</span>
        </div>
        <div className="vscode-line mb-4">
          <span className="vscode-keyword">const</span>
          <span className="vscode-variable ml-2">githubLink</span>
          <span className="ml-2">=</span>
          <span className="vscode-string ml-2">"{github}";</span>
        </div>
        
        <div className="vscode-line mb-2">
          <span className="vscode-comment">// you can also see my project on Behance</span>
        </div>
        <div className="vscode-line mb-4">
          <span className="vscode-keyword">const</span>
          <span className="vscode-variable ml-2">behanceLink</span>
          <span className="ml-2">=</span>
          <span className="vscode-string ml-2">"{behance}";</span>
        </div>
        
        <div className="vscode-line mb-2">
          <span className="vscode-comment">// you can check my LinkedIn Page</span>
        </div>
        <div className="vscode-line mb-4">
          <span className="vscode-keyword">const</span>
          <span className="vscode-variable ml-2">linkedinPage</span>
          <span className="ml-2">=</span>
          <span className="vscode-string ml-2">"{linkedin}";</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
