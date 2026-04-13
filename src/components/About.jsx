import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import heroImage from '../assets/heroImage.jpeg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
            {about.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            {about.heading[0]}
            <br />
            <span className="text-gradient">{about.heading[1]}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left column - photo + narrative text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ staggerChildren: 0.15 }}
            className="space-y-6"
          >
            {/* Profile photo */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="relative w-[80%] mx-auto md:mx-0 aspect-square"
            >
              {/* Subtle neon glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl blur-lg" />
              <img
                src={heroImage}
                alt="Lucas Macedo"
                className="absolute inset-0 w-full h-full rounded-2xl object-cover border border-white/10"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-neutral-300 text-lg leading-relaxed"
            >
              {about.p1[0]}
              <span className="text-white font-medium">{about.p1[1]}</span>
              {about.p1[2]}
              <span className="text-white font-medium">{about.p1[3]}</span>
              {about.p1[4]}
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-neutral-300 text-lg leading-relaxed"
            >
              {about.p2}
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-neutral-300 text-lg leading-relaxed"
            >
              {about.p3[0]}
              <span className="text-white font-medium">{about.p3[1]}</span>
              {about.p3[2]}
              <span className="text-white font-medium">{about.p3[3]}</span>
              {about.p3[4]}
            </motion.p>
          </motion.div>

          {/* Right column - highlight cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            className="space-y-4"
          >
            {about.highlights.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/20 hover:bg-white/[0.04] transition-all duration-500"
              >
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
