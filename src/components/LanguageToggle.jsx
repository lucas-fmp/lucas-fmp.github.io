import { useLanguage } from '../i18n/LanguageContext';

function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const isEn = lang === 'en';

  return (
    <button
      onClick={toggle}
      aria-label={isEn ? 'Switch to Portuguese' : 'Mudar para Inglês'}
      className="relative flex items-center w-[56px] h-[28px] rounded-full bg-white/5 border border-white/10 cursor-pointer hover:border-white/20 transition-colors duration-300 shrink-0"
    >
      {/* Pill — 1px acima do centro matemático para alinhamento óptico */}
      <div
        className="absolute top-[2px] left-[3px] w-[22px] h-[22px] rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${isEn ? 28 : 0}px)` }}
      />

      {/* Labels: inline-flex + leading-none elimina espaço fantasma do line-height */}
      <span
        className={`relative z-10 inline-flex items-center justify-center flex-1 h-full text-[10px] font-bold leading-none transition-colors duration-300 ${
          !isEn ? 'text-white' : 'text-white/30'
        }`}
      >
        PT
      </span>
      <span
        className={`relative z-10 inline-flex items-center justify-center flex-1 h-full text-[10px] font-bold leading-none transition-colors duration-300 ${
          isEn ? 'text-white' : 'text-white/30'
        }`}
      >
        EN
      </span>
    </button>
  );
}

export default LanguageToggle;
