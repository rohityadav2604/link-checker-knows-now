
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import portfolioConfig from '../data/portfolio-config.json';

const Projects = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioConfig.projects.map(project => (
          <Link to={`/projects/${project.id}`} key={project.id} className="bg-[hsl(var(--vscode-selection-bg))] rounded-md p-4 hover:bg-[hsl(var(--vscode-selection-bg))/80] transition-colors">
            <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--primary))]">{project.name}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies?.map((tech, index) => (
                <span key={index} className="project-tech-pill">{tech}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      
      <Outlet />
    </div>
  );
};

export default Projects;
