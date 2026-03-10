import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { About, Education, KeyResults } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function AppContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] md:px-48 lg:px-20 px-9">
      <LanguageSwitcher />
      <Navigation />

      {/* Home Section */}
      <section id="home" className="text-[var(--foreground)] mt-12 md:mt-0 pb-16">
        <Hero />
        <TechStack />
        <About />
        
        {/* Key Results */}
        <div className="mt-12">
          <KeyResults />
        </div>

        {/* Capabilities & Engagement Models */}
        <div className="mt-12">
          <Capabilities />
        </div>

        {/* Experience */}
        <div className="mt-12">
          <Experience />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-16 pb-16">
        <Projects />
      </section>

      {/* Education & Languages */}
      <section className="pt-0 pb-16">
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-16 pb-24">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[var(--white-icon)] border-t border-[var(--white-icon-tr)]">
        <p>{t('footer.rights')}</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}