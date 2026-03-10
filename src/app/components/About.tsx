import { CheckCircle2, TrendingUp, Database, AlertCircle, Timer, AudioLines, GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 mt-12">
      <div>
        <h3 className="text-3xl md:text-4xl mb-6">{t('about.title')}</h3>
        <p className="text-[var(--white-icon)] text-lg leading-relaxed">
          {t('about.description')} <span className="text-[var(--sec)]">{t('about.years')}</span> {t('about.description2')} <span className="text-[var(--sec)]">{t('about.leadYears')}</span> {t('about.description3')}
        </p>
      </div>
    </div>
  );
}

export function Education() {
  const { t } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-[#1414149c] border border-[var(--white-icon-tr)] rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-6 h-6 text-[var(--sec)]" />
          <h4 className="text-xl md:text-2xl">{t('edu.title')}</h4>
        </div>
        <div className="space-y-4 text-[var(--white-icon)]">
          <div>
            <p className="text-white font-medium">{t('edu.master')}</p>
            <p className="text-sm">{t('edu.masterField')}</p>
            <p className="text-sm text-[var(--white-icon)] opacity-70">{t('edu.masterSchool')}</p>
          </div>
          <div>
            <p className="text-white font-medium">{t('edu.bachelor')}</p>
            <p className="text-sm">{t('edu.bachelorField')}</p>
            <p className="text-sm text-[var(--white-icon)] opacity-70">{t('edu.bachelorSchool')}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1414149c] border border-[var(--white-icon-tr)] rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-6 h-6 text-[var(--sec)]" />
          <h4 className="text-xl md:text-2xl">{t('lang.title')}</h4>
        </div>
        <div className="space-y-3 text-[var(--white-icon)]">
          <div className="flex justify-between items-center gap-4">
            <span className="text-white flex-shrink-0">{t('lang.russian')}</span>
            <span className="text-sm bg-[var(--sec)] bg-opacity-30 px-3 py-1.5 rounded-full text-white font-medium whitespace-nowrap border border-[var(--sec)] border-opacity-50">{t('lang.native')}</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="text-white flex-shrink-0">{t('lang.english')}</span>
            <span className="text-sm bg-[var(--sec)] bg-opacity-30 px-3 py-1.5 rounded-full text-white font-medium whitespace-nowrap border border-[var(--sec)] border-opacity-50">{t('lang.professional')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KeyResults() {
  const { t } = useLanguage();

  const keyResults = [
    {
      text: t('results.1'),
      icon: TrendingUp,
    },
    {
      text: t('results.2'),
      icon: Database,
    },
    {
      text: t('results.3'),
      icon: AlertCircle,
    },
    {
      text: t('results.4'),
      icon: Timer,
    },
    {
      text: t('results.5'),
      icon: AudioLines,
    },
  ];

  return (
    <div className="bg-[#1414149c] border border-[var(--white-icon-tr)] rounded-2xl p-6">
      <h4 className="text-xl md:text-2xl mb-4">{t('results.title')}</h4>
      <ul className="grid md:grid-cols-2 gap-4">
        {keyResults.map((result, index) => (
          <li key={index} className="flex gap-3 text-[var(--white-icon)]">
            <result.icon className="w-6 h-6 text-[var(--sec)] flex-shrink-0 mt-0.5" />
            <span>{result.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}