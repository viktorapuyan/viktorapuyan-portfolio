'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.6 }
};

export default function ProjectsSection() {
	return (
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
	);
}
