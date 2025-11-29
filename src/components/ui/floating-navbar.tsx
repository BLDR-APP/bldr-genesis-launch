import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Download, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// AJUSTE 1: Fonte menor no mobile (text-xs) para caber tudo
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link to={href} className="relative text-neutral-50 items-center flex space-x-1 hover:text-[#FFD700] transition-colors">
        <span className="text-xs md:text-sm cursor-pointer font-medium">{children}</span>
    </Link>
);

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
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
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // AJUSTE 2: Padding menor no mobile (px-4) e justify-between para espalhar
          "flex max-w-[95%] md:max-w-fit fixed top-4 md:top-6 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 md:pr-2 md:pl-6 py-2 items-center justify-between space-x-2 md:space-x-8 backdrop-blur-md",
          className
        )}
      >
        {/* LOGO BLDR */}
        <div className="font-bold text-lg md:text-xl tracking-wider text-[#FFD700] mr-2">
            BLDR
        </div>

        {/* LINKS (Agora visíveis no Mobile) */}
        {/* AJUSTE 3: space-x-3 no mobile para ficar mais juntinho */}
        <div className="flex items-center space-x-4 md:space-x-6">
            <NavLink href="/">Início</NavLink>
            <NavLink href="/sobre">Sobre</NavLink> {/* Encurtei "Sobre Nós" para "Sobre" visualmente no mobile, se quiser completo avise */}
            <NavLink href="/contato">Contato</NavLink>
        </div>

        {/* BOTÃO DOWNLOAD (Escondido no Mobile) */}
        <div className="hidden md:block">
            <Dialog>
                <DialogTrigger asChild>
                    <Button 
                        size="sm" 
                        className="bg-[#FFD700] text-black font-bold hover:bg-yellow-500 rounded-full px-4 h-9"
                    >
                        <span className="flex items-center gap-2 text-xs sm:text-sm">
                            <Download className="h-4 w-4" /> Download
                        </span>
                    </Button>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-[425px] text-center flex flex-col items-center justify-center py-10 bg-zinc-950 border-zinc-800 text-white">
                    <div className="h-16 w-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mb-4">
                    <Rocket className="h-8 w-8 text-[#FFD700]" />
                    </div>
                    <DialogHeader className="items-center">
                    <DialogTitle className="text-2xl font-bold text-white">Em breve!</DialogTitle>
                    <DialogDescription className="text-center pt-2 text-base text-zinc-400">
                        Estamos finalizando os últimos detalhes. <br/>
                        Logo você terá acesso completo ao <strong className="text-[#FFD700]">BLDR</strong>.
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
