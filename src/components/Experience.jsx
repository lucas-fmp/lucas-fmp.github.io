import { motion } from 'framer-motion';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { useLanguage } from '../i18n/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const techTags = [
  'Java', 'Quarkus', 'Oracle DB', 'REST APIs',
  'Docker', 'Kubernetes', 'Git', 'Scrum', 'CI/CD',
];

function Experience() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section id="experience" className="relative py-32 md:py-40">
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
            {experience.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            {experience.heading[0]}
            <br />
            <span className="text-gradient">{experience.heading[1]}</span>
          </h2>
        </motion.div>

        {/* Featured experience card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
        >
          {/* Hover glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                    <HiOutlineOfficeBuilding className="text-cyan-400" size={20} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500 text-sm">{experience.period}</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {experience.company}
                </h3>
                <p className="text-cyan-400 font-medium">
                  {experience.role}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-neutral-300 leading-relaxed">
                {experience.desc1}
              </p>
              <p className="text-neutral-300 leading-relaxed">
                {experience.desc2}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {techTags.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-neutral-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/5">
              {experience.metrics.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-neutral-500 text-xs uppercase tracking-wider">{label}</p>
                  <p className="text-white font-medium mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
