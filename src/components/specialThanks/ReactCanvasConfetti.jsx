import React from 'react';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

export default function ReactCanvasConfetti() {
  const canvasStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: '100vh'
  };

  return (
    <div>
      <Fireworks autorun={{ speed: 1, duration: 1, delay: 0 }} style={canvasStyles} />
      <Fireworks autorun={{ speed: 1, duration: 1, delay: 2000 }} style={canvasStyles} />
      <Fireworks autorun={{ speed: 1, duration: 1, delay: 4000 }} style={canvasStyles} />
      <Fireworks autorun={{ speed: 1, duration: 1, delay: 6000 }} style={canvasStyles} />
      <Fireworks autorun={{ speed: 1, duration: 1, delay: 8000 }} style={canvasStyles} />
      <Fireworks autorun={{ speed: 1, duration: 1, delay: 10000 }} style={canvasStyles} />
      <Fireworks autorun={{ speed: 1, duration: 1, delay: 12000 }} style={canvasStyles} />
      <Fireworks autorun={{ speed: 1, duration: 1, delay: 14000 }} style={canvasStyles} />
    </div>
  );
}
