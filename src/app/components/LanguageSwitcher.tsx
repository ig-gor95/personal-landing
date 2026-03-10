import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 md:right-8 z-[101]">
      <div className="flex items-center gap-2 bg-[#1414149c] border border-[var(--white-icon-tr)] backdrop-blur-xl rounded-full px-4 py-2">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full transition-all ${
            language === 'en'
              ? 'bg-[var(--sec)] text-white'
              : 'text-[var(--white-icon)] hover:text-white'
          }`}
        >
          EN
        </button>
        <span className="text-[var(--white-icon)]">|</span>
        <button
          onClick={() => setLanguage('ru')}
          className={`px-3 py-1 rounded-full transition-all ${
            language === 'ru'
              ? 'bg-[var(--sec)] text-white'
              : 'text-[var(--white-icon)] hover:text-white'
          }`}
        >
          RU
        </button>
      </div>
    </div>
  );
}
