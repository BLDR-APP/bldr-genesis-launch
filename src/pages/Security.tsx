import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ShieldCheck, Lock, Eye, Server, AlertTriangle, CheckCircle2, FileText, Phone, Mail, Activity } from "lucide-react";

const Security = () => {
  // Dados para o Grid de Recursos (usando o HoverEffect)
  const securityFeatures = [
    {
      title: "Criptografia Avançada",
      description: "Todos os dados são criptografados com padrão AES-256 em trânsito e em repouso, garantindo confidencialidade total.",
      icon: <ShieldCheck className="h-8 w-8 text-[#FFD700]" />
    },
    {
      title: "Autenticação Segura",
      description: "Sistema de autenticação multifator (MFA) para proteger sua conta contra acessos não autorizados.",
      icon: <Lock className="h-8 w-8 text-[#FFD700]" />
    },
    {
      title: "Monitoramento 24/7",
      description: "Monitoramento contínuo para detectar e prevenir atividades suspeitas ou maliciosas em tempo real.",
      icon: <Eye className="h-8 w-8 text-[#FFD700]" />
    },
    {
      title: "Infraestrutura Segura",
      description: "Servidores em datacenters certificados com as mais altas normas de segurança física e digital.",
      icon: <Server className="h-8 w-8 text-[#FFD700]" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Segurança e <span className="text-[#FFD700]">Proteção</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Sua segurança é nossa prioridade máxima
          </p>
        </div>

        {/* COMPROMISSO (Destaque Principal) */}
        <section className="mb-24">
            <BackgroundGradient className="rounded-[22px] p-8 sm:p-12 bg-zinc-900 text-center">
                <ShieldCheck className="h-12 w-12 text-[#FFD700] mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">Nosso Compromisso com a Segurança</h2>
                <p className="text-zinc-300 max-w-3xl mx-auto leading-relaxed text-lg">
                    No BLDR, implementamos as mais avançadas tecnologias e práticas de segurança para proteger seus dados pessoais, informações de saúde e privacidade. Nossa abordagem de segurança é multicamada e está em constante evolução.
                </p>
            </BackgroundGradient>
        </section>

        {/* RECURSOS DE SEGURANÇA (Grid Interativo) */}
        <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Recursos de Segurança</h2>
            <HoverEffect items={securityFeatures} />
        </section>

        {/* MELHORES PRÁTICAS E VULNERABILIDADE */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Lista de Práticas */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-6">Melhores Práticas de Segurança</h3>
                <p className="text-zinc-400 mb-6">Para garantir a máxima segurança de sua conta, recomendamos seguir estas práticas:</p>
                
                <ul className="space-y-4">
                    {[
                        "Use uma senha forte e única para sua conta BLDR",
                        "Ative a autenticação de dois fatores quando disponível",
                        "Mantenha o aplicativo sempre atualizado",
                        "Não compartilhe suas credenciais com terceiros",
                        "Faça logout ao usar dispositivos compartilhados",
                        "Verifique regularmente a atividade de sua conta"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-zinc-300">
                            <CheckCircle2 className="h-5 w-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Card Relatório de Vulnerabilidade */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-[#FFD700]/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-[#FFD700]" />
                    <h3 className="text-xl font-bold text-white">Relatório de Vulnerabilidade</h3>
                </div>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                    Se você descobrir uma vulnerabilidade de segurança, entre em contato conosco imediatamente através do nosso programa de divulgação responsável.
                </p>
                <div className="space-y-1">
                    <p className="text-xs text-[#FFD700] font-bold uppercase tracking-wider">Email de Segurança</p>
                    <p className="text-white font-medium">contato@bldrapp.com.br</p>
                </div>
            </div>
        </section>

        {/* CONFORMIDADE LGPD */}
        <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Certificações e Conformidade</h2>
            <div className="max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex items-center gap-4">
                <div className="bg-[#FFD700]/10 p-3 rounded-full">
                    <FileText className="h-8 w-8 text-[#FFD700]" />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">LGPD</h4>
                    <p className="text-zinc-400 text-sm">Conformidade com a Lei Geral de Proteção de Dados</p>
                </div>
            </div>
        </section>

        {/* TRANSPARÊNCIA E CONTATO DE EMERGÊNCIA */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Transparência em Segurança</h3>
                <p className="text-zinc-400 text-sm mb-6">
                    Acreditamos na transparência total com nossos usuários. Caso ocorra algum incidente de segurança, você será notificado imediatamente.
                </p>
                <div className="flex items-center gap-2 text-[#FFD700] font-medium bg-[#FFD700]/10 w-fit px-4 py-2 rounded-full text-sm">
                    <Activity className="h-4 w-4" />
                    Status atual: Todos os sistemas operando normalmente
                </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Contato de Segurança</h3>
                <p className="text-zinc-400 text-sm mb-6">
                    Para questões urgentes relacionadas à segurança, entre em contato com nossa equipe especializada:
                </p>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-zinc-300">
                        <Mail className="h-4 w-4 text-[#FFD700]" />
                        <span>contato@bldrapp.com.br</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300">
                        <Phone className="h-4 w-4 text-[#FFD700]" />
                        <span>+55 (31) 2391-4743</span>
                    </div>
                </div>
            </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default Security;
