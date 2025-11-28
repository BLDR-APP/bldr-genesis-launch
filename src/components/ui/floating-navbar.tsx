import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Componente do Link Simples
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="relative text-neutral-50 items-center flex space-x-1 hover:text-[#FFD700] transition-colors">
        <span className="text-sm cursor-pointer">{children}</span>
    </a>
);

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Começa visível

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Lógica para esconder a barra quando rola pra baixo e mostrar quando rola pra cima
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0, // Começa na posição certa
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // Estilização da Pílula Flutuante
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-6 py-2  items-center justify-between space-x-8 backdrop-blur-md",
          className
        )}
      >
        {/* LOGO BLDR DENTRO DA BARRA */}
        <div className="font-bold text-xl tracking-wider text-white">
            BLDR
        </div>

        {/* LINKS DE NAVEGAÇÃO */}
        <div className="flex items-center space-x-6">
            <NavLink href="/">Início</NavLink>
            <NavLink href="#sobre">Sobre Nós</NavLink>
            <NavLink href="#contato">Contato</NavLink>
        </div>

        {/* BOTÃO DOWNLOAD */}
        <Button 
            size="sm" 
            className="bg-[#FFD700] text-black font-bold hover:bg-yellow-500 rounded-full px-4 h-9"
        >
            <span className="flex items-center gap-2 text-xs sm:text-sm">
                <Download className="h-4 w-4" /> Download
            </span>
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
