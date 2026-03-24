'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.6 }
};

const projects = [
	{
		title: 'Portfolio Command Center',
		description:
			'A futuristic portfolio dashboard focused on smooth interactions, clean typography, and modular components.',
		stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		projectUrl: '#',
		githubUrl: '#'
	},
	{
		title: 'Vision-Based Object Tracker',
		description:
			'A real-time computer vision project for object tracking with lightweight preprocessing and responsive visual overlays.',
		stack: ['Python', 'OpenCV', 'NumPy', 'Matplotlib'],
		projectUrl: '#',
		githubUrl: '#'
	},
	{
		title: 'Data Insight Workbench',
		description:
			'An analytics tool that turns raw datasets into clear trends through interactive charts and model-backed summaries.',
		stack: ['Pandas', 'TensorFlow', 'JavaScript', 'HTML/CSS'],
		projectUrl: '#',
		githubUrl: '#'
	}
];

export default function ProjectsSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState(1);

	const goToSlide = (nextIndex: number) => {
		setDirection(nextIndex > activeIndex ? 1 : -1);
		setActiveIndex(nextIndex);
	};

	const handlePrevious = () => {
		setDirection(-1);
		setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
	};

	const handleNext = () => {
		setDirection(1);
		setActiveIndex((prev) => (prev + 1) % projects.length);
	};

	const currentProject = projects[activeIndex];

	return (
		<section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24">
			<motion.div {...fadeInUp} className="max-w-5xl w-full">
				<div className="flex items-center justify-between mb-10">
					<h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50">Projects</h2>
					<div className="flex items-center gap-3">
						<button
							onClick={handlePrevious}
							aria-label="Show previous project"
							className="size-11 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors"
						>
							&lt;
						</button>
						<button
							onClick={handleNext}
							aria-label="Show next project"
							className="size-11 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors"
						>
							&gt;
						</button>
					</div>
				</div>

				<div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 min-h-[350px]">
					<AnimatePresence mode="wait" custom={direction}>
						<motion.article
							key={currentProject.title}
							custom={direction}
							initial={{ opacity: 0, x: direction > 0 ? 90 : -90 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: direction > 0 ? -90 : 90 }}
							transition={{ duration: 0.38, ease: 'easeInOut' }}
							className="p-8 sm:p-10"
						>
							<p className="text-xs uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400 mb-4">
								Project {String(activeIndex + 1).padStart(2, '0')}
							</p>
							<h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
								{currentProject.title}
							</h3>
							<p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed max-w-3xl mb-6">
								{currentProject.description}
							</p>

							<div className="flex flex-wrap gap-2 mb-8">
								{currentProject.stack.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex items-center gap-6">
								<a
									href={currentProject.projectUrl}
									className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:underline"
								>
									View Project -&gt;
								</a>
								<a
									href={currentProject.githubUrl}
									className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
								>
									GitHub -&gt;
								</a>
							</div>
						</motion.article>
					</AnimatePresence>
				</div>

				<div className="mt-7 flex justify-center gap-2.5">
					{projects.map((project, index) => (
						<button
							key={project.title}
							onClick={() => goToSlide(index)}
							aria-label={`Go to ${project.title}`}
							className={`h-2 rounded-full transition-all ${
								index === activeIndex
									? 'w-8 bg-zinc-900 dark:bg-zinc-100'
									: 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-500 dark:hover:bg-zinc-500'
							}`}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
}
