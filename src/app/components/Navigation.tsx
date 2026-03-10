import { User, Briefcase, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: t('nav.about'), icon: User },
    { id: 'projects', label: t('nav.projects'), icon: Briefcase },
    { id: 'contact', label: t('nav.contact'), icon: Send },
  ];

  return (
    <div className="flex justify-center w-full">
      <nav className="fixed z-[100] bg-[#1414149c] border border-[var(--white-icon-tr)] backdrop-blur-xl transition-all md:top-0 md:bottom-auto bottom-0 md:w-[33rem] rounded-t-2xl md:rounded-full md:mt-6">
        <div className="container mx-auto flex justify-center items-center p-3">
          <ul className="flex w-full justify-between md:space-x-6 md:justify-center md:gap-8 gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.id} className="flex-1 md:flex-none">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex flex-col items-center gap-1 transition-colors text-xs md:text-base ${
                    activeSection === item.id
                      ? 'text-[var(--foreground)]'
                      : 'text-[var(--white-icon)]'
                  }`}
                >
                  <span className="md:hidden flex items-center justify-center w-6 h-6">
                    <item.icon className="w-6 h-6" />
                  </span>
                  <span className="hidden md:inline-block">{item.label}</span>
                  <span className="md:hidden">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}