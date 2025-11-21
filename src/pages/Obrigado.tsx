import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ObrigadoPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <main className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
          Compra Aprovada!
        </h1>
        <p className="text-gray-600 mb-8">
          Obrigado por sua confiança. Você receberá um e-mail em breve com todos os detalhes da sua compra e as instruções de acesso.
        </p>
        <Link to="/">
          <Button size="lg" className="w-full">
            Voltar para o Início
          </Button>
        </Link>
      </main>
    </div>
  );
};

export default ObrigadoPage;