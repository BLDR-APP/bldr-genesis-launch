import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-[#FFD700]">
                BLDR
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              Transforme seu corpo e mente com o app para performance mais avançado do mercado.
              Treinos personalizados, acompanhamento profissional e resultados garantidos.
            </p>

            {/* Redes Sociais */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/bldr.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#FFD700] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-zinc-400 hover:text-[#FFD700] text-sm transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-zinc-400 hover:text-[#FFD700] text-sm transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/seguranca" className="text-zinc-400 hover:text-[#FFD700] text-sm transition-colors">
                  Segurança
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termos" className="text-zinc-400 hover:text-[#FFD700] text-sm transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-zinc-400 hover:text-[#FFD700] text-sm transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} BLDR. Todos os direitos reservados.
            CNPJ: 62.211.700/0001-82
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
