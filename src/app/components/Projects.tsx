import { Rocket, PhoneCall, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Project {
  titleKey: string;
  descriptionKey: string;
  detailKeys: string[];
  technologies: string[];
  link?: string;
  highlight?: boolean;
  icon: any;
  image?: string;
}

export function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      titleKey: 'project.screenme',
      descriptionKey: 'project.screenmeDesc',
      detailKeys: [
        'project.screenme1',
        'project.screenme2',
        'project.screenme3',
        'project.screenme4',
        'project.screenme5',
      ],
      technologies: ['AI Integration', 'Dialogue Systems', 'Backend SaaS', 'Product Engineering'],
      link: 'https://www.screenme.pro/',
      icon: Rocket,
    },
    {
      titleKey: 'project.analytics',
      descriptionKey: 'project.analyticsDesc',
      detailKeys: [
        'project.analytics1',
        'project.analytics2',
        'project.analytics3',
        'project.analytics4',
        'project.analytics5',
        'project.analytics6',
        'project.analytics7',
        'project.analytics8',
      ],
      technologies: ['Python', 'Whisper', 'NLP', 'PostgreSQL', 'AI Pipeline'],
      icon: PhoneCall,
    },
  ];

  return (
    <div className="py-0">
      <h3 className="text-3xl md:text-4xl mb-8">{t('projects.title')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-[#1414149c] border ${
              project.highlight
                ? 'border-[var(--sec)] ring-2 ring-[var(--sec)] ring-opacity-20'
                : 'border-[var(--white-icon-tr)]'
            } rounded-2xl p-6 hover:border-[var(--sec)] transition-all duration-300 group`}
          >
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[var(--sec)] bg-opacity-20 group-hover:bg-opacity-30 transition-all">
                    <project.icon className="w-6 h-6 text-[var(--sec)]" />
                  </div>
                  <h4 className="text-xl md:text-2xl group-hover:text-[var(--sec)] transition-colors">
                    {t(project.titleKey)}
                  </h4>
                </div>
                <p className="text-[var(--white-icon)] text-sm md:text-base">
                  {t(project.descriptionKey)}
                </p>
              </div>

              {project.image && (
                <div className="rounded-xl overflow-hidden border border-[var(--white-icon-tr)] max-w-md">
                  <img 
                    src={project.image} 
                    alt={t(project.titleKey)}
                    className="w-full h-auto"
                  />
                </div>
              )}

              <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                {project.detailKeys.map((detailKey, detailIndex) => (
                  <li key={detailIndex} className="flex gap-2">
                    <span className="text-[var(--sec)]">•</span>
                    <span>{t(detailKey)}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-[var(--white-icon-tr)] text-[var(--white-icon)] border border-[var(--white-icon-tr)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--sec)] hover:underline group/link"
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  {t('project.link')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}