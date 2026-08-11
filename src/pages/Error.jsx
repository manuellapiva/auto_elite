import { FiHome, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="relative min-h-[calc(100vh-60px)] overflow-hidden bg-[#050505] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-[#050505]" />
      <div className="relative z-10 flex min-h-[calc(100vh-60px)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-4xl text-center">
          <div className="mb-10 flex justify-center">
            <span className="bg-red-600 px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em]">
              Erro 404
            </span>
          </div>

          <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[110px]">
            <span className="block text-white">
              Perdido na
            </span>
            <span className="block">
              <span className="text-white">
                estrada
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
            A página que você está procurando pegou um caminho errado.
            Vamos levar você de volta para o showroom.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Link
              to="/"
              className="group flex min-w-[200px] items-center justify-center gap-3 bg-red-600 px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-red-700 hover:-translate-y-1"
            >
              <FiHome size={16} />
              Voltar para Home
            </Link>

            <Link
              to="/produtos"
              className="group flex min-w-[200px] items-center justify-center gap-3 border border-white/20 bg-black/20 px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:-translate-y-1"
            >
              Ver veículos

              <FiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mx-auto mt-12 max-w-xl border-t border-white/10" />
          <div className="mt-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Navegação rápida
            </p>
            <div className="mt-4 flex items-center justify-center gap-6">
              <Link
                to="/sobre"
                className="text-xs font-medium text-gray-500 transition-colors duration-300 hover:text-red-500"
              >
                Sobre
              </Link>
              <Link
                to="/contato"
                className="text-xs font-medium text-gray-500 transition-colors duration-300 hover:text-red-500"
              >
                Contato
              </Link>
              <Link
                to="/faq"
                className="text-xs font-medium text-gray-500 transition-colors duration-300 hover:text-red-500"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}