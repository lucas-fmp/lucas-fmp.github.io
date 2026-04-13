import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageToggle from './LanguageToggle';

function NavBar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.stack, href: '#stack' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="text-white font-bold text-xl tracking-tight"
            aria-label="Home"
          >
            LM<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            <LanguageToggle />

            <a
              href="mailto:lucasfernandomacedo13@gmail.com"
              className="text-sm px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              {t.nav.getInTouch}
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileOpen(true)}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <HiMenuAlt4 size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <HiX size={28} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-light text-white hover:text-cyan-400 transition-colors"
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:lucasfernandomacedo13@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => setIsMobileOpen(false)}
                className="mt-4 px-6 py-3 rounded-full border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all"
              >
                {t.nav.getInTouch}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
