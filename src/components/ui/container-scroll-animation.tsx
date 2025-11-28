import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[70rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      // MUDANÇAS AQUI: Dimensões de iPhone e bordas
      className="max-w-[320px] md:max-w-[400px] -mt-24 md:-mt-15 mx-auto h-[650px] md:h-[850px] w-full border-[8px] border-[#4a4a4a] p-[6px] bg-[#222222] rounded-[55px] shadow-2xl relative"
    >
      {/* Dynamic Island e Speaker */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-[20px] z-50 flex items-center justify-center">
         <div className="w-[80px] h-[6px] bg-zinc-800 rounded-full mr-2"></div>
         <div className="w-[6px] h-[6px] bg-blue-900/50 rounded-full"></div>
      </div>

      {/* Botões Laterais (Volume/Power) - Detalhe Extra */}
      <div className="absolute top-[100px] -left-[10px] w-[3px] h-[26px] bg-[#3a3a3a] rounded-l-md"></div>
      <div className="absolute top-[140px] -left-[10px] w-[3px] h-[50px] bg-[#3a3a3a] rounded-l-md"></div>
      <div className="absolute top-[200px] -left-[10px] w-[3px] h-[50px] bg-[#3a3a3a] rounded-l-md"></div>
      <div className="absolute top-[150px] -right-[10px] w-[3px] h-[80px] bg-[#3a3a3a] rounded-r-md"></div>

      {/* A Tela em si */}
      <div className="h-full w-full overflow-hidden rounded-[45px] bg-black dark:bg-zinc-900">
        {children}
      </div>
    </motion.div>
  );
};
