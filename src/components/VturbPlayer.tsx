"use client";

import React, { useEffect } from 'react';

const VturbPlayer: React.FC = () => {
  useEffect(() => {
    const scriptId = 'vturb-script';
    // Evita adicionar o script múltiplas vezes
    if (document.getElementById(scriptId)) {
      // Se o script já existe, removemos para adicionar o novo
      const oldScript = document.getElementById(scriptId);
      if (oldScript) {
        document.head.removeChild(oldScript);
      }
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://scripts.converteai.net/847b6926-da65-426c-8bfe-3803276ed584/players/692eb9cee659a90b1da210de/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Limpa o script quando o componente é desmontado
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        // A verificação aqui é importante para evitar erros se o script for removido por outros meios
        try {
          document.head.removeChild(existingScript);
        } catch (e) {
          console.warn("Falha ao remover o script do Vturb.", e);
        }
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <vturb-smartplayer id="vid-692eb9cee659a90b1da210de" style={{ display: 'block', margin: '0 auto', width: '100%' }}></vturb-smartplayer>
    </div>
  );
};

export default VturbPlayer;