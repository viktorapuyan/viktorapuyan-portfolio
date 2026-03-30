'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { IoDownload } from 'react-icons/io5';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.6 }
};

const typePhrases = [
	'Building sleek, performant web experiences.',
	'Turning ideas into interactive products.',
	'Focused on modern front-end engineering.'
];

export default function AboutSection() {
	const [displayText, setDisplayText] = useState('');
	const [phraseIndex, setPhraseIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [imageError, setImageError] = useState(false);

	const activePhrase = useMemo(() => typePhrases[phraseIndex], [phraseIndex]);

	const scrollToContacts = () => {
		const contactsSection = document.getElementById('contact');
		if (contactsSection) {
			contactsSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const downloadResume = () => {
		window.open('https://drive.google.com/file/d/1fk2KVNU5-EyrQUNFXKMbU520jwHDGov_/view?usp=sharing', '_blank');
	};

	useEffect(() => {
		const typingDelay = isDeleting ? 40 : 80;
		const holdDelay = 1100;

		const timer = setTimeout(() => {
			if (!isDeleting && charIndex < activePhrase.length) {
				const nextChar = charIndex + 1;
				setCharIndex(nextChar);
				setDisplayText(activePhrase.slice(0, nextChar));
				return;
			}

			if (!isDeleting && charIndex === activePhrase.length) {
				setIsDeleting(true);
				return;
			}

			if (isDeleting && charIndex > 0) {
				const nextChar = charIndex - 1;
				setCharIndex(nextChar);
				setDisplayText(activePhrase.slice(0, nextChar));
				return;
			}

			if (isDeleting && charIndex === 0) {
				setIsDeleting(false);
				setPhraseIndex((prev) => (prev + 1) % typePhrases.length);
			}
		}, !isDeleting && charIndex === activePhrase.length ? holdDelay : typingDelay);

		return () => clearTimeout(timer);
	}, [activePhrase, charIndex, isDeleting]);

	return (
		<section
			id="about"
			className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(0,185,255,0.18),transparent_40%),radial-gradient(circle_at_85%_70%,rgba(52,211,153,0.12),transparent_45%)]"
		>
			<div className="absolute inset-0 pointer-events-none opacity-50 [background-image:linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

			<motion.div
				{...fadeInUp}
				className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
			>
				<div>
					<p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-cyan-400/90 mb-5">
						Hi! I'm
					</p>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-50 mb-4 leading-tight">
						Viktor Apuyan
					</h2>

					<div className="min-h-[3.2rem] sm:min-h-[2.8rem] mb-8">
						<p className="text-lg sm:text-xl text-cyan-100/90 leading-relaxed font-medium">
							{displayText}
							<span className="inline-block w-[1ch] text-emerald-300 animate-pulse">|</span>
						</p>
					</div>

					<p className="text-zinc-300/90 text-base sm:text-lg max-w-xl leading-relaxed">
						A passionate data scientist with expertise in machine learning, statistical analysis, and data visualization. 
						Turning complex data into actionable insights that drive business decisions.
					</p>

					<div className="flex gap-4 mt-8">
						<button
							onClick={scrollToContacts}
							className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-sky-400 text-zinc-950 font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105"
						>
							Get in Touch
						</button>

						<button
							onClick={downloadResume}
							className="px-6 py-3 border border-cyan-400/60 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-105 flex items-center gap-2"
						>
							<IoDownload className="text-lg" />
							Download Resume
						</button>
					</div>

					<div className="flex gap-4 mt-6">
						<a
							href="https://github.com/viktorapuyan"
							target="_blank"
							rel="noopener noreferrer"
							className="w-12 h-12 rounded-full border border-cyan-400/60 flex items-center justify-center text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-110"
						>
							<FiGithub className="text-xl" />
						</a>

						<a
							href="https://www.linkedin.com/in/viktor-angelo-apuyan-0b2374189/"
							target="_blank"
							rel="noopener noreferrer"
							className="w-12 h-12 rounded-full border border-cyan-400/60 flex items-center justify-center text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-110"
						>
							<FiLinkedin className="text-xl" />
						</a>
					</div>
				</div>

				<div className="flex justify-center lg:justify-end">
					<div className="relative holo-frame w-[270px] h-[330px] sm:w-[320px] sm:h-[390px] rounded-3xl p-[2px] bg-gradient-to-b from-cyan-300/80 via-sky-400/40 to-emerald-300/70 shadow-[0_0_35px_rgba(34,211,238,0.35)]">
						<div className="relative w-full h-full overflow-hidden rounded-3xl bg-zinc-950/85 border border-cyan-300/25">
							{!imageError ? (
								<img
									src="/profile.jpg"
									alt="Viktor Apuyan"
									className="w-full h-full object-cover"
									onError={() => setImageError(true)}
								/>
							) : (
								<div className="w-full h-full flex items-center justify-center text-cyan-200/80 text-sm tracking-[0.24em] uppercase px-6 text-center">
									Add /public/profile.jpg
								</div>
							)}

							<div className="absolute inset-0 hologram-scan" />
							<div className="absolute inset-0 hologram-glow" />
							<div className="absolute inset-y-0 right-0 w-[1px] bg-cyan-200/60" />
							<div className="absolute inset-y-0 left-0 w-[1px] bg-cyan-200/40" />
						</div>
					</div>
				</div>
			</motion.div>

			<style jsx>{`
				.holo-frame::before {
					content: '';
					position: absolute;
					inset: -16px;
					border-radius: 28px;
					border: 1px solid rgba(56, 189, 248, 0.18);
					pointer-events: none;
				}

				.hologram-scan {
					background: repeating-linear-gradient(
						to bottom,
						rgba(56, 189, 248, 0.08) 0,
						rgba(56, 189, 248, 0.08) 2px,
						transparent 2px,
						transparent 6px
					);
					mix-blend-mode: screen;
					opacity: 0.65;
					animation: scan 7s linear infinite;
				}

				.hologram-glow {
					background: linear-gradient(
						120deg,
						rgba(125, 211, 252, 0.12),
						transparent 30%,
						rgba(52, 211, 153, 0.14) 60%,
						transparent 80%
					);
					mix-blend-mode: screen;
					animation: shimmer 4.5s ease-in-out infinite;
				}

				@keyframes scan {
					0% {
						transform: translateY(-6%);
					}
					100% {
						transform: translateY(6%);
					}
				}

				@keyframes shimmer {
					0%,
					100% {
						opacity: 0.45;
						transform: translateX(-6%);
					}
					50% {
						opacity: 0.72;
						transform: translateX(6%);
					}
				}
			`}</style>
		</section>
	);
}
