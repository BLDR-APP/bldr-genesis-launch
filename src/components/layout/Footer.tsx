import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BLDR
            </h3>
            <p className="text-muted-foreground text-sm">
              Transforme seu corpo e sua mente com o app fitness mais completo do mercado.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Empresa</h4>
            <div className="space-y-2">
              <Link to="/sobre" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link to="/contato" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <div className="space-y-2">
              <Link to="/termos" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/seguranca" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Segurança
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Download</h4>
            <div className="space-y-3">
              <a 
                href="#" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                App Store
              </a>
              <a 
                href="#" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 BLDR. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;