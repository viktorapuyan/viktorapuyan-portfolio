'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.6 }
};

export default function AboutSection() {
	return (
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
	);
}
