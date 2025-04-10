import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex overflow-x-auto">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `px-4 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors whitespace-nowrap
          ${isActive ? 'border-b-2 border-[hsl(var(--primary))] text-foreground' : ''}`
        }
      >
        _hello
      </NavLink>
      
      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          `px-4 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors whitespace-nowrap
          ${isActive ? 'border-b-2 border-[hsl(var(--primary))] text-foreground' : ''}`
        }
      >
        _about-me
      </NavLink>
      
      <NavLink 
        to="/experience" 
        className={({ isActive }) => 
          `px-4 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors whitespace-nowrap
          ${isActive ? 'border-b-2 border-[hsl(var(--primary))] text-foreground' : ''}`
        }
      >
        _experience
      </NavLink>
      
      <NavLink 
        to="/publications" 
        className={({ isActive }) => 
          `px-4 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors whitespace-nowrap
          ${isActive ? 'border-b-2 border-[hsl(var(--primary))] text-foreground' : ''}`
        }
      >
        _publications
      </NavLink>

      <NavLink 
        to="/open-source" 
        className={({ isActive }) => 
          `px-4 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors whitespace-nowrap
          ${isActive ? 'border-b-2 border-[hsl(var(--primary))] text-foreground' : ''}`
        }
      >
        _open-source
      </NavLink>
      
      <NavLink 
        to="/projects" 
        className={({ isActive }) => 
          `px-4 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors whitespace-nowrap
          ${isActive ? 'border-b-2 border-[hsl(var(--primary))] text-foreground' : ''}`
        }
      >
        _projects
      </NavLink>
      
      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          `px-4 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors whitespace-nowrap
          ${isActive ? 'border-b-2 border-[hsl(var(--primary))] text-foreground' : ''}`
        }
      >
        _contact-me
      </NavLink>
    </nav>
  );
};

export default Navigation;
