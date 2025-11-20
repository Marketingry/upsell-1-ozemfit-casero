"use client";

import React, { useEffect } from 'react';

const VturbPlayer: React.FC = () => {
  useEffect(() => {
    const scriptId = 'vturb-script';
    // Evita adicionar o script múltiplas vezes
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://scripts.converteai.net/2899e891-d272-4691-9f42-3b457355798a/players/691f2bff813dc92a81d454e4/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Limpa o script quando o componente é desmontado
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <vturb-smartplayer id="vid-691f2bff813dc92a81d454e4" style={{ display: 'block', margin: '0 auto', width: '100%' }}></vturb-smartplayer>
    </div>
  );
};

export default VturbPlayer;