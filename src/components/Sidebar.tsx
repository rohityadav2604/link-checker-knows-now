
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import portfolioConfig from '../data/portfolio-config.json';
import { Folder, File, ChevronRight, Mail, Phone, Github, Linkedin, User, Code, FileCode } from 'lucide-react';

interface SidebarProps {
  addTab: (tabName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ addTab }) => {
  const navigate = useNavigate();
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    'personal-info': true,
    'projects': true,
    'contacts': true,
    'education': false
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
            <div className="vscode-file flex items-center">
              <Mail size={16} className="text-green-400 mr-1" />
              <span>{portfolioConfig.contacts.email}</span>
            </div>
            <div className="vscode-file flex items-center">
              <Phone size={16} className="text-blue-400 mr-1" />
              <span>{portfolioConfig.contacts.phone}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
