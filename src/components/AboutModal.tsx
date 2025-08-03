import React from 'react';

const AboutModal = () => {
  const skills = [
    'JavaScript', 'Java', 'Python', 'HTML/CSS', 'PostgreSQL', 'Kali Linux', 'Canva'
  ];

  const funFacts = [
    'Game Development',
    'Criminology and Law',
    'Designing & Animation',
    'Pixelated Retro Themes',
    'Sports',
    'Movies & TV Shows'
  ];

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="space-y-4">
        <p className="text-lg text-foreground leading-relaxed">
          hii there! I'm <span className="font-semibold text-primary">vashist!</span>, 
        </p>
        
        <p className="text-foreground leading-relaxed">
        I’m still in the process of exploring different areas within tech, usually 
        I enjoy learning through hands-on projects, and I’m always curious to see 
        where my interests can take me. Lately, I’ve been really drawn to how AI and 
        cybersecurity could be used in areas like criminology, digital forensics, 
        and investigations. At the same time, I also love game development and design,
        there's something really rewarding and a sense of accomplishment about building
        something fun and interactive from scratch. So for my internship, I’m looking for 
        a space where I can learn, build, and figure out how all these interests can 
        connect. I really value environments that are open, collaborative, and where I 
        can grow by working on things that matter.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">Skills & Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">Education</h3>
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="font-semibold text-foreground">Taylor's University (Dual Award with UWE Bristol)</h4>
          <p className="text-muted-foreground">Bachelor of Computer Science (Hons)</p>
          {/*<p className="text-sm text-muted-foreground">[Expected Graduation Year] • GPA: [Your GPA]</p>*/}
        </div>
      </div>

      {/* Internship Goals 
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">Internship Goals</h3>
        <div className="space-y-2">
          <p className="text-foreground">I'm looking for internship opportunities where I can:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>Contribute to real-world projects and learn from experienced developers</li>
            <li>Expand my technical skills in full-stack development</li>
            <li>Gain insights into software development best practices</li>
            <li>Collaborate with diverse teams and contribute to meaningful solutions</li>
          </ul>
        </div>
      </div> */}

      {/* Fun Facts */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">Interests</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-muted/50 rounded-lg p-3 hover:bg-muted transition-colors duration-200"
            >
              <p className="text-sm text-foreground">{fact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutModal;