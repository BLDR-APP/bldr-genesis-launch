import React from "react";
import { Tabs } from "@/components/ui/tabsux"; 
import { BrainCircuit, Dumbbell, Utensils, Sparkles, ChefHat, Activity, ShieldCheck } from "lucide-react";

export function HavokSection() {
  const tabs = [
    // =========================================================================
    // FUNCIONALIDADES ATUAIS (ATIVAS NO SITE)
    // =========================================================================
    {
      title: "Treinador IA",
      value: "workouts",
      content: (
        <div className="w-full overflow-hidden relative h-[450px] md:h-[500px] rounded-2xl p-6 md:p-10 text-white bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Dumbbell className="w-64 h-64 text-[#FFD700]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Gerador de Treinos</h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-md">
            O HAVOK monta sua ficha completa baseada no seu perfil (Onboarding) ou cria treinos avulsos instantâneos quando você quer variar.
          </p>
          
          {/* VISUAL: Cards de Treino */}
          <div className="flex flex-col gap-3 relative z-20 max-w-sm mx-auto md:mx-0">
             {/* Card 1: Ficha Fixa */}
             <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-xl flex justify-between items-center shadow-lg">
                <div className="flex gap-3 items-center">
                    <div className="bg-[#FFD700]/20 p-2 rounded-lg text-[#FFD700]">
                        <BrainCircuit className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-bold text-sm text-white">Ficha A: Hipertrofia</p>
                        <p className="text-xs text-zinc-500">Baseado no seu perfil</p>
                    </div>
                </div>
                <span className="text-xs bg-[#FFD700] text-black px-2 py-1 rounded font-bold">Ativo</span>
             </div>

             {/* Card 2: Pedido Livre */}
             <div className="bg-zinc-800/50 border border-zinc-700/50 p-4 rounded-xl shadow-lg backdrop-blur-sm">
                <p className="text-xs text-zinc-400 mb-2">Solicitação Livre:</p>
                <div className="flex gap-2 items-center mb-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-sm italic text-white">"Gere um treino rápido de Ombros, 30 min"</p>
                </div>
                <div className="bg-black/40 p-3 rounded border border-zinc-800">
                    <p className="text-[#FFD700] text-xs font-bold mb-1">HAVOK Sugere:</p>
                    <ul className="text-xs text-zinc-300 list-disc pl-4 space-y-1">
                        <li>Desenvolvimento Halter (4x12)</li>
                        <li>Elevação Lateral (3x15)</li>
                        <li>Face Pull (3x15)</li>
                    </ul>
                </div>
             </div>
          </div>
        </div>
      ),
    },
    {
      title: "Nutrição",
      value: "nutrition",
      content: (
        <div className="w-full overflow-hidden relative h-[450px] md:h-[500px] rounded-2xl p-6 md:p-10 text-white bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl">
           <div className="absolute top-0 right-0 p-4 opacity-10">
            <Utensils className="w-64 h-64 text-[#FFD700]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Chef Inteligente</h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-md">
            Não sabe o que comer? Peça receitas com os ingredientes que você tem em casa ou solicite refeições específicas para Pós-Treino, Almoço ou Jantar.
          </p>
           
           {/* VISUAL: Receita */}
           <div className="bg-zinc-900/90 backdrop-blur-md rounded-xl p-5 border border-zinc-800 max-w-sm mx-auto md:mx-0 shadow-lg relative z-20">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-zinc-800">
                  <div className="bg-green-500/10 p-2 rounded-full text-green-500">
                     <ChefHat className="w-6 h-6" />
                  </div>
                  <div>
                      <p className="text-xs text-zinc-400">Ingredientes: Ovos + Aveia</p>
                      <p className="text-white font-bold">Panqueca Protéica</p>
                  </div>
              </div>
              
              <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                      <span className="text-zinc-400">Proteína</span>
                      <span className="text-[#FFD700]">24g</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#FFD700] h-full w-[70%]"></div>
                  </div>
              </div>

              <div className="bg-zinc-950 p-3 rounded text-xs text-zinc-300 leading-relaxed border border-zinc-800">
                  Misture 3 ovos com 30g de aveia e canela. Aqueça a frigideira untada...
              </div>
          </div>
        </div>
      ),
    },
    {
      title: "HUB Havok",
      value: "hub",
      content: (
        <div className="w-full overflow-hidden relative h-[450px] md:h-[500px] rounded-2xl p-6 md:p-10 text-white bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl">
           <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="w-64 h-64 text-[#FFD700]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Central de Comando</h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-md">
             Acesse o HUB exclusivo para interagir com a IA. Uma interface dedicada onde você controla sua evolução, pede dicas e gera novos conteúdos.
          </p>
          
          {/* VISUAL: Interface do HUB */}
          <div className="bg-black border border-zinc-800 rounded-xl max-w-sm mx-auto md:mx-0 overflow-hidden shadow-2xl relative z-20">
              <div className="bg-zinc-900 p-3 flex items-center justify-between border-b border-zinc-800">
                 <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FFD700]" />
                    <span className="text-sm font-bold text-white tracking-widest">HAVOK HUB</span>
                 </div>
                 <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>

              <div className="p-4 grid grid-cols-2 gap-3">
                 <div className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-[#FFD700]/50 p-3 rounded-lg flex flex-col items-center gap-2 transition-all cursor-pointer">
                    <Dumbbell className="w-6 h-6 text-white" />
                    <span className="text-xs text-zinc-300">Novo Treino</span>
                 </div>
                 <div className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-[#FFD700]/50 p-3 rounded-lg flex flex-col items-center gap-2 transition-all cursor-pointer">
                    <Utensils className="w-6 h-6 text-white" />
                    <span className="text-xs text-zinc-300">Receita</span>
                 </div>
                 <div className="col-span-2 bg-[#FFD700]/10 border border-[#FFD700]/30 p-3 rounded-lg flex items-center justify-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-[#FFD700]" />
                    <span className="text-sm text-[#FFD700] font-bold">Modo Chat Ativo</span>
                 </div>
              </div>
          </div>
        </div>
      ),
    },

    // =========================================================================
    // FUNCIONALIDADES FUTURAS (COMENTADAS PARA USO POSTERIOR)
    // =========================================================================
    /*
    {
      title: "Chat IA (Futuro)",
      value: "chat_future",
      content: (
        <div className="w-full overflow-hidden relative h-[450px] md:h-[500px] rounded-2xl p-6 md:p-10 text-white bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BrainCircuit className="w-64 h-64 text-[#FFD700]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Análise em Tempo Real</h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-md">
            O HAVOK processa dados de sono e recuperação. Dormiu mal? Ele ajusta o treino automaticamente.
          </p>
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-zinc-800 max-w-sm mx-auto md:mx-0 shadow-lg relative z-20">
             <div className="flex gap-3 mb-4">
                <div className="bg-zinc-800 rounded-lg rounded-tl-none p-3 text-sm text-zinc-300">
                    Dormi mal essa noite, HAVOK.
                </div>
             </div>
             <div className="flex gap-3 flex-row-reverse">
                <div className="bg-[#FFD700]/20 border border-[#FFD700]/30 rounded-lg rounded-tr-none p-3 text-sm text-[#FFD700]">
                    Reduzi o volume em 20%. Foco na técnica hoje!
                </div>
             </div>
          </div>
        </div>
      ),
    },
    {
      title: "Segurança (Futuro)",
      value: "safety_future",
      content: (
        <div className="w-full overflow-hidden relative h-[450px] md:h-[500px] rounded-2xl p-6 md:p-10 text-white bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl">
           <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheck className="w-64 h-64 text-[#FFD700]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Prevenção de Lesões</h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-md">
             Monitoramos seu volume total para evitar overtraining e sugerimos substituições biomecânicas.
          </p>
          <div className="bg-red-950/30 backdrop-blur-md rounded-xl p-4 border border-red-500/30 max-w-sm mx-auto md:mx-0 flex gap-4 items-center shadow-lg relative z-20">
             <ShieldCheck className="w-6 h-6 text-red-500" />
             <div>
                <p className="text-red-400 font-bold text-sm">Alerta de Fadiga</p>
                <p className="text-zinc-300 text-xs mt-0.5">Volume de ombros muito alto.</p>
             </div>
          </div>
        </div>
      ),
    },
    */
  ];

  return (
    <div className="py-20 md:py-32 bg-black relative overflow-hidden">
       {/* LUZ DE FUNDO */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-start md:items-center gap-12">
            
            {/* LADO ESQUERDO: TEXTO */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
                 <div className="inline-block mb-4 px-3 py-1 bg-[#FFD700]/10 rounded-full border border-[#FFD700]/20">
                    <span className="text-[#FFD700] text-xs font-bold tracking-widest uppercase">Powered by AI</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Conheça o <span className="text-[#FFD700]">HAVOK</span>
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                    Sua inteligência central de performance. Treinos personalizados, receitas criativas e um HUB exclusivo para potenciar seus resultados.
                </p>
            </div>

            {/* LADO DIREITO: ABAS */}
            <div className="w-full md:w-2/3 h-[500px] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto items-start justify-start">
                <Tabs tabs={tabs} />
            </div>
       </div>
    </div>
  );
}
