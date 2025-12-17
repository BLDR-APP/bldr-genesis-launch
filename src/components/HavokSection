import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { BrainCircuit, LineChart, ShieldCheck, Zap } from "lucide-react";

const content = [
  {
    title: "Inteligência Real, Resultados Reais",
    description:
      "O HAVOK não apenas gera treinos aleatórios. Ele analisa seu histórico, nível de energia, sono e recuperação para criar a sessão perfeita para o seu dia.",
    content: (
      <div className="h-full w-full bg-zinc-900 flex items-center justify-center">
         <div className="relative">
            <div className="absolute inset-0 bg-[#FFD700] blur-[100px] opacity-20 rounded-full"></div>
            <BrainCircuit className="h-32 w-32 text-[#FFD700] relative z-10" />
         </div>
      </div>
    ),
  },
  {
    title: "Sobrecarga Progressiva Automática",
    description:
      "Esqueça o caderno de anotações. O HAVOK gerencia suas cargas e repetições, garantindo que você esteja sempre evoluindo e evitando o efeito platô.",
    content: (
      <div className="h-full w-full bg-zinc-900 flex items-center justify-center">
        <LineChart className="h-32 w-32 text-white" />
      </div>
    ),
  },
  {
    title: "Adaptação em Tempo Real",
    description:
      "O treino está muito pesado? Ou leve demais? O HAVOK ajusta o volume e a intensidade durante a execução, baseado no seu feedback imediato.",
    content: (
      <div className="h-full w-full bg-zinc-900 flex items-center justify-center">
        <Zap className="h-32 w-32 text-[#FFD700]" />
      </div>
    ),
  },
  {
    title: "Prevenção de Lesões",
    description:
      "Segurança em primeiro lugar. O sistema identifica padrões perigosos e sugere mobilidade ou ajustes de execução para manter você treinando por mais tempo.",
    content: (
      <div className="h-full w-full bg-zinc-900 flex items-center justify-center">
        <ShieldCheck className="h-32 w-32 text-white" />
      </div>
    ),
  },
];

export function HavokSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
        {/* Efeito de luz de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 relative z-10">
                <div className="inline-block mb-4 px-3 py-1 bg-[#FFD700]/10 rounded-full border border-[#FFD700]/20">
                    <span className="text-[#FFD700] text-xs font-bold tracking-widest uppercase">Powered by AI</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Conheça o <span className="text-[#FFD700]">HAVOK</span>
                </h2>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                    A primeira inteligência artificial focada exclusivamente na sua performance física. Mais que um algoritmo, seu novo treinador.
                </p>
            </div>
            
            <StickyScroll content={content} />
        </div>
    </section>
  );
}
