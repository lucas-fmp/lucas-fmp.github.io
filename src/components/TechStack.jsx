import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function TechStack() {
  const { t } = useLanguage();
  const { stack } = t;

  return (
    <section id="stack" className="relative py-32 md:py-40">
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
            {stack.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            {stack.heading[0]}
            <br />
            <span className="text-gradient">{stack.heading[1]}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.categories.map(({ title, items }, idx) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors duration-500"
            >
              <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-neutral-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
