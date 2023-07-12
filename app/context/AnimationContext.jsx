// animationContext.js

import React, { createContext, useState } from 'react';

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);

  const toggleAnimation = () => {
    setIsAnimationTriggered(!isAnimationTriggered);
  };

  return (
    <AnimationContext.Provider value={{ isAnimationTriggered, toggleAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};
