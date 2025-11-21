"use client";

import React, { useState, useEffect } from 'react';

const HotmartUpsellButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Define o tempo para 7 minutos e 10 segundos em milissegundos
    const showButtonDelay = (7 * 60 + 10) * 1000;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, showButtonDelay);

    // Limpa o temporizador se o componente for desmontado
    return () => clearTimeout(timer);
  }, []); // O array vazio garante que este efeito rode apenas uma vez

  useEffect(() => {
    if (isVisible) {
      // Carrega o script principal da Hotmart
      const script = document.createElement('script');
      script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
      script.async = true;
      
      // Quando o script carregar, inicializa o widget
      script.onload = () => {
        if ((window as any).checkoutElements) {
          (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        }
      };

      document.body.appendChild(script);

      // Função de limpeza para remover o script quando o componente for desmontado
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isVisible]); // Este efeito depende da visibilidade do botão

  if (!isVisible) {
    return null; // Não renderiza nada até o tempo ser atingido
  }

  // O script da Hotmart irá montar o botão dentro desta div
  return (
    <div id="hotmart-sales-funnel" className="transition-opacity duration-500 opacity-100"></div>
  );
};

export default HotmartUpsellButton;