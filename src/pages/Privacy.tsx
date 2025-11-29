import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText, Mail, Server } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FFD700] selection:text-black">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Política de <span className="text-[#FFD700]">Privacidade</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-zinc-500 bg-zinc-900/50 w-fit mx-auto px-4 py-1 rounded-full border border-zinc-800">
            <Shield className="h-4 w-4" />
            <span className="text-sm">Última atualização: 29/11/2025</span>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="space-y-12 text-zinc-300 leading-relaxed text-lg">

          {/* 1. Compromisso */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FFD700]">1.</span> Compromisso com a Privacidade
            </h2>
            <p>
              No BLDR, respeitamos a sua privacidade e estamos comprometidos em proteger os seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações.
            </p>
          </section>

          {/* 2. Informações que Coletamos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-[#FFD700]">2.</span> Informações que Coletamos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-[#FFD700]" /> Informações de Cadastro
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-400 marker:text-[#FFD700]">
                        <li>Nome completo</li>
                        <li>Endereço de e-mail</li>
                        <li>Data de nascimento</li>
                        <li>Informações físicas (altura, peso, objetivos)</li>
                    </ul>
                </div>

                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-[#FFD700]" /> Dados de Uso
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-400 marker:text-[#FFD700]">
                        <li>Histórico de treinos e exercícios</li>
                        <li>Progresso e métricas de desempenho</li>
                        <li>Preferências e configurações do app</li>
                        <li>Tempo de uso e navegação</li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-6">
                <h3 className="text-white font-bold mb-2">Dados Técnicos:</h3>
                <ul className="list-disc pl-6 space-y-2 text-zinc-400 marker:text-[#FFD700]">
                    <li>Informações do dispositivo (modelo, SO)</li>
                    <li>Endereço IP</li>
                    <li>Dados de localização (se autorizado)</li>
                    <li>Logs de sistema</li>
                </ul>
            </div>
          </section>

          {/* 3. Como Usamos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FFD700]">3.</span> Como Usamos suas Informações
            </h2>
            <p className="mb-4">Utilizamos os seus dados para:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 marker:text-[#FFD700]">
                <li>Personalizar treinos e recomendações</li>
                <li>Acompanhar o seu progresso e fornecer insights</li>
                <li>Melhorar os nossos serviços e funcionalidades</li>
                <li>Enviar notificações relevantes (se autorizado)</li>
                <li>Fornecer suporte ao cliente</li>
                <li>Garantir a segurança da plataforma</li>
            </ul>
          </section>

          {/* 4. Compartilhamento */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FFD700]">4.</span> Compartilhamento de Dados
            </h2>
            <p className="mb-4 text-white font-medium">Não vendemos os seus dados pessoais.</p>
            <p className="mb-4">Compartilhamos informações apenas nas seguintes situações:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 marker:text-[#FFD700]">
                <li>Com o seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com provedores de serviços confiáveis (sob acordos rígidos)</li>
                <li>Em caso de fusão ou aquisição da empresa</li>
            </ul>
          </section>

          {/* 5. Segurança */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FFD700]">5.</span> Segurança dos Dados
            </h2>
            <p className="mb-4">Implementamos medidas de segurança robustas:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-400">
                <div className="flex items-center gap-2 bg-zinc-900 px-4 py-3 rounded-lg">
                    <Lock className="h-4 w-4 text-[#FFD700]" /> Criptografia AES-256
                </div>
                <div className="flex items-center gap-2 bg-zinc-900 px-4 py-3 rounded-lg">
                    <Shield className="h-4 w-4 text-[#FFD700]" /> Controlo de acesso restrito
                </div>
                <div className="flex items-center gap-2 bg-zinc-900 px-4 py-3 rounded-lg">
                    <Eye className="h-4 w-4 text-[#FFD700]" /> Monitoramento contínuo
                </div>
                <div className="flex items-center gap-2 bg-zinc-900 px-4 py-3 rounded-lg">
                    <Server className="h-4 w-4 text-[#FFD700]" /> Auditorias regulares
                </div>
            </div>
          </section>

          {/* 6. LGPD */}
          <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-[#FFD700]">6.</span> Seus Direitos (LGPD)
            </h2>
            <p className="mb-4">Você tem o direito de:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 list-disc pl-5 text-zinc-400 marker:text-[#FFD700]">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou incorretos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar consentimentos a qualquer momento</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Ser informado sobre o uso de seus dados</li>
            </ul>
          </section>

          {/* 7, 8, 9 - Retenção, Cookies, Alterações */}
          <section className="space-y-8">
            <div>
                <h3 className="text-xl font-bold text-white mb-2">7. Retenção de Dados</h3>
                <p>Mantemos os seus dados pelo tempo necessário para fornecer os nossos serviços ou conforme exigido por lei. Você pode solicitar a exclusão da sua conta a qualquer momento.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-white mb-2">8. Cookies e Tecnologias Similares</h3>
                <p>Utilizamos cookies e tecnologias similares para melhorar a sua experiência, analisar o uso do aplicativo e personalizar conteúdo. Você pode gerenciar as suas preferências de cookies nas configurações do app.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-white mb-2">9. Alterações na Política</h3>
                <p>Podemos atualizar esta política periodicamente. Notificaremos você sobre mudanças significativas através do aplicativo ou por e-mail.</p>
            </div>
          </section>

          {/* 10. Contato (DPO) */}
          <section className="border-t border-zinc-800 pt-12 mt-12">
            <h2 className="text-2xl font-bold text-white mb-8">10. Contato (DPO)</h2>
            <p className="mb-6 text-zinc-400">Para exercer os seus direitos ou esclarecer dúvidas sobre privacidade, entre em contacto com nosso Encarregado de Dados:</p>
            
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col sm:flex-row items-center gap-6 hover:border-[#FFD700]/30 transition-colors">
                <div className="bg-[#FFD700]/10 p-4 rounded-full">
                    <Mail className="h-8 w-8 text-[#FFD700]" />
                </div>
                <div className="text-center sm:text-left">
                    <p className="text-xs text-[#FFD700] uppercase font-bold tracking-wider mb-1">Encarregado de Dados</p>
                    <p className="text-white font-medium text-lg">privacidade@bldr.app</p>
                    <p className="text-zinc-500 mt-1">Responderemos em até 48 horas úteis.</p>
                </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
