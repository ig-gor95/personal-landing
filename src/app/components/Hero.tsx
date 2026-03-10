import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  const socialLinks = [
    {
      icon: Send,
      href: 'https://t.me/iggor95',
      label: 'Telegram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/igor-lapin95',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/ig-gor95',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:igorlapin6@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <div className="max-w-5xl space-y-4 md:py-36 pb-2">
      <div className="text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl leading-none"
        >
          {t('hero.name')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-md md:text-lg text-[var(--white-icon)] shiny-text pt-2"
        >
          {t('hero.subtitle')}
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 md:gap-4 pt-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl leading-none"
          >
            {t('hero.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-md md:text-2xl text-[var(--white-icon)] ml-0 lg:ml-8 border-l-4 border-[var(--sec)] pl-6 py-3 bg-[var(--white-icon-tr)] rounded-r-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('hero.description')}{' '}
            <span className="text-[var(--sec)] shiny-purple">{t('hero.reliability')}</span>,{' '}
            {t('hero.description2')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4 pt-4"
        >
          <p className="text-[var(--white-icon)] text-lg">
            {t('hero.industries')}
          </p>
          
          <div className="flex justify-start gap-2 pt-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"
              >
                <link.icon className="size-8" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}