import React from 'react';
import resume from '../assets/resume.pdf';
import { Github, Linkedin, FileText, Instagram, ExternalLink } from 'lucide-react';

const LinksModal = () => {
  const links = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/VashistSookun',
      description: 'Code repositories & projects',
      color: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vashistsookun/',
      description: 'Professional networking',
      color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'Resume',
      icon: FileText,
      url: resume,
      description: 'Downloadable PDF resume',
      color: 'hover:bg-green-50 dark:hover:bg-green-900/20'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/vaaashist/',
      description: 'Personal content & lifestyle',
      color: 'hover:bg-pink-50 dark:hover:bg-pink-900/20'
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-muted-foreground">
          Clicking any of the links will open a new tab!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <button
              key={index}
              onClick={() => handleLinkClick(link.url)}
              className={`group p-6 rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:scale-105 ${link.color}`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
               {/* <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" /> */}
              </div>
            </button>
          );
        })}
      </div>

      {/*<div className="text-center text-sm text-muted-foreground">
        <p>Let's connect and build something amazing together! 🚀</p>
      </div> */}
    </div>
  );
};

export default LinksModal;