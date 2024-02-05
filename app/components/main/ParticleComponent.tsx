// ParticleComponent.js
import React, { useEffect } from "react";
import Particles from "particles.js";

const ParticleComponent = () => {
  useEffect(() => {
    // Initialize Particle.js
    Particles.init({
      // Particle.js configuration options
      // ...
    });
  }, []);

  return <div id="particles-js"></div>;
};

export default ParticleComponent;
