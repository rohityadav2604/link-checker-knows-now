import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import portfolioConfig from '../data/portfolio-config.json';
import { Github, ExternalLink, Calendar, Star } from 'lucide-react';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<any>(null);
  
  useEffect(() => {
    const foundProject = portfolioConfig.projects.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [projectId]);
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  return (
    <div className="mt-8 p-4 bg-[hsl(var(--vscode-editor-bg))]">
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">// Project {project.name} // {project.folder}</h2>
          <div className="flex items-center text-sm text-[hsl(var(--vscode-comment))]">
            <span className="mr-2">@{portfolioConfig.personalInfo.githubUsername}</span>
            <Calendar size={14} className="mr-1" />
            <span>Created {project.created}</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <button className="flex items-center text-sm mr-4">
            <Star size={16} className="mr-1" />
            <span>3 stars</span>
          </button>
          <button className="text-sm">details</button>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <div className="vscode-syntax">
            <div className="vscode-line mb-2">
              <span className="vscode-line-number">1</span>
              <span className="vscode-comment">/**</span>
            </div>
            <div className="vscode-line mb-2">
              <span className="vscode-line-number">2</span>
              <span className="vscode-keyword">* Project {project.name} // {project.folder}</span>
            </div>
            
            {project.longDescription.split('\n').map((line: string, index: number) => (
              <div className="vscode-line mb-2" key={index}>
                <span className="vscode-line-number">{index + 3}</span>
                <span className="vscode-comment">* {line}</span>
              </div>
            ))}
            
            {project.technologies?.map((tech: string, index: number) => (
              <div className="vscode-line mb-2" key={`tech-${index}`}>
                <span className="vscode-line-number">{project.longDescription.split('\n').length + index + 3}</span>
                <span className="vscode-comment">* Technology: {tech}</span>
              </div>
            ))}
            
            {project.tools?.map((tool: string, index: number) => (
              <div className="vscode-line mb-2" key={`tool-${index}`}>
                <span className="vscode-line-number">{project.longDescription.split('\n').length + (project.technologies?.length || 0) + index + 3}</span>
                <span className="vscode-comment">* Tool: {tool}</span>
              </div>
            ))}
            
            {project.inProgress && (
              <div className="vscode-line mb-2">
                <span className="vscode-line-number">{project.longDescription.split('\n').length + (project.technologies?.length || 0) + (project.tools?.length || 0) + 3}</span>
                <span className="vscode-comment">* //** N.B. This project is still in progress! **/</span>
              </div>
            )}
            
            <div className="vscode-line mb-2">
              <span className="vscode-line-number">{project.longDescription.split('\n').length + (project.technologies?.length || 0) + (project.tools?.length || 0) + (project.inProgress ? 4 : 3)}</span>
              <span className="vscode-comment">*/</span>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row gap-3">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-button flex items-center justify-center w-full md:w-auto"
            >
              <Github size={16} className="mr-2" />
              view-project-on-github
            </a>
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-button flex items-center justify-center w-full md:w-auto"
              >
                <ExternalLink size={16} className="mr-2" />
                view-live-project
              </a>
            )}
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h3 className="text-xl mb-4">Project {project.name} // {project.folder}</h3>
          <p className="mb-6">{project.longDescription}</p>
          
          <div className="project-images">
            {project.images.map((image: string, index: number) => (
              <div className="project-image" key={index}>
                <img src={image} alt={`${project.name} screenshot ${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
