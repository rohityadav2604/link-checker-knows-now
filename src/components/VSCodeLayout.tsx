import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import Footer from './Footer';
import portfolioConfig from '../data/portfolio-config.json';
import { File, X, Menu } from 'lucide-react';

const VSCodeLayout = () => {
  const [activeTab, setActiveTab] = useState('welcome.tsx');
  const [openTabs, setOpenTabs] = useState(['welcome.tsx']);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const addTab = (tabName: string) => {
    if (!openTabs.includes(tabName)) {
      setOpenTabs([...openTabs, tabName]);
    }
    setActiveTab(tabName);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };
  
  const removeTab = (tabName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(tab => tab !== tabName);
    setOpenTabs(newTabs);
    if (activeTab === tabName && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    }
  };
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - hidden on mobile, visible on desktop */}
      <div className={`
        fixed md:relative inset-y-0 left-0 z-40
        w-64 bg-[hsl(var(--vscode-sidebar-bg))] border-r border-[hsl(var(--vscode-selection-bg))]
        transform transition-transform duration-300 ease-in-out
        md:transform-none md:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar addTab={addTab} />
      </div>
      
      {/* Overlay - only on mobile when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Main content */}
      <div className="flex flex-col flex-grow overflow-hidden">
        <header className="bg-[hsl(var(--vscode-sidebar-bg))] border-b border-[hsl(var(--vscode-selection-bg))] h-12 flex items-center justify-between px-4">
          <div className="flex items-center">
            <button 
              className="md:hidden p-2 rounded hover:bg-[hsl(var(--vscode-selection-bg))]"
              onClick={toggleSidebar}
            >
              <Menu size={20} />
            </button>
            <div className="text-lg font-bold text-foreground ml-2">
              {portfolioConfig.personalInfo.name}
            </div>
          </div>
          <Navigation />
        </header>
        
        <div className="bg-[hsl(var(--vscode-sidebar-bg))] border-b border-[hsl(var(--vscode-selection-bg))] h-10 flex items-center overflow-x-auto">
          {openTabs.map(tab => (
            <div 
              key={tab} 
              className={`flex items-center h-full px-4 cursor-pointer relative whitespace-nowrap
                ${activeTab === tab 
                  ? 'bg-[hsl(var(--vscode-editor-bg))] text-foreground after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:bg-[hsl(var(--vscode-tab-active-border))]' 
                  : 'bg-[hsl(var(--vscode-tab-inactive))] text-muted-foreground'
                }`}
              onClick={() => setActiveTab(tab)}
            >
              <File size={16} className={`mr-1 ${
                tab.startsWith('_about') ? 'text-blue-400' : 
                tab.startsWith('_projects') ? 'text-green-400' : 
                tab.startsWith('_contact') ? 'text-yellow-400' : ''
              }`} />
              {tab}
              <X 
                size={16} 
                className="ml-2 hover:bg-[hsl(var(--vscode-selection-bg))] rounded" 
                onClick={(e) => removeTab(tab, e)}
              />
            </div>
          ))}
        </div>
        
        <main className="bg-[hsl(var(--vscode-editor-bg))] flex-grow p-4 overflow-auto">
          <Outlet context={{ activeTab, addTab }} />
        </main>
        
        <footer className="bg-[hsl(var(--vscode-sidebar-bg))] border-t border-[hsl(var(--vscode-selection-bg))] h-7 flex items-center justify-between px-4 text-xs w-full">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default VSCodeLayout;
