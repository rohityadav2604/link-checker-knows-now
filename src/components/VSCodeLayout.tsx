
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import Footer from './Footer';
import portfolioConfig from '../data/portfolio-config.json';
import { Folder, File, ChevronRight, X } from 'lucide-react';

const VSCodeLayout = () => {
  const [activeTab, setActiveTab] = useState('welcome.tsx');
  const [openTabs, setOpenTabs] = useState(['welcome.tsx']);
  
  const addTab = (tabName: string) => {
    if (!openTabs.includes(tabName)) {
      setOpenTabs([...openTabs, tabName]);
    }
    setActiveTab(tabName);
  };
  
  const removeTab = (tabName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(tab => tab !== tabName);
    setOpenTabs(newTabs);
    if (activeTab === tabName && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    }
  };
  
  return (
    <div className="vscode-container">
      <Sidebar addTab={addTab} />
      
      <div className="vscode-main">
        <div className="vscode-header">
          <div className="text-lg font-bold text-foreground">
            {portfolioConfig.personalInfo.name}
          </div>
          <Navigation />
        </div>
        
        <div className="vscode-tabs">
          {openTabs.map(tab => (
            <div 
              key={tab} 
              className={`vscode-tab ${activeTab === tab ? 'vscode-tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'welcome.tsx' ? (
                <File size={16} className="mr-1" />
              ) : tab.startsWith('_about') ? (
                <File size={16} className="mr-1 text-blue-400" />
              ) : tab.startsWith('_projects') ? (
                <File size={16} className="mr-1 text-green-400" />
              ) : tab.startsWith('_contact') ? (
                <File size={16} className="mr-1 text-yellow-400" />
              ) : (
                <File size={16} className="mr-1" />
              )}
              {tab}
              <X 
                size={16} 
                className="ml-2 hover:bg-[hsl(var(--vscode-selection-bg))] rounded" 
                onClick={(e) => removeTab(tab, e)}
              />
            </div>
          ))}
        </div>
        
        <div className="vscode-content">
          <Outlet context={{ activeTab, addTab }} />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default VSCodeLayout;
