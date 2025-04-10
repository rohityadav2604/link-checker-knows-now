import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import portfolioConfig from '../data/portfolio-config.json';
import { Folder, File, ChevronRight, Mail, Phone, Github, Linkedin, User, Code, FileCode, Briefcase, BookOpen, GitPullRequest } from 'lucide-react';

interface SidebarProps {
  addTab: (tabName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ addTab }) => {
  const navigate = useNavigate();
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    'personal-info': true,
    'projects': true,
    'contacts': true,
    'education': false,
    'experience': false,
    'publications': false,
    'open-source': false
  });

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev[folder]
    }));
  };

  const handleFileClick = (path: string, fileName: string) => {
    navigate(path);
    addTab(fileName);
  };

  return (
    <div className="vscode-sidebar">
      <div className="p-4 flex items-center">
        <User size={20} className="mr-2" />
        <span className="text-lg font-semibold text-[#8E9196]">{portfolioConfig.personalInfo.githubUsername}</span>
      </div>

      <div className="vscode-explorer">
        {/* Personal Info Section */}
        <div 
          className={`vscode-folder mb-2 ${expandedFolders['personal-info'] ? 'expanded' : ''}`} 
          onClick={() => toggleFolder('personal-info')}
        >
          <ChevronRight size={16} className="expand-icon" />
          <span>personal-info</span>
        </div>
        
        {expandedFolders['personal-info'] && (
          <>
            <div 
              className="vscode-file" 
              onClick={() => handleFileClick('/about/bio', 'bio.tsx')}
            >
              <File size={16} className="text-orange-300" />
              <span>bio</span>
            </div>
            <div 
              className="vscode-file" 
              onClick={() => handleFileClick('/about/interests', 'interests.tsx')}
            >
              <File size={16} className="text-green-300" />
              <span>interests</span>
            </div>
            <div 
              className={`vscode-folder ml-4 mt-1 ${expandedFolders['education'] ? 'expanded' : ''}`} 
              onClick={(e) => {
                e.stopPropagation();
                toggleFolder('education');
              }}
            >
              <ChevronRight size={16} className="expand-icon" />
              <Folder size={16} className="text-blue-300" />
              <span>education</span>
            </div>
            
            {expandedFolders['education'] && (
              <>
                <div 
                  className="vscode-file ml-8" 
                  onClick={() => handleFileClick('/about/education/high-school', 'high-school.tsx')}
                >
                  <File size={16} />
                  <span>high-school</span>
                </div>
                <div 
                  className="vscode-file ml-8" 
                  onClick={() => handleFileClick('/about/education/university', 'university.tsx')}
                >
                  <File size={16} />
                  <span>university</span>
                </div>
              </>
            )}
          </>
        )}
        
        {/* Experience Section */}
        <div 
          className={`vscode-folder mt-4 ${expandedFolders['experience'] ? 'expanded' : ''}`}
          onClick={() => toggleFolder('experience')}
        >
          <ChevronRight size={16} className="expand-icon" />
          <Briefcase size={16} className="text-yellow-400 mr-1" />
          <span>experience</span>
        </div>
        
        {expandedFolders['experience'] && portfolioConfig.experience.map((job, index) => (
          <div 
            key={index}
            className="vscode-file" 
            onClick={() => handleFileClick(`/experience`, `${job.company.toLowerCase().replace(/\s+/g, '-')}.tsx`)}
          >
            <File size={16} className="text-yellow-300" />
            <span>{job.company}</span>
          </div>
        ))}
        
        {/* Publications Section */}
        <div 
          className={`vscode-folder mt-4 ${expandedFolders['publications'] ? 'expanded' : ''}`}
          onClick={() => toggleFolder('publications')}
        >
          <ChevronRight size={16} className="expand-icon" />
          <BookOpen size={16} className="text-purple-400 mr-1" />
          <span>publications</span>
        </div>
        
        {expandedFolders['publications'] && (
          <div 
            className="vscode-file" 
            onClick={() => handleFileClick(`/publications`, `technical-blogs.tsx`)}
          >
            <File size={16} className="text-purple-300" />
            <span>technical-blogs</span>
          </div>
        )}
        
        {/* Open Source Section */}
        <div 
          className={`vscode-folder mt-4 ${expandedFolders['open-source'] ? 'expanded' : ''}`}
          onClick={() => toggleFolder('open-source')}
        >
          <ChevronRight size={16} className="expand-icon" />
          <GitPullRequest size={16} className="text-blue-400 mr-1" />
          <span>open-source</span>
        </div>
        
        {expandedFolders['open-source'] && (
          <div 
            className="vscode-file" 
            onClick={() => handleFileClick(`/open-source`, `contributions.tsx`)}
          >
            <File size={16} className="text-blue-300" />
            <span>contributions</span>
          </div>
        )}
        
        {/* Projects Section */}
        <div 
          className={`vscode-folder mt-4 ${expandedFolders['projects'] ? 'expanded' : ''}`}
          onClick={() => toggleFolder('projects')}
        >
          <ChevronRight size={16} className="expand-icon" />
          <Folder size={16} className="text-[hsl(var(--vscode-folder))]" />
          <span>projects</span>
        </div>
        
        {expandedFolders['projects'] && portfolioConfig.projects.map(project => (
          <div 
            key={project.id}
            className="vscode-file" 
            onClick={() => handleFileClick(`/projects/${project.id}`, `${project.folder}.tsx`)}
          >
            <File size={16} className="text-blue-300" />
            <span>{project.folder}</span>
          </div>
        ))}
        
        {/* Contacts Section */}
        <div 
          className={`vscode-folder mt-4 ${expandedFolders['contacts'] ? 'expanded' : ''}`}
          onClick={() => toggleFolder('contacts')}
        >
          <ChevronRight size={16} className="expand-icon" />
          <span>contacts</span>
        </div>
        
        {expandedFolders['contacts'] && (
          <>
            <div className="vscode-file">
              <Mail size={16} className="text-green-400 mr-1 flex-shrink-0" />
              <span className="text-xs overflow-hidden text-ellipsis">{portfolioConfig.contacts.email}</span>
            </div>
            <div className="vscode-file">
              <Phone size={16} className="text-blue-400 mr-1 flex-shrink-0" />
              <span className="text-xs overflow-hidden text-ellipsis">{portfolioConfig.contacts.phone}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
