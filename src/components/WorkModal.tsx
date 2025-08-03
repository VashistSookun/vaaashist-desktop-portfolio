import React from 'react';
import { Github, Code } from 'lucide-react';
import Carousel from './Carousel';
import DDD1 from '../assets/DDD1.jpeg';
import DDD2 from '../assets/DDD2.jpeg';
import DDD3 from '../assets/DDD3.jpeg';

import Capygame1 from '../assets/Capygame1.jpeg';
import Capygame2 from '../assets/Capygame2.jpeg';
import Capygame3 from '../assets/Capygame3.jpeg';

import C1 from '../assets/C1.png';
import C2 from '../assets/C2.png';

import P1 from '../assets/P1.png';
import P2 from '../assets/P2.png';



const WorkModal = () => {
  const projects = [
    {
      title: 'CapyGame',
      description: 'Designed and developed a Java-based 2D platformer game inspired by classics like Jump King and Doodle Jump. Implemented essential gameplay mechanics including player movement, enemy behavior, collision detection, scoring, and a real-time leaderboard.',
      technologies: ['Java', 'JavaFx', 'Scenebuilder'],
      github: 'https://github.com/your-username/task-app',
      featured: false,
      screenshots: [Capygame1, Capygame2, Capygame3]
    },
    {
      title: 'Fake Reviews Detection',
      description: 'Developed a Chrome extension that flags potentially fake product reviews on e-commerce websites. It also gives a recommendation on whether to buy the product or not with a confidence score',
      technologies: ['JavaScript', 'HTML', 'CSS', 'TypeScript'],
      github: 'https://github.com/your-username/weather-app',
      featured: false,
      screenshots: [C1, C2 ]
    },
    {
      title: 'Drowsiness Detection',
      description: 'Built a deep learning model to classify driver alertness levels using facial image data. The pipeline also included compiling and preprocessing a dataset of human facial expressions at different drowsiness stages.',
      technologies: ['Python', 'TensorFlow/Keras', 'Numpy/pandas'],
      github: 'https://github.com/your-username/ecommerce-app',
      featured: false,
      screenshots: [DDD1, DDD2, DDD3 ]
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio for me and You\'re looking at it right now!',
      technologies: ['HTML/CSS', 'TypeScript', 'JavaScript'],
      github: 'https://github.com/your-username/portfolio',
      featured: false,
      screenshots: [P1, P2 ] // No screenshots since we're on the website itself
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-lg text-foreground">
          here are some projects I've worked on! ^_^
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg ${
              project.featured ? 'ring-2 ring-primary/20' : ''
            }`}
          >
            {project.featured && (
              <div className="absolute -top-2 -right-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                Featured
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Info */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/*<div className="flex space-x-3">
                    <button
                      onClick={() => handleLinkClick(project.github)}
                      className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </button>
                  </div>*/}
                </div>
              </div>

              {/* Screenshots Carousel */}
              <div className="space-y-2">
                {project.screenshots.length > 0 ? (
                  <>
                    <h4 className="text-sm font-medium text-muted-foreground">Screenshots</h4>
                    <Carousel 
                      images={project.screenshots} 
                      alt={project.title}
                    />
                  </>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                    <div className="text-center space-y-2">
                      {/*<div className="text-2xl">lalalal</div>*/}
                      {/*<p className="text-sm text-muted-foreground">
                        You'ree on the website rnn
                      </p>*/}
                    </div> 
                  </div> 
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*<div className="text-center">
        <button
          onClick={() => handleLinkClick('https://github.com/your-username')}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors duration-200 font-medium"
        >
          <Code className="w-5 h-5" />
          <span>View All Projects on GitHub</span>
        </button>
      </div>*/}
    </div>
  );
};

export default WorkModal;