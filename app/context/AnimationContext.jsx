import React from "react";

const AnimationContext = React.createContext({
  hasAnimated: false,
  setHasAnimated: () => {}
});

export default AnimationContext;
