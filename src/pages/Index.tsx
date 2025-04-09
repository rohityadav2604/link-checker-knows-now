
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--vscode-bg))] text-foreground">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Loading VSCode Portfolio...</h1>
        <p className="text-xl text-[hsl(var(--vscode-comment))]">Please wait while your portfolio initializes</p>
      </div>
    </div>
  );
};

export default Index;
