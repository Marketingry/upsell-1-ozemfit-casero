import { AlertTriangle, Shield } from 'lucide-react';
import VturbPlayer from '@/components/VturbPlayer';
import HotmartUpsellButton from '@/components/HotmartUpsellButton';

const UpsellPage = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans flex justify-center">
      <main className="w-full max-w-[500px] mx-auto">
        {/* 1. BARRA DE ALERTA (TOPO) */}
        <div className="bg-[#D32F2F] text-white font-bold uppercase text-sm text-center py-2 flex items-center justify-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
          <span>AVISO IMPORTANTE</span>
        </div>

        <div className="p-4">
          {/* 2. BOX DA HEADLINE */}
          <div className="bg-white border-2 border-[#FF9800] rounded-lg shadow-lg shadow-orange-200/50 p-6 text-center">
            <h1 className="text-2xl font-extrabold text-[#333333]">
              ASSISTA O VÍDEO OU VOCÊ PODE NÃO TER RESULTADOS
            </h1>
            <p className="text-[#EF6C00] mt-2">
              No final você receberá um Presente Exclusivo
            </p>
          </div>

          {/* 3. VÍDEO DE VENDAS */}
          <div className="mt-6">
            <VturbPlayer />
          </div>

          {/* 4. BOTÃO DE CTA */}
          <div className="mt-[25px]">
            <HotmartUpsellButton />
          </div>

          {/* 5. SEÇÃO DE GARANTIA */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#4CAF50] text-white font-bold p-3 flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              <span>GARANTIA INCONDICIONAL</span>
            </div>
            <div className="bg-white p-6 text-center text-gray-700">
              <p>
                Nós acreditamos tanto no nosso Protocolo que oferecemos <span className="font-bold text-[#4CAF50]">7 DIAS DE GARANTIA INCONDICIONAL</span>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UpsellPage;