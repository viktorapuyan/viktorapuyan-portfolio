'use client';

import { motion } from 'framer-motion';
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

	const handlePrevious = () => {
		setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
	};

	const handleNext = () => {
		setActiveIndex((prev) => (prev + 1) % projects.length);
	};

	const handleCardDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number }; velocity: { x: number } }) => {
		const swipePower = Math.abs(info.offset.x) * Math.abs(info.velocity.x);

		if (info.offset.x < -90 || (info.offset.x < 0 && swipePower > 20000)) {
			handleNext();
			return;
		}

		if (info.offset.x > 90 || (info.offset.x > 0 && swipePower > 20000)) {
			handlePrevious();
		}
	};

	const getWrappedIndex = (offset: number) => {
		return (activeIndex + offset + projects.length) % projects.length;
	};

	const visibleCards = [
		{ offset: -1, index: getWrappedIndex(-1) },
		{ offset: 0, index: getWrappedIndex(0) },
		{ offset: 1, index: getWrappedIndex(1) }
	];

	return (
		<section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24">
			<motion.div {...fadeInUp} className="max-w-5xl w-full">
				<div className="mb-12">
					<h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50">Projects</h2>
				</div>

				<div className="relative h-[430px] sm:h-[470px]" style={{ perspective: '1200px' }}>
					{visibleCards.map(({ offset, index }) => {
						const project = projects[index];
						const isCenter = offset === 0;

						return (
							<motion.article
								key={project.title}
								drag={isCenter ? 'x' : false}
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={0.25}
								dragSnapToOrigin
								onDragEnd={isCenter ? handleCardDragEnd : undefined}
								onClick={() => {
									if (offset < 0) {
										handlePrevious();
									}
									if (offset > 0) {
										handleNext();
									}
								}}
								animate={{
									x: offset * 320,
									scale: isCenter ? 1 : 0.84,
									opacity: isCenter ? 1 : 0.35,
									rotateY: isCenter ? 0 : offset > 0 ? -14 : 14,
									zIndex: isCenter ? 20 : 10
								}}
								transition={{ duration: 0.45, ease: 'easeInOut' }}
								className={`absolute top-0 left-1/2 -translate-x-1/2 w-[74vw] max-w-[620px] h-full rounded-2xl border bg-zinc-50 dark:bg-zinc-900/60 p-8 sm:p-10 ${
									isCenter
										? 'border-zinc-200 dark:border-zinc-800 cursor-grab active:cursor-grabbing'
										: 'border-zinc-300/60 dark:border-zinc-700/60 cursor-pointer'
								}`}
							>
								<p className="text-xs uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400 mb-4">
									Project {String(index + 1).padStart(2, '0')}
								</p>
								<h3 className="text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 line-clamp-2">
									{project.title}
								</h3>
								<p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 line-clamp-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-8">
									{project.stack.map((tech) => (
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
										href={project.projectUrl}
										className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:underline"
									>
										View Project -&gt;
									</a>
									<a
										href={project.githubUrl}
										className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
									>
										GitHub -&gt;
									</a>
								</div>
							</motion.article>
						);
					})}
				</div>

				<div className="mt-7 flex justify-center gap-2.5">
					{projects.map((project, index) => (
						<button
							key={project.title}
							onClick={() => setActiveIndex(index)}
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
