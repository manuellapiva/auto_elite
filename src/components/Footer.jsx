import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

export default function Footer(){
    return (
        <>
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
              <FiInstagram />
              <FiTwitter />
              <FiFacebook />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-red-600">NAVEGAÇÃO</h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-neutral-500">
              <a href="/">Home</a>
              <a href="/sobre">Sobre</a>
              <a href="/produtos">Veículos</a>
              <a href="/contato">Contato</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-red-600">SERVIÇOS</h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-neutral-500">
              <span>Veículos Novos</span>
              <span>Seminovos</span>
              <span>Financiamento</span>
              <span>Manutenção</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-red-600">CONTATO</h3>

            <div className="mt-4 space-y-3 text-xs text-neutral-500">
              <p>67 Barra Funda, São Paulo</p>
              <p>+19 (00) 555-1234</p>
              <p>info@autoelite.com</p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-6xl border-t border-neutral-800 pt-5 text-xs text-neutral-600">
          © 2026 Auto Elite. Todos os direitos reservados.
        </p>
      </footer>
        </>
    )
}