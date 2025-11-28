import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// Adicionei o ícone 'Rocket' para dar um visual de lançamento
import { Menu, X, Rocket } from "lucide-react"; 
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  // Componente do botão modificado para mensagem "Em Breve"
  const DownloadButton = ({ className, fullWidth = false }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className={`${className} bg-gradient-primary border-none text-black font-semibold hover:opacity-90 ${fullWidth ? 'w-full' : ''}`}
        >
          Download App
        </Button>
      </DialogTrigger>
      {/* sm:max-w-[425px] deixa o popup com um tamanho ideal para texto */}
      <DialogContent className="sm:max-w-[425px] text-center flex flex-col items-center justify-center py-10">
        
        {/* Ícone de foguete animado ou estático */}
        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Rocket className="h-8 w-8 text-primary" />
        </div>

        <DialogHeader className="items-center">
          <DialogTitle className="text-2xl font-bold">Em breve nas lojas!</DialogTitle>
          <DialogDescription className="text-center pt-2 text-base">
            Estamos finalizando os últimos ajustes no aplicativo <strong>BLDR</strong>. 
            <br /><br />
            Logo você poderá ter acesso a treinos e dietas na palma da sua mão.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 w-full">
          <Button className="w-full" onClick={() => setIsOpen(false)}>
            Entendi, vou aguardar!
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              BLDR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <DownloadButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <DownloadButton fullWidth={true} className="w-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
