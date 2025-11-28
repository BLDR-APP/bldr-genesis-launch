import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              404
            </h1>
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Página não encontrada
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Ops! A página que você está procurando não existe ou foi movida. 
            Que tal voltar ao início e continuar construindo seu corpo ideal?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-black font-semibold hover:opacity-90"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-black"
              onClick={() => window.location.href = '/'}
            >
              <Home className="mr-2 h-5 w-5" />
              Ir para o Início
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
