'use client';

import { motion } from 'framer-motion';
import Navbar from './components/layout/navbar';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div {...fadeInUp} className="max-w-4xl">
          <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            About Me
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Hello! I'm Viktor Apuyan, a passionate developer focused on creating
            beautiful and functional web experiences. I specialize in modern web
            technologies and love bringing ideas to life through code.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 bg-zinc-50 dark:bg-zinc-900/50">
        <motion.div {...fadeInUp} className="max-w-4xl w-full">
          <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {skill}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6">
        <motion.div {...fadeInUp} className="max-w-4xl w-full">
          <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-12">
            Projects
          </h2>
          <div className="space-y-8">
            {[1, 2, 3].map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                  Project {project}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  A description of your amazing project goes here. Highlight the
                  technologies used and the problem it solves.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline">
                    View Project →
                  </a>
                  <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                    GitHub →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 bg-zinc-50 dark:bg-zinc-900/50">
        <motion.div {...fadeInUp} className="max-w-4xl w-full text-center">
          <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
