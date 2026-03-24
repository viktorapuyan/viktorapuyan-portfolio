'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.6 }
};

export default function SkillsSection() {
	return (
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
	);
}
