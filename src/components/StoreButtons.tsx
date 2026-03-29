import { ButtonMovingBorder } from "@/components/ui/moving-border";

interface StoreButtonsProps {
  className?: string;
}

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" width="28" height="28" fill="currentColor" className="shrink-0">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg viewBox="0 0 512 512" width="28" height="28" fill="currentColor" className="shrink-0">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

const StoreButtons = ({ className = "" }: StoreButtonsProps) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 items-center justify-center w-full ${className}`}>
      <a
        href="https://apps.apple.com/app/bldr/id6754264412"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <ButtonMovingBorder
          borderRadius="1.2rem"
          className="bg-zinc-900 text-white border-neutral-800 p-0 w-full hover:bg-zinc-800 transition-all"
          borderClassName="bg-[radial-gradient(#FFD700_40%,transparent_60%)]"
        >
          <div className="flex items-center justify-center gap-3 h-14 px-6 w-full">
            <AppleIcon />
            <div className="flex flex-col items-start justify-center">
              <span className="text-[10px] uppercase text-zinc-400 font-bold mb-0.5 whitespace-nowrap">Baixar na</span>
              <span className="text-lg font-bold leading-none whitespace-nowrap">App Store</span>
            </div>
          </div>
        </ButtonMovingBorder>
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.bldr_fitness.app&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <ButtonMovingBorder
          borderRadius="1.2rem"
          className="bg-zinc-900 text-white border-neutral-800 p-0 w-full hover:bg-zinc-800 transition-all"
          borderClassName="bg-[radial-gradient(#FFD700_40%,transparent_60%)]"
        >
          <div className="flex items-center justify-center gap-3 h-14 px-6 w-full">
            <GooglePlayIcon />
            <div className="flex flex-col items-start justify-center">
              <span className="text-[10px] uppercase text-zinc-400 font-bold mb-0.5 whitespace-nowrap">Disponível no</span>
              <span className="text-lg font-bold leading-none whitespace-nowrap">Google Play</span>
            </div>
          </div>
        </ButtonMovingBorder>
      </a>
    </div>
  );
};

export default StoreButtons;
