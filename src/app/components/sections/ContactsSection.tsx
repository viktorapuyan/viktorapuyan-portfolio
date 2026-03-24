'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.6 }
};

export default function ContactsSection() {
	return (
		<section id="contact" className="min-h-screen flex items-center justify-center px-6 bg-zinc-50 dark:bg-zinc-900/50">
			<motion.div {...fadeInUp} className="max-w-4xl w-full text-center">
				<h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
					Get In Touch
				</h2>
				<p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
					I'm always open to discussing new projects, creative ideas, or opportunities.
				</p>
				<motion.a
					href="mailto:viktorapuyan.va@gmail.com"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="inline-block px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
				>
					Contact Me
				</motion.a>
			</motion.div>
		</section>
	);
}
