'use client';

import { motion } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa';
import {
	SiCplusplus,
	SiCss,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiMysql,
	SiNodedotjs,
	SiOpencv,
	SiPandas,
	SiPython,
	SiTensorflow,
} from 'react-icons/si';

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.6 }
};

const skills = [
	{ name: 'Python', Icon: SiPython },
	{ name: 'JavaScript', Icon: SiJavascript },
	{ name: 'HTML', Icon: SiHtml5 },
	{ name: 'CSS', Icon: SiCss },
	{ name: 'C++', Icon: SiCplusplus },
	{ name: 'TensorFlow', Icon: SiTensorflow },
	{ name: 'Pandas', Icon: SiPandas },
	{ name: 'Matplotlib', Icon: FaChartLine },
	{ name: 'OpenCV', Icon: SiOpencv },
    { name: 'SQL', Icon: SiMysql},
    { name: 'Git', Icon: SiGit},
    { name: 'Node.js', Icon: SiNodedotjs} // Placeholder for Node.js icon, replace with actual icon if available
];


export default function SkillsSection() {
	return (
		<section id="skills" className="min-h-screen flex items-center justify-center px-6 bg-zinc-50 dark:bg-zinc-900/50">
			<motion.div {...fadeInUp} className="max-w-5xl w-full">
				<h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-12">
					Skills
				</h2>
				<div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 justify-items-center">
					{skills.map(({ name, Icon }, index) => (
						<motion.div
							key={name}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group relative size-20 sm:size-24 rounded-full border border-zinc-200/80 dark:border-zinc-700 bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-400/80 dark:hover:border-cyan-300 transition-all"
							title={name}
						>
							<Icon className="size-9 sm:size-10 text-zinc-800 dark:text-zinc-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors" />
							<span className="sr-only">{name}</span>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
