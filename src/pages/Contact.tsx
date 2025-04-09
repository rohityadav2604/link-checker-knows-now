
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import portfolioConfig from '../data/portfolio-config.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
        <div className="vscode-syntax mb-6">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Mail size={18} className="mr-2 text-[hsl(var(--primary))]" />
              <span className="text-lg">Email:</span>
            </div>
            <a href={`mailto:${portfolioConfig.contacts.email}`} className="ml-6 text-[hsl(var(--vscode-string))] hover:underline">
              {portfolioConfig.contacts.email}
            </a>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Phone size={18} className="mr-2 text-[hsl(var(--primary))]" />
              <span className="text-lg">Phone:</span>
            </div>
            <a href={`tel:${portfolioConfig.contacts.phone}`} className="ml-6 text-[hsl(var(--vscode-string))] hover:underline">
              {portfolioConfig.contacts.phone}
            </a>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Github size={18} className="mr-2 text-[hsl(var(--primary))]" />
              <span className="text-lg">GitHub:</span>
            </div>
            <a href={portfolioConfig.contacts.github} target="_blank" rel="noopener noreferrer" className="ml-6 text-[hsl(var(--vscode-string))] hover:underline">
              {portfolioConfig.contacts.github}
            </a>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Linkedin size={18} className="mr-2 text-[hsl(var(--primary))]" />
              <span className="text-lg">LinkedIn:</span>
            </div>
            <a href={portfolioConfig.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="ml-6 text-[hsl(var(--vscode-string))] hover:underline">
              {portfolioConfig.contacts.linkedin}
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <Card className="bg-[hsl(var(--vscode-selection-bg))] border-0">
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[hsl(var(--vscode-editor-bg))] border-[hsl(var(--vscode-selection-bg))]"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[hsl(var(--vscode-editor-bg))] border-[hsl(var(--vscode-selection-bg))]"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Enter subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-[hsl(var(--vscode-editor-bg))] border-[hsl(var(--vscode-selection-bg))]"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Enter your message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="flex h-20 w-full rounded-md border border-[hsl(var(--vscode-selection-bg))] bg-[hsl(var(--vscode-editor-bg))] px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              
              <CardFooter className="flex justify-end p-0 mt-4">
                <Button type="submit" className="bg-[hsl(var(--primary))]">
                  Send Message
                </Button>
              </CardFooter>
              
              {formSubmitted && (
                <div className="mt-4 p-2 bg-green-800/50 text-green-200 rounded-md text-center">
                  Message sent successfully!
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
