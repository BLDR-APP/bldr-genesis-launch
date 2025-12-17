import React from "react";
import { Tabs } from "@/components/ui/tabsux"; 
import { BrainCircuit, Activity, ShieldCheck } from "lucide-react";

export function HavokSection() {
  const tabs = [
    {
      title: "Cérebro (IA)",
      value: "brain",
      content: (
        <div className="w-full overflow-hidden relative h-[450px] md:h-[500px] rounded-2xl p-6 md:p-10 text-white bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BrainCircuit className="w-64 h-64 text-[#FFD700]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Análise em Tempo Real</h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-md">
            O HAVOK processa milhares de dados do seu histórico para decidir o peso exato de hoje. Não é "chute", é matemática aplicada à fisiologia.
          </p>
          
          {/* SIMULAÇÃO DE CHAT */}
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-zinc-800 max-w-sm mx-auto md:mx-0 shadow-lg relative z-20">
             <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-zinc-700 flex-shrink-0" />
                <div className="bg-zinc-800 rounded-lg rounded-tl-none p-3 text-sm text-zinc-300">
                    Dormi mal essa noite, HAVOK. Tô com pouca energia.
                </div>
             </div>
             <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="w-5 h-5 text-black" />
                </div>
                <div className="bg-[#FFD700]/20 border border-[#FFD700]/30 rounded-lg rounded-tr-none p-3 text-sm text-[#FFD700]">
                    Entendido. Reduzi o volume do treino de hoje em 20% e aumentei o descanso entre séries. Foco na técnica!
                </div>
             </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sobrecarga",
      value: "overload",
      content: (
        <div className="w-full overflow-hidden relative h-[450px] md:h-[500px] rounded-2xl p-6 md:p-10 text-white bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl">
           <div className="absolute top-0 right-0 p-4 opacity-10">
            <Activity className="w-64 h-64 text-[#FFD700]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Progressão Automática</h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-md">
            Esqueça o caderno. O HAVOK gerencia suas cargas e repetições para garantir que você esteja sempre evoluindo (Progressive Overload).
          </p>
           <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-zinc-800 max-w-sm mx-auto md:mx-0 font-mono shadow-lg relative z-20">
              <div className="flex justify-between items-center mb-2 border-b border-zinc-800 pb-2">
                 <span className="text-zinc-400">Supino Reto</span>
                 <span className="text-[#FFD700] font-bold text-xs uppercase bg-[#FFD700]/10 px-2 py-0.5 rounded">Aumentar Carga</span>
              </div>
              <div className="flex justify-between items-center text-sm mb-2">
                 <span className="text-zinc-500">Semana Passada</span>
                 <span>20kg (10 reps)</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                 <span className="text-[#FFD700]">Hoje (Meta)</span>
                 <span className="text-white">22kg (8-10 reps)</span>
              </div>
          </div>
        </div>
      ),
    },
    {
      title: "Segurança",
      value: "safety",
      content: (
        <div className="w-full overflow-hidden relative h-[450px] md:h-[500px] rounded-2xl p-6 md:p-10 text-white bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl">
           <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheck className="w-64 h-64 text-[#FFD700]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Prevenção de Lesões</h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-md">
             Monitoramos seu volume total para evitar overtraining e sugerimos substituições biomecânicas se sentir dores articulares.
          </p>
          <div className="bg-red-950/30 backdrop-blur-md rounded-xl p-4 border border-red-500/30 max-w-sm mx-auto md:mx-0 flex gap-4 items-center shadow-lg relative z-20">
             <div className="bg-red-500/20 p-2 rounded-full">
                <ShieldCheck className="w-6 h-6 text-red-500" />
             </div>
             <div>
                <p className="text-red-400 font-bold text-sm">Alerta de Fadiga</p>
                <p className="text-zinc-300 text-xs mt-0.5">Volume semanal de ombros excedeu o limite seguro. Sugerimos descanso ativo.</p>
             </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-20 md:py-32 bg-black relative overflow-hidden">
       {/* LUZ DE FUNDO */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-start md:items-center gap-12">
            
            {/* LADO ESQUERDO: TEXTO INTRODUTÓRIO */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
                 <div className="inline-block mb-4 px-3 py-1 bg-[#FFD700]/10 rounded-full border border-[#FFD700]/20">
                    <span className="text-[#FFD700] text-xs font-bold tracking-widest uppercase">Powered by AI</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Conheça o <span className="text-[#FFD700]">HAVOK</span>
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                    Mais que um algoritmo. Seu novo treinador pessoal, nutricionista e fisiologista. Tudo em um só lugar, aprendendo com você a cada repetição.
                </p>
            </div>

            {/* LADO DIREITO: ABAS INTERATIVAS */}
            <div className="w-full md:w-2/3 h-[500px] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto items-start justify-start">
                <Tabs tabs={tabs} />
            </div>
       </div>
    </div>
  );
}
