import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Mail, MapPin, Clock, MessageSquare, User, AtSign, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FFD700] selection:text-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Entre em <span className="text-[#FFD700]">Contato</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Estamos aqui para ajudar você em sua jornada fitness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA DA ESQUERDA: FORMULÁRIO (Com destaque Premium) */}
          <div className="lg:col-span-2">
            <BackgroundGradient className="rounded-[22px] bg-zinc-900 h-full">
              <div className="bg-zinc-900 rounded-[22px] p-6 sm:p-10 h-full">
                <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                  <MessageSquare className="text-[#FFD700]" /> Envie sua mensagem
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Nome *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-zinc-500" />
                        <input 
                          type="text" 
                          placeholder="Seu nome completo"
                          className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Email *</label>
                      <div className="relative">
                        <AtSign className="absolute left-3 top-3 h-5 w-5 text-zinc-500" />
                        <input 
                          type="email" 
                          placeholder="seu@email.com"
                          className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Telefone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-zinc-500" />
                        <input 
                          type="tel" 
                          placeholder="(11) 99999-9999"
                          className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] transition-all"
                        />
                      </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400 ml-1">Assunto *</label>
                    <input 
                      type="text" 
                      placeholder="Como podemos ajudar?"
                      className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400 ml-1">Mensagem *</label>
                    <textarea 
                      rows={5}
                      placeholder="Descreva sua dúvida ou sugestão..."
                      className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] transition-all resize-none"
                    />
                  </div>

                  <Button className="w-full bg-[#FFD700] text-black font-bold text-lg h-12 hover:bg-[#FFD700]/90 hover:scale-[1.02] transition-all rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                    Enviar Mensagem
                  </Button>
                  
                  <p className="text-center text-xs text-zinc-500">* Campos obrigatórios</p>
                </form>
              </div>
            </BackgroundGradient>
          </div>

          {/* COLUNA DA DIREITA: INFORMAÇÕES */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Informações de Contato</h3>

            {/* Card Email Geral */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-start gap-4 hover:border-[#FFD700]/30 transition-colors">
              <div className="p-3 bg-[#FFD700]/10 rounded-full">
                <Mail className="h-6 w-6 text-[#FFD700]" />
              </div>
              <div>
                <h4 className="font-bold text-white">Email</h4>
                <p className="text-[#FFD700] font-medium">contato@bldrapp.com.br</p>
                <p className="text-sm text-zinc-500 mt-1">Respondemos em até 24 horas</p>
              </div>
            </div>

            {/* Card Endereço */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-start gap-4 hover:border-[#FFD700]/30 transition-colors">
              <div className="p-3 bg-[#FFD700]/10 rounded-full">
                <MapPin className="h-6 w-6 text-[#FFD700]" />
              </div>
              <div>
                <h4 className="font-bold text-white">Endereço</h4>
                <p className="text-zinc-300">Belo Horizonte, MG</p>
                <p className="text-sm text-zinc-500 mt-1">Brasil</p>
              </div>
            </div>

            {/* Card Horário */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-start gap-4 hover:border-[#FFD700]/30 transition-colors">
              <div className="p-3 bg-[#FFD700]/10 rounded-full">
                <Clock className="h-6 w-6 text-[#FFD700]" />
              </div>
              <div>
                <h4 className="font-bold text-white">Horário</h4>
                <p className="text-zinc-300">9h às 18h</p>
                <p className="text-sm text-zinc-500 mt-1">Segunda a sexta-feira</p>
              </div>
            </div>

            {/* Card Sócios (Lista) */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-[#FFD700]/30 transition-colors">
               <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-[#FFD700]/10 rounded-full">
                    <Mail className="h-6 w-6 text-[#FFD700]" />
                 </div>
                 <h4 className="font-bold text-white">Email Sócios</h4>
               </div>
               
               <div className="space-y-3 pl-2">
                 <div className="text-sm">
                    <p className="text-[#FFD700]">pedro.menin@bldrapp.com.br</p>
                 </div>
                 <div className="text-sm">
                    <p className="text-[#FFD700]">pedro.lacerda@bldrapp.com.br</p>
                 </div>
                 <div className="text-sm">
                    <p className="text-[#FFD700]">joao.rocha@bldrapp.com.br</p>
                 </div>
                 <div className="text-sm">
                    <p className="text-[#FFD700]">arthur.carvalho@bldrapp.com.br</p>
                 </div>
               </div>
            </div>

             {/* FAQ Teaser */}
             <div className="bg-black border border-zinc-800 p-6 rounded-2xl mt-8">
                <h4 className="font-bold text-white mb-2">Perguntas Frequentes</h4>
                <p className="text-zinc-400 text-sm mb-4">
                    Antes de entrar em contato, que tal conferir nossa seção de perguntas frequentes? Talvez sua dúvida já tenha sido respondida!
                </p>
                <Button variant="outline" className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black w-full">
                    Ver FAQ
                </Button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
