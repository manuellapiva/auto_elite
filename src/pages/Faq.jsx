import { useState } from "react";
import { FiPlus, FiMinus, FiArrowRight, FiMessageCircle } from "react-icons/fi";

const categories = [ "Estoque", "Financiamento", "Processo", "Pós-venda" ];

const questions = [
  {
    id: 1,
    category: "Estoque",
    question: "Quais tipos de veículos a Auto Elite oferece?",
    answer:
      "A Auto Elite oferece uma seleção cuidadosamente escolhida de veículos novos e seminovos, incluindo sedãs, SUVs, carros esportivos e modelos de luxo.",
  },
  {
    id: 2,
    category: "Estoque",
    question: "Todos os veículos seminovos passam por inspeção antes da venda?",
    answer:
      "Sim. Todos os nossos veículos seminovos passam por uma inspeção detalhada antes de serem disponibilizados para venda, garantindo qualidade e segurança aos nossos clientes.",
  },
  {
    id: 3,
    category: "Financiamento",
    question: "A Auto Elite oferece financiamento para a compra de veículos?",
    answer:
      "Sim. A Auto Elite oferece opções de financiamento para tornar a compra do seu veículo mais prática e acessível. Consulte nossa equipe para conhecer as condições disponíveis.",
  },
  {
    id: 4,
    category: "Financiamento",
    question: "Posso dar meu veículo atual como parte do pagamento?",
    answer:
      "Sim. Você pode trazer seu veículo atual para uma avaliação e utilizar o valor como parte do pagamento na compra do seu próximo carro.",
  },
  {
    id: 5,
    category: "Processo",
    question: "A Auto Elite oferece entrega para outras cidades?",
    answer:
      "Sim. Podemos organizar a entrega de veículos para diferentes regiões. Entre em contato com nossa equipe para consultar a disponibilidade e as condições de entrega.",
  },
  {
    id: 6,
    category: "Processo",
    question: "Posso agendar um test drive antes de comprar?",
    answer:
      "Com certeza! Entre em contato com nossa equipe para agendar um test drive em uma data e horário que sejam convenientes para você.",
  },
  {
    id: 7,
    category: "Pós-venda",
    question: "Qual garantia está inclusa na compra do veículo?",
    answer:
      "A cobertura da garantia pode variar de acordo com o veículo e suas condições específicas. Nossa equipe explicará todos os detalhes da garantia antes da conclusão da compra.",
  },
  {
    id: 8,
    category: "Pós-venda",
    question: "Existe política de devolução caso eu mude de ideia após a compra?",
    answer:
      "As condições de devolução podem variar de acordo com o veículo e o contrato de compra. Nossa equipe poderá informar todas as condições aplicáveis antes da finalização da compra.",
  },
];

export default function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Estoque");

  const filteredQuestions = questions.filter(
    (question) => question.category === selectedCategory
  );

  function toggleQuestion(id) {
    setOpenQuestion(openQuestion === id ? null : id);
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative border-l-4 border-red-600 bg-[#1b1b1b]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Perguntas Frequentes
            </p>
            <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl">
              Temos as respostas
            </h1>
            <p className="mt-4 text-sm text-gray-400 md:text-base">
              Tudo o que você precisa saber sobre a experiência Auto Elite.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[300px_1fr] lg:px-12 lg:py-24">
          <aside>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Categorias
            </p>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenQuestion(null);
                  }}
                  className={`group flex w-full items-center justify-between border px-4 py-4 text-left text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-[#262626] bg-transparent text-gray-300 hover:border-red-600 hover:text-white"
                  }`}
                >
                  <span>{category}</span>
                  <FiArrowRight
                    className={`transition-transform duration-300 ${
                      selectedCategory === category
                        ? "translate-x-1"
                        : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                    }`}
                  />
                </button>
              ))}
            </div>
            <div className="mt-8 bg-red-600 p-6">
              <FiMessageCircle className="mb-5 text-2xl" />
              <h2 className="text-xl font-black uppercase">
                Ainda tem dúvidas?
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/90">
                Nossa equipe está disponível para responder suas dúvidas e
                ajudar você a encontrar o veículo ideal.
              </p>
              <button
                className="mt-5 inline-flex items-center gap-3 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-red-600 transition-all duration-300 hover:bg-black hover:text-white"
              >
                Entre em contato
                <FiArrowRight />
              </button>
            </div>
          </aside>
          <div>
            <div className="border-t border-[#262626]">
              {filteredQuestions.map((item) => {
                const isOpen = openQuestion === item.id;
                return (
                  <div
                    key={item.id}
                    className="border-b border-[#262626]"
                  >
                    <button
                      onClick={() => toggleQuestion(item.id)}
                      className="flex w-full items-center gap-4 py-6 text-left transition-colors duration-300 hover:text-red-500"
                    >
                      <span className="min-w-[24px] text-[10px] font-bold text-red-600">
                        {String(item.id).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-sm font-bold md:text-base">
                        {item.question}
                      </span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center text-red-600">
                        {isOpen ? <FiMinus /> : <FiPlus />}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pl-10 pr-8 text-sm leading-7 text-gray-400">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}