import React from "react";
// CORREÇÃO AQUI: Importando de "tabsux" em vez de "tabs"
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
                 <span
