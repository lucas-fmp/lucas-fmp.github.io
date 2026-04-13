import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useLanguage } from '../i18n/LanguageContext';

const socialLinks = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/lucas-fmp/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/lucas-fmp', label: 'GitHub' },
  { icon: HiOutlineMail, href: 'mailto:lucasfernandomacedo13@gmail.com', label: 'Email' },
];

function Home() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 md:w-96 md:h-96 bg-cyan-500/8 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 md:w-96 md:h-96 bg-blue-500/8 rounded-full blur-[128px] animate-pulse-slow [animation-delay:2s]" />

      {/* Decorative rotating rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="absolute inset-0 rounded-full border border-white/[0.03]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
          className="absolute inset-8 rounded-full border border-white/[0.02]"
        />
      </div>

      {/* Main content with parallax */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cyan-400 text-sm md:text-base font-medium tracking-widest uppercase mb-6"
        >
          {t.hero.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8"
        >
          Lucas
          <br />
          <span className="text-gradient">Macedo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t.hero.cta}
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full border border-white/10 text-white font-medium text-sm hover:border-white/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t.hero.learnMore}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-5 mt-16"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-cyan-400 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <FiArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}

export default Home;
