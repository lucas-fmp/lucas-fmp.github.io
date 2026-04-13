import { useLanguage } from '../i18n/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Lucas Macedo
        </p>
        <p className="text-neutral-600 text-xs">
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
