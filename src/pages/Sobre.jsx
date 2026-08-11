import { FiArrowRight, FiCheckCircle, FiTarget, FiEye, FiZap } from "react-icons/fi";
import car from '../assets/car-404.avif'
import ayla from '../assets/ayla.png'
import manu from '../assets/manu.png'
import mavi from '../assets/mavi.png'
import gustavo from '../assets/gu.png'
import gabi from '../assets/gabi.png'

const values = [
  {
    number: "01",
    title: "Integridade",
    text: "Trabalhamos com transparência em cada etapa. Honestidade e confiança fazem parte de tudo o que fazemos.",
  },
  {
    number: "02",
    title: "Excelência",
    text: "Cada veículo, cada interação e cada detalhe são pensados para oferecer uma experiência acima do padrão.",
  },
  {
    number: "03",
    title: "Inovação",
    text: "Buscamos novas tecnologias e soluções para tornar a experiência de compra cada vez mais simples e moderna.",
  },
  {
    number: "04",
    title: "Paixão",
    text: "Somos apaixonados por automóveis e transformamos essa paixão em uma experiência especial para nossos clientes.",
  },
];

const team = [
  {
    name: "Manuella da Silva Piva",
    role: "Presidente e Criadora da Auto Elite",
    period: "2012 - Hoje",
    image: manu,
  },
  {
    name: "Ayla Cristina da Silva Vilela",
    role: "CEO da Auto Elite",
    period: "2014 - Hoje",
    image: ayla,
  },
  {
    name: "Maria Vitória Guedes Ferreira",
    role: "COO da Auto Elite",
    period: "2016 - Hoje",
    image: mavi,
  },
  {
    name: "Gabriella Camacho Stavarengo",
    role: "CFO da Auto Elite",
    period: "2017 - Hoje",
    image: gabi,
  },
  {
    name: "Gustavo Millamonte",
    role: "CTO da Auto Elite",
    period: "2022 - Hoje",
    image: gustavo,
  },
];

export default function Sobre() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden border-l-4 border-red-600">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/about-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center px-6 py-20 md:px-10 lg:min-h-[420px] lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-red-600">
              Sobre nós
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl lg:text-7xl">
              Sobre a
              <br />
              <span className="text-white">Auto Elite</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
              Nascemos da paixão por automóveis extraordinários e do
              compromisso de oferecer uma experiência igualmente extraordinária.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-28">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-red-600">
              Nossa história
            </p>
            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl">
              Duas décadas
              <br />
              de distinção
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-7 text-gray-400">
              <p>
                Em 2005, a Auto Elite nasceu com uma ideia simples:
                transformar a maneira como as pessoas encontram e compram
                automóveis.
              </p>
              <p>
                Começamos com uma pequena seleção de veículos cuidadosamente
                escolhidos e, ao longo dos anos, construímos uma reputação
                baseada em confiança, qualidade e atendimento personalizado.
              </p>
              <p>
                Hoje, nossa coleção reúne veículos de diferentes categorias,
                sempre selecionados de acordo com nossos padrões de qualidade.
                Nossa missão continua a mesma: oferecer uma experiência
                excepcional do primeiro contato ao pós-venda.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/produtos"
                className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:text-red-600"
              >
                Conheça nossos veículos
                <FiArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <img
                src={car}
                alt="Veículo esportivo da Auto Elite"
                className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[450px]"
              />
            </div>

            <div className="absolute -bottom-5 left-5 bg-red-600 px-6 py-5 md:left-8">
              <p className="text-2xl font-black md:text-3xl">
                2.400+
              </p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/80">
                Veículos entregues
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-4 md:grid-cols-3">

            <div className="border border-[#1f1f1f] bg-[#101010] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-600">
              <FiTarget className="mb-7 text-2xl text-red-600" />
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-red-600">
                Missão
              </p>
              <h3 className="text-xl font-black uppercase">
                Nossa missão
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-500">
                Oferecer uma experiência automotiva excepcional, combinando
                veículos de alta qualidade com atendimento personalizado e
                transparente.
              </p>
            </div>

            <div className="border border-[#1f1f1f] bg-[#101010] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-600">
              <FiEye className="mb-7 text-2xl text-red-600" />
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-red-600">
                Visão
              </p>
              <h3 className="text-xl font-black uppercase">
                Nossa visão
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-500">
                Ser reconhecida como referência em excelência, confiança e
                inovação no mercado automotivo premium.
              </p>
            </div>

            <div className="border border-[#1f1f1f] bg-[#101010] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-600">
              <FiZap className="mb-7 text-2xl text-red-600" />
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-red-600">
                Propósito
              </p>
              <h3 className="text-xl font-black uppercase">
                Nosso propósito
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-500">
                Tornar a escolha de um automóvel uma experiência memorável,
                aproximando pessoas de veículos que combinam com seu estilo.
              </p>
            </div>
          </div>

          <div className="mt-24 text-center">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-red-600">
              Nossos valores
            </p>
            <h2 className="text-4xl font-black uppercase md:text-5xl">
              O que defendemos
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.number}
                className="group relative border border-[#1f1f1f] bg-[#101010] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-600"
              >
                <div className="flex items-start justify-between">
                  <FiCheckCircle className="text-lg text-gray-600 transition-colors duration-300 group-hover:text-red-600" />
                  <span className="text-2xl font-black text-[#222]">
                    {value.number}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-black uppercase">
                  {value.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-gray-500">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1b1b1b]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-red-600">
              As pessoas por trás da marca
            </p>
            <h2 className="text-4xl font-black uppercase md:text-5xl">
              Conheça nossa equipe
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500">
              Profissionais apaixonados por automóveis e dedicados a oferecer
              uma experiência excepcional para cada cliente.
            </p>
          </div>

        <div className="flex flex-wrap justify-center gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group w-full overflow-hidden border border-[#292929] bg-[#101010] transition-all duration-300 hover:border-red-600 sm:w-[calc(50%-0.5rem)] lg:w-[calc(20%-1rem)]"
              >

                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-red-600">
                    {member.role}
                  </p>
                  <h3 className="mt-2 text-lg font-black uppercase">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-gray-500">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}