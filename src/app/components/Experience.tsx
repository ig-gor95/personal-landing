import { Building2, Mail, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ExperienceItem {
  companyKey: string;
  roleKey: string;
  descriptionKeys: string[];
  technologies?: string[];
  icon: any;
}

export function Experience() {
  const { t } = useLanguage();

  const experiences: ExperienceItem[] = [
    {
      companyKey: 'exp.yandex',
      roleKey: 'exp.yandexRole',
      descriptionKeys: ['exp.yandex1', 'exp.yandex2', 'exp.yandex3', 'exp.yandex4', 'exp.yandex5'],
      icon: Building2,
    },
    {
      companyKey: 'exp.post',
      roleKey: 'exp.postRole',
      descriptionKeys: ['exp.post1', 'exp.post2', 'exp.post3'],
      icon: Mail,
    },
    {
      companyKey: 'exp.crpt',
      roleKey: 'exp.crptRole',
      descriptionKeys: ['exp.crpt1', 'exp.crpt2', 'exp.crpt3'],
      icon: Shield,
    },
  ];

  return (
    <div className="py-0">
      <h3 className="text-3xl md:text-4xl mb-8">{t('exp.title')}</h3>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-[var(--white-icon-tr)]">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--sec)] ring-4 ring-[var(--background)]"></div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <exp.icon className="w-6 h-6 text-[var(--sec)]" />
                <h4 className="text-xl md:text-2xl">{t(exp.companyKey)}</h4>
              </div>
              <p className="text-lg text-[var(--sec)] shiny-purple">{t(exp.roleKey)}</p>

              <ul className="space-y-2 text-[var(--white-icon)]">
                {exp.descriptionKeys.map((descKey, descIndex) => (
                  <li key={descIndex} className="flex gap-2">
                    <span className="text-[var(--sec)] mt-1">•</span>
                    <span>{t(descKey)}</span>
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-[var(--white-icon-tr)] text-[var(--white-icon)] border border-[var(--white-icon-tr)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}