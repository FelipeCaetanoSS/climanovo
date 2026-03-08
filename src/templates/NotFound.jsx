import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-slate-800">404</h1>
      <p className="text-xl text-slate-600 mt-4">Ops! Essa página não existe.</p>
      
      <Link 
        to="/" 
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Voltar para o Início
      </Link>
    </div>
  );
}

export default NotFound;