import React, { useState, useEffect } from 'react';

const CuteAnimations = () => {
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);

  // Trigger random animations periodically
  useEffect(() => {
    const animations = ['dive', 'football', 'dodgeball'];
    
    const randomAnimation = () => {
      const randomAnim = animations[Math.floor(Math.random() * animations.length)];
      setActiveAnimation(randomAnim);
      
      // Reset after animation completes
      setTimeout(() => {
        setActiveAnimation(null);
      }, 3000);
    };

    // Start first animation after 2 seconds
    const initialTimeout = setTimeout(randomAnimation, 2000);
    
    // Then repeat every 8-12 seconds
    const interval = setInterval(() => {
      if (!activeAnimation) {
        randomAnimation();
      }
    }, Math.random() * 4000 + 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [activeAnimation]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Diving Animation */}
      {activeAnimation === 'dive' && (
        <div className="absolute top-20 left-1/4 animate-[dive_3s_ease-in-out]">
          <div className="relative">
            {/* Pool */}
            <div className="absolute top-32 left-0 w-32 h-8 bg-accent-blue rounded-full opacity-60 animate-[ripple_1s_infinite]" />
            {/* Character diving */}
            <div className="text-4xl animate-[spin_0.5s_ease-in] transform -rotate-45">
              🏊‍♂️
            </div>
          </div>
        </div>
      )}

      {/* Football Animation */}
      {activeAnimation === 'football' && (
        <div className="absolute bottom-32 right-1/4">
          {/* Character */}
          <div className="relative">
            <div className="text-4xl animate-[kick_1s_ease-out]">
              ⚽
            </div>
            <div className="absolute -left-12 text-3xl animate-[celebrate_0.5s_ease-out_0.8s]">
              🙋‍♂️
            </div>
          </div>
        </div>
      )}

      {/* Dodgeball Animation */}
      {activeAnimation === 'dodgeball' && (
        <div className="absolute top-1/3 right-20">
          <div className="relative">
            {/* Character throwing */}
            <div className="text-3xl animate-[throw_1s_ease-out]">
              🤾‍♂️
            </div>
            {/* Ball flying */}
            <div className="absolute top-0 left-8 text-2xl animate-[flyBall_2s_ease-out]">
              🏐
            </div>
          </div>
        </div>
      )}

      {/* Interactive Click Areas */}
      <div 
        className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors cursor-pointer flex items-center justify-center pointer-events-auto"
        onClick={() => setActiveAnimation('dive')}
        title="Click for diving animation!"
      >
        <span className="text-2xl">🏊‍♂️</span>
      </div>

      <div 
        className="absolute bottom-10 left-28 w-16 h-16 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors cursor-pointer flex items-center justify-center pointer-events-auto"
        onClick={() => setActiveAnimation('football')}
        title="Click for football animation!"
      >
        <span className="text-2xl">⚽</span>
      </div>

      <div 
        className="absolute bottom-10 left-44 w-16 h-16 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors cursor-pointer flex items-center justify-center pointer-events-auto"
        onClick={() => setActiveAnimation('dodgeball')}
        title="Click for dodgeball animation!"
      >
        <span className="text-2xl">🏐</span>
      </div>
    </div>
  );
};

export default CuteAnimations;