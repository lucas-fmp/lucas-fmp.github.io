import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useLanguage } from '../i18n/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const contactLinks = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/lucas-fmp/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/lucas-fmp', label: 'GitHub' },
  { icon: HiOutlineMail, href: 'mailto:lucasfernandomacedo13@gmail.com', label: 'Email' },
];

function Contact() {
  const { t } = useLanguage();
  const { contact } = t;

  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-cyan-400 text-sm font-medium tracking-widest uppercase block"
          >
            {contact.label}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6"
          >
            {contact.heading[0]}
            <br />
            <span className="text-gradient">{contact.heading[1]}</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-neutral-400 text-lg max-w-xl mx-auto mb-12"
          >
            {contact.desc}
          </motion.p>

          <motion.a
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            href="mailto:lucasfernandomacedo13@gmail.com"
            className="inline-flex px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            {contact.cta}
          </motion.a>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            {contactLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
