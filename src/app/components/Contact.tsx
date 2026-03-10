import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Send,
      label: t('contact.telegram'),
      value: '@iggor95',
      href: 'https://t.me/iggor95',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'igor-lapin95',
      href: 'https://www.linkedin.com/in/igor-lapin95',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'ig-gor95',
      href: 'https://github.com/ig-gor95',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'igorlapin6@gmail.com',
      href: 'mailto:igorlapin6@gmail.com',
    },
  ];

  return (
    <div className="py-0 max-w-5xl mx-auto">
      <h3 className="text-3xl md:text-4xl mb-4 text-center">{t('contact.title')}</h3>
      <p className="text-[var(--white-icon)] text-center mb-10 text-lg">
        {t('contact.description')}
      </p>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        {contactInfo.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-[#1414149c] border border-[var(--white-icon-tr)] rounded-xl hover:border-[var(--sec)] transition-all duration-300 hover:scale-[1.02] group"
          >
            <div className="p-3 rounded-full bg-[var(--white-icon-tr)] group-hover:bg-[var(--sec)] transition-colors">
              <contact.icon className="w-6 h-6 text-[var(--sec)] group-hover:text-white transition-colors" />
            </div>
            <div className="text-center">
              <p className="text-sm text-[var(--white-icon)] mb-1">{contact.label}</p>
              <p className="text-white text-sm">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}