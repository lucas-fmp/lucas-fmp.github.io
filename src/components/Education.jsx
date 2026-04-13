import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { useLanguage } from '../i18n/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Education() {
  const { t } = useLanguage();
  const { education } = t;

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
            {education.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            {education.heading[0]}
            <br />
            <span className="text-gradient">{education.heading[1]}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.items.map(({ institution, degree, period, status }, idx) => (
            <motion.div
              key={institution}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-500 flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0 mt-1">
                <HiOutlineAcademicCap className="text-cyan-400" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                  {institution}
                </h3>
                <p className="text-neutral-300 mt-1">{degree}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-neutral-500 text-sm">{period}</span>
                  {status && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 font-medium">
                      {status}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
