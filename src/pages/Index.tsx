import React, { useState } from 'react';
import { User, Link, Briefcase, Mail, Twitter, Youtube, Instagram } from 'lucide-react';
import Modal from '../components/Modal';
import AboutModal from '../components/AboutModal';
import LinksModal from '../components/LinksModal';
import WorkModal from '../components/WorkModal';
import ContactModal from '../components/ContactModal';
import ThemeToggle from '../components/ThemeToggle';
import FloatingElements from '../components/FloatingElements';
import CuteAnimations from '../components/CuteAnimations';
import portfolioAvatar from '../assets/portfolio-avatar.png';

const Index = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const navigationItems = [
    {
      id: 'about',
      title: 'about',
      icon: User,
      component: AboutModal
    },
    {
      id: 'links',
      title: 'links',
      icon: Link,
      component: LinksModal
    },
    {
      id: 'work',
      title: 'work',
      icon: Briefcase,
      component: WorkModal
    },
    {
      id: 'contact',
      title: 'contact',
      icon: Mail,
      component: ContactModal
    }
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/vaaashist/' }
  ];

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const ActiveModalComponent = navigationItems.find(item => item.id === activeModal)?.component;

  return (
    <div className="min-h-screen bg-gradient-main relative overflow-hidden">
      <FloatingElements />
      {/* <CuteAnimations />  */}
      <ThemeToggle />
      
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative">
          {/* Main Card */}
          <div className="bg-card rounded-3xl shadow-2xl border border-border p-8 max-w-2xl mx-auto">
            {/* Header with Navigation Tab */}
            <div className="mb-8">
              <div className="bg-background text-foreground px-4 py-2 rounded-t-xl inline-block"> 
                <span className="font-medium">home</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center space-y-8">
              {/* Greeting */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  hi! <span className="text-primary">i'm vaaashist</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  a current computer science student specializing in AI with an extension in Cybersecurity and a freelance Quantitative Research consultatnt
                </p>
              </div>

              {/* Avatar 
              <div className="flex justify-center">
                <div className="relative group">
                  <img
                    src={portfolioAvatar}
                    alt="Portfolio Avatar"
                    className="w-32 h-32 rounded-full border-4 border-primary shadow-lg spin-on-hover cursor-pointer"
                    onClick={() => openModal('about')}
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div> */}

              {/* Navigation Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => openModal(item.id)}
                      className="group flex flex-col items-center space-y-3 p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                    >
                      <div className="p-3 rounded-full bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleSocialClick(social.url)}
                      className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label={`Visit ${IconComponent.name} profile`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </button>
                  );
                })}
              </div>

              {/* Copyright */}
              <p className="text-sm text-muted-foreground">
                © 2025 Vashist Sookun
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {navigationItems.map((item) => (
        <Modal
          key={item.id}
          isOpen={activeModal === item.id}
          onClose={closeModal}
          title={item.title}
        >
          <item.component />
        </Modal>
      ))}
    </div>
  );
};

export default Index;
