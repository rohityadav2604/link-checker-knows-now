import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="vscode-nav">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `vscode-nav-item ${isActive ? 'vscode-nav-item-active' : ''}`
        }
      >
        _hello
      </NavLink>
      
      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          `vscode-nav-item ${isActive ? 'vscode-nav-item-active' : ''}`
        }
      >
        _about-me
      </NavLink>
      
      <NavLink 
        to="/experience" 
        className={({ isActive }) => 
          `vscode-nav-item ${isActive ? 'vscode-nav-item-active' : ''}`
        }
      >
        _experience
      </NavLink>
      
      <NavLink 
        to="/publications" 
        className={({ isActive }) => 
          `vscode-nav-item ${isActive ? 'vscode-nav-item-active' : ''}`
        }
      >
        _publications
      </NavLink>

      <NavLink 
        to="/open-source" 
        className={({ isActive }) => 
          `vscode-nav-item ${isActive ? 'vscode-nav-item-active' : ''}`
        }
      >
        _open-source
      </NavLink>
      
      <NavLink 
        to="/projects" 
        className={({ isActive }) => 
          `vscode-nav-item ${isActive ? 'vscode-nav-item-active' : ''}`
        }
      >
        _projects
      </NavLink>
      
      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          `vscode-nav-item ${isActive ? 'vscode-nav-item-active' : ''}`
        }
      >
        _contact-me
      </NavLink>
    </nav>
  );
};

export default Navigation;
