import React from 'react';
import { Mail, Send } from 'lucide-react';

const ContactModal = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:vashistsookun@gmail.com?subject=Saying hi from your website';
  };

  return (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Let's Connect!</h3>
        {/*<p className="text-lg text-muted-foreground max-w-md mx-auto">
          I'd love to hear about internship opportunities, collaborations, or just 
          chat about technology and development.
        </p>*/}
      </div>

      <div className="flex justify-center">
        <div className="relative p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl shimmer"></div>
          <Mail className="w-16 h-16 text-primary mx-auto" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-foreground font-medium">
            vashistsookun@example.com
          </p>
          {/*<p className="text-sm text-muted-foreground mt-1">
            The best way to reach me is via email!
          </p>*/}
        </div>

        <button
          onClick={handleEmailClick}
          className="group inline-flex items-center space-x-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-accent transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg"
        >
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          <span>Send me an email</span>
        </button>
      </div>

      {/*<div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          💡 <strong>Pro tip:</strong> Include "Internship Opportunity" in your subject line 
          to help me prioritize your message!
        </p>
        <p className="text-sm text-muted-foreground">
          I typically respond within 24-48 hours. Looking forward to connecting! 🚀
        </p>
      </div>*/}
    </div>
  );
};

export default ContactModal;