import {
  FiArrowRight,
  FiShield,
  FiTrendingUp,
  FiHeadphones,
  FiFileText,
  FiAward,
  FiBatteryCharging,
} from "react-icons/fi";

function App() {

  return (
    <div className="min-h-screen bg-black text-white">
      <section
        id="home"
        className="relative flex min-h-screen items-center bg-cover bg-center pt-14"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative mx-auto w-full max-w-6xl px-5">
          <div className="ml-auto max-w-lg">
            <p className="text-xs font-bold tracking-widest text-red-600">
              CONCESSIONÁRIA DE VEÍCULOS PREMIUM
            </p>

            <h1 className="mt-5 text-6xl font-black leading-none sm:text-7xl">
              DIRIJA
              <span className="block text-red-600">ALÉM DO</span>
              LIMITE
            </h1>

            <p className="mt-6 text-sm leading-relaxed text-neutral-300">
             Os automóveis mais exclusivos do mundo, criteriosamente selecionados para aqueles que exigem nada menos que a perfeição.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="/produtos"
                className="bg-red-600 px-5 py-3 text-xs font-bold hover:bg-red-700"
              >
                EXPLORE O INVENTÁRIO <FiArrowRight className="inline" />
              </a>

              <a
                href="/sobre"
                className="border border-neutral-500 px-5 py-3 text-xs font-bold hover:border-red-600"
              >
                NOSSA HISTÓRIA
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 grid w-full grid-cols-2 border-t border-neutral-700 bg-black/70 md:grid-cols-4">
          <div className="border-r border-neutral-700 p-4 text-center">
            <b>2,400+</b>
            <p className="text-xs text-neutral-500">VEÍCULOS VENDIDOS</p>
          </div>

          <div className="border-r border-neutral-700 p-4 text-center">
            <b>7</b>
            <p className="text-xs text-neutral-500">ANOS DE EXCELÊNCIA</p>
          </div>

          <div className="border-r border-neutral-700 p-4 text-center">
            <b>98%</b>
            <p className="text-xs text-neutral-500">CLIENTES SATISFEITOS</p>
          </div>

          <div className="p-4 text-center">
            <b>50+</b>
            <p className="text-xs text-neutral-500">MARCAS PREMIUM</p>
          </div>
        </div>
      </section>

      <section id="vehicles" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold tracking-widest text-red-600">
            SELEÇÃO ESCOLHIDA A DEDO
          </p>

          <h2 className="mt-2 text-4xl font-black">VEÍCULOS EM DESTQUE</h2>

          <p className="mt-4 text-sm text-neutral-500">
            Nossos consultores selecionaram estes automóveis excepcionais.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* CARD 1 */}
            <div className="border border-neutral-800 bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80"
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <p className="text-xs font-bold text-red-600">RANGE ROVER</p>
                <h3 className="mt-2 font-bold">2024 Continental GT Speed</h3>
                <p className="mt-4 text-xs text-neutral-500">
                  1,200 mi • DCT • Gasolina
                </p>

                <div className="mt-5 flex justify-between">
                  <b className="text-red-600">$289,000</b>
                  <button className="border border-neutral-700 px-3 py-2 text-xs">
                    DETALHES
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="border border-neutral-800 bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80"
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <p className="text-xs font-bold text-red-600">PORSCHE</p>
                <h3 className="mt-2 font-bold">2023 911 Turbo S</h3>
                <p className="mt-4 text-xs text-neutral-500">
                  4,800 mi • DCT • Gasolina
                </p>

                <div className="mt-5 flex justify-between">
                  <b className="text-red-600">$224,900</b>
                  <button className="border border-neutral-700 px-3 py-2 text-xs">
                    DETALHES
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="border border-neutral-800 bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80"
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <p className="text-xs font-bold text-red-600">TESLA</p>
                <h3 className="mt-2 font-bold">2024 Model S Plaid</h3>
                <p className="mt-4 text-xs text-neutral-500">
                  2,100 mi • Automático • Elétrico
                </p>

                <div className="mt-5 flex justify-between">
                  <b className="text-red-600">$109,990</b>
                  <button className="border border-neutral-700 px-3 py-2 text-xs">
                    DETALHES
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="border border-neutral-800 bg-neutral-950">
              <img
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80"
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <p className="text-xs font-bold text-red-600">MERCEDES-BENZ</p>
                <h3 className="mt-2 font-bold">2024 AMG GT 63 S</h3>
                <p className="mt-4 text-xs text-neutral-500">
                  890 mi • Automático • Gasolina
                </p>

                <div className="mt-5 flex justify-between">
                  <b className="text-red-600">$184,500</b>
                  <button className="border border-neutral-700 px-3 py-2 text-xs">
                    DETALHES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-neutral-900 px-5 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold tracking-widest text-red-600">
            PORQUE A AUTO ELITE
          </p>

          <h2 className="mt-3 text-4xl font-black">O DIFERENCIAL DA ELITE</h2>

          <p className="mt-4 text-sm text-neutral-500">
Seis razões pelas quais os compradores mais exigentes confiam em nós.          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-950 p-6 text-left">
              <FiShield className="text-2xl text-red-600" />
              <h3 className="mt-5 font-bold">CERTIFICADO DE QUALIDADE</h3>
              <p className="mt-3 text-xs text-neutral-500">
                Todos os veículos passam por mais de 200 ontos de inspeção
              </p>
            </div>

            <div className="border border-red-600 bg-red-600 p-6 text-left">
              <FiAward className="text-2xl" />
              <h3 className="mt-5 font-bold">SELEÇÃO FINA</h3>
              <p className="mt-3 text-xs">
                Uma seleção criteriosa dos melhores automóveis do mundo.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6 text-left">
              <FiTrendingUp className="text-2xl text-red-600" />
              <h3 className="mt-5 font-bold">PREÇO TRANPARENTE</h3>
              <p className="mt-3 text-xs text-neutral-500">
               Sem taxas ocultas. Sem pressão.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6 text-left">
              <FiHeadphones className="text-2xl text-red-600" />
              <h3 className="mt-5 font-bold">SERVIÇO DE ALTO PADRÃO</h3>
              <p className="mt-3 text-xs text-neutral-500">
Consultores dedicados disponíveis todos os dias.              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6 text-left">
              <FiFileText className="text-2xl text-red-600" />
              <h3 className="mt-5 font-bold">GARANTIA TOTAL</h3>
              <p className="mt-3 text-xs text-neutral-500">
                Veículos certificados incluem garantia estendida.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6 text-left">
              <FiAward className="text-2xl text-red-600" />
              <h3 className="mt-5 font-bold">ASSINATURA ELITE</h3>
              <p className="mt-3 text-xs text-neutral-500">
                Benefícios exclusivos para clientes que voltam a comprar
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-black lg:grid-cols-2">
        <div
          className="min-h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80')",
          }}
        />

        <div className="p-8 sm:p-12">
          <p className="text-xs font-bold tracking-widest text-red-600">
            NOSSA FILOSOFIA
          </p>

          <h2 className="mt-4 text-4xl font-black">
            MAIS QUE UMA CONCESSIONÁRIA
            <span className="block text-red-600">UM ESTILO DE VIDA.</span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-neutral-400">
         Na Auto Elite, adquirir um automóvel excepcional é uma experiência profunda,
            guiada pela expertise, pela confiança e pelo compromisso.
          </p>

          <a
            href="/sobre"
            className="mt-6 inline-block bg-red-600 px-5 py-3 text-xs font-bold hover:bg-red-700"
          >
            NOSSA HISTÓRIA <FiArrowRight className="inline" />
          </a>
        </div>
      </section>

      <section className="bg-red-600 px-5 py-7">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <FiBatteryCharging size={30} />

            <div>
              <p className="text-xs font-bold">JÁ DISPONÍVEIS</p>
              <h3 className="text-sm font-black sm:text-base">VEÍCULOS DE LUXO ELÉTRICOS E HÍBRIDOS</h3>
            </div>
          </div>

          <a
            href="#vehicles"
            className="hidden bg-white px-5 py-3 text-xs font-bold text-red-600 sm:block"
          >
            EXPLORE A LINHA DE VEÍCULOS ELÉTRICOS
          </a>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 text-center">
        <p className="text-xs font-bold tracking-widest text-red-600">
          COMECE A SUA JORNADA

        </p>

        <h2 className="mt-4 text-5xl font-black">
          O CARRO DOS SEUS SONHOS 
          <span className="block text-red-600">ESPERA POR VOCÊ</span>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm text-neutral-500">
Agende uma consultoria exclusiva com nossos especialistas.
        </p>

        <a
          href="/contato"
          className="mt-7 inline-block bg-red-600 px-5 py-3 text-xs font-bold hover:bg-red-700"
        >
       AGENDE UMA CONSULTORIA

        </a>
      </section>


    </div>
  );
}

export default App;
