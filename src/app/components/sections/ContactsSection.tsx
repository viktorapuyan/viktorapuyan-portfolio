'use client';

import { motion } from 'framer-motion';
import type { FormEvent } from 'react';
import { FiSend } from 'react-icons/fi';

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.6 }
};

export default function ContactsSection() {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const name = String(formData.get('name') ?? '').trim();
		const email = String(formData.get('email') ?? '').trim();
		const subject = String(formData.get('subject') ?? '').trim();
		const message = String(formData.get('message') ?? '').trim();

		const finalSubject = subject || `Portfolio message from ${name || 'Visitor'}`;
		const finalBody = [
			`Name: ${name || 'N/A'}`,
			`Email: ${email || 'N/A'}`,
			'',
			message || 'No message provided.'
		].join('\n');

		window.location.href = `mailto:viktorapuyan.va@gmail.com?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(finalBody)}`;
	};

	return (
		<section
			id="contact"
			className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-[radial-gradient(circle_at_18%_15%,rgba(239,68,68,0.26),transparent_45%),radial-gradient(circle_at_80%_78%,rgba(190,24,93,0.2),transparent_42%)]"
		>
			<div className="absolute inset-0 pointer-events-none opacity-40 [background-image:linear-gradient(rgba(248,113,113,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(248,113,113,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

			<motion.div
				{...fadeInUp}
				className="relative z-10 max-w-4xl w-full rounded-3xl border border-rose-400/20 bg-zinc-900/55 backdrop-blur-md px-6 py-8 sm:px-10 sm:py-10 shadow-[0_20px_80px_rgba(190,24,93,0.22)]"
			>
				<div className="mb-8">
					<p className="text-xs uppercase tracking-[0.3em] text-rose-300/85 mb-3">Contact</p>
					<h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 mb-2">Send a Message</h2>
					<p className="text-zinc-300 leading-relaxed">
						Share your idea, collaboration request, or role opportunity. I usually
						respond as soon as possible.
					</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-5">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label htmlFor="contact-name" className="block text-sm font-medium text-zinc-200 mb-2">
								Name
							</label>
							<input
								id="contact-name"
								name="name"
								type="text"
								placeholder="Your name"
								required
								className="w-full rounded-xl border border-zinc-700/90 bg-zinc-950/60 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20 transition"
							/>
						</div>

						<div>
							<label htmlFor="contact-email" className="block text-sm font-medium text-zinc-200 mb-2">
								Email
							</label>
							<input
								id="contact-email"
								name="email"
								type="email"
								placeholder="Your email"
								required
								className="w-full rounded-xl border border-zinc-700/90 bg-zinc-950/60 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20 transition"
							/>
						</div>
					</div>

					<div>
						<label htmlFor="contact-subject" className="block text-sm font-medium text-zinc-200 mb-2">
							Subject
						</label>
						<input
							id="contact-subject"
							name="subject"
							type="text"
							placeholder="Subject"
							required
							className="w-full rounded-xl border border-zinc-700/90 bg-zinc-950/60 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20 transition"
						/>
					</div>

					<div>
						<label htmlFor="contact-message" className="block text-sm font-medium text-zinc-200 mb-2">
							Message
						</label>
						<textarea
							id="contact-message"
							name="message"
							placeholder="Your message"
							rows={6}
							required
							className="w-full rounded-xl border border-zinc-700/90 bg-zinc-950/60 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20 transition resize-none"
						/>
					</div>

					<motion.button
						type="submit"
						whileHover={{ scale: 1.01 }}
						whileTap={{ scale: 0.99 }}
						className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-6 py-3.5 text-white font-semibold shadow-[0_10px_26px_rgba(225,29,72,0.35)] hover:brightness-110 transition"
					>
						<span>Send Message</span>
						<FiSend className="text-base" />
					</motion.button>
				</form>
			</motion.div>
		</section>
	);
}
