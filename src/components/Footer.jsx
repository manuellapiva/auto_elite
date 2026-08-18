import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-neutral-800 bg-neutral-900 px-5 py-10"
    >
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <b className="tracking-widest text-white">
            <span className="bg-red-600 px-1 text-white">AE</span> AUTO
            <span className="text-red-600"> ELITE</span>
          </b>
          <p className="mt-4 text-xs text-neutral-500">
            Selecionando os melhores automóveis do mundo desde 2005.
          </p>
          <div className="mt-5 flex gap-3 text-neutral-500">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-red-600"
            >
              <FiInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-red-600"
            >
              <FiTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-red-600"
            >
              <FiFacebook />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-red-600">
            NAVEGAÇÃO
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-xs text-neutral-500">
            <Link
              to="/"
              className="transition hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className="transition hover:text-white"
            >
              Sobre
            </Link>
            <Link
              to="/produtos"
              className="transition hover:text-white"
            >
              Veículos
            </Link>
            <Link
              to="/contato"
              className="transition hover:text-white"
            >
              Contato
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-red-600">
            SERVIÇOS
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-xs text-neutral-500">
            <Link
              to="/produtos"
              className="transition hover:text-white"
            >
              Veículos Novos
            </Link>
            <Link
              to="/produtos"
              className="transition hover:text-white"
            >
              Seminovos
            </Link>
            <Link
              to="/contato"
              className="transition hover:text-white"
            >
              Financiamento
            </Link>
            <Link
              to="/contato"
              className="transition hover:text-white"
            >
              Manutenção
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-red-600">
            CONTATO
          </h3>
          <div className="mt-4 space-y-3 text-xs text-neutral-500">
            <p>Avenida das Palmeiras, 1250, Vinhedo, SP</p>
            <a
              href="tel:+19005551234"
              className="block transition hover:text-white"
            >
              +19 (00) 555-1234
            </a>
            <a
              href="mailto:info@autoelite.com"
              className="block transition hover:text-white"
            >
              info@autoelite.com
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-neutral-800 pt-5 text-xs text-neutral-600">
        © 2026 Auto Elite. Todos os direitos reservados.
      </p>
    </footer>
  );
}