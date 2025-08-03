import React from 'react';

const FloatingElements = () => {
  const emojis = ['⚽', '🏀', '🎮', '🚀', '⭐'];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className="absolute text-2xl opacity-20 float-animation"
          style={{
            left: `${10 + (index * 20)}%`,
            top: `${20 + (index * 15)}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + (index % 2)}s`,
          }}
        >
          {emoji}
        </div>
      ))}
      
      {/* Additional floating elements */}
      {emojis.map((emoji, index) => (
        <div
          key={`second-${index}`}
          className="absolute text-xl opacity-10 float-animation"
          style={{
            right: `${5 + (index * 15)}%`,
            bottom: `${15 + (index * 12)}%`,
            animationDelay: `${(index + 2) * 0.7}s`,
            animationDuration: `${4 + (index % 3)}s`,
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;