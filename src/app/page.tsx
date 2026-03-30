'use client';

import Navbar from './components/layout/navbar';
import AboutSection from './components/sections/aboutsection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactsSection from './components/sections/ContactsSection';
import ResumeSection from './components/sections/ResumeSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
      <ResumeSection />
    </div>
  );
}
