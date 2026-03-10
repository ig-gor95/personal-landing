import { CheckCircle2, ChevronDown, Briefcase, Lightbulb, Gauge, Brain, Users } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Capabilities() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleModel = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const capabilities = [
    t('about.cap1'),
    t('about.cap2'),
    t('about.cap3'),
    t('about.cap4'),
    t('about.cap5'),
  ];

  const engagementModels = [
    {
      icon: Lightbulb,
      titleKey: 'skills.audit',
      descKey: 'skills.auditDesc',
    },
    {
      icon: Briefcase,
      titleKey: 'skills.backend',
      descKey: 'skills.backendDesc',
    },
    {
      icon: Gauge,
      titleKey: 'skills.performance',
      descKey: 'skills.performanceDesc',
    },
    {
      icon: Brain,
      titleKey: 'skills.ai',
      descKey: 'skills.aiDesc',
    },
    {
      icon: Users,
      titleKey: 'skills.lead',
      descKey: 'skills.leadDesc',
    },
  ];

  return (
    <div>
      <h3 className="text-3xl md:text-4xl mb-8 text-center bg-gradient-to-r from-[var(--sec)] to-purple-400 bg-clip-text text-transparent">
        {t('capabilities.mainTitle')}
      </h3>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - I join projects that need */}
        <div className="bg-[#1414149c] border border-[var(--white-icon-tr)] rounded-2xl p-6 md:p-8 hover:border-[var(--sec)] transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[var(--sec)] bg-opacity-20">
              <CheckCircle2 className="w-6 h-6 text-[var(--sec)]" />
            </div>
            <h4 className="text-xl md:text-2xl">{t('about.projects')}</h4>
          </div>
          <ul className="space-y-3">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex gap-3 text-[var(--white-icon)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--sec)] flex-shrink-0 mt-0.5" />
                <span>{capability}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-[var(--white-icon-tr)]">
            <p className="text-[var(--white-icon)]">
              {t('about.work')} <span className="text-[var(--sec)] font-medium">{t('about.fractional')}</span>.
            </p>
          </div>
        </div>

        {/* Right Column - Engagement Models */}
        <div className="bg-[#1414149c] border border-[var(--white-icon-tr)] rounded-2xl p-6 md:p-8 hover:border-[var(--sec)] transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[var(--sec)] bg-opacity-20">
              <Briefcase className="w-6 h-6 text-[var(--sec)]" />
            </div>
            <h4 className="text-xl md:text-2xl">{t('skills.title')}</h4>
          </div>
          <div className="space-y-3">
            {engagementModels.map((model, index) => (
              <div key={index} className="w-full">
                <div className="w-full bg-[var(--background)] rounded-xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden hover:border-[var(--sec)]">
                  <button
                    onClick={() => toggleModel(index)}
                    className="flex items-center gap-3 p-3 w-full"
                  >
                    <model.icon className="w-5 h-5 text-[var(--sec)] flex-shrink-0" />
                    <div className="flex items-center gap-2 flex-grow justify-between">
                      <div className="min-w-0 overflow-hidden">
                        <span className="block truncate text-sm md:text-base">
                          {t(model.titleKey)}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform flex-shrink-0 text-[var(--sec)] ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 px-3 ${
                      openIndex === index
                        ? 'max-h-[200px] opacity-100 pb-3'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[var(--white-icon)] text-sm">
                      {t(model.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}