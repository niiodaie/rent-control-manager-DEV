import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useGeolocation from './useGeolocation';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const location = useGeolocation();
  const [autoDetected, setAutoDetected] = useState(false);

  // Language mapping based on country codes
  const countryToLanguage = {
    'US': 'en', 'CA': 'en', 'GB': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en',
    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es',
    'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es', 'BO': 'es', 'DO': 'es',
    'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es', 'CR': 'es', 'PA': 'es',
    'UY': 'es', 'GQ': 'es',
    'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'LU': 'fr', 'MC': 'fr', 'SN': 'fr',
    'CI': 'fr', 'ML': 'fr', 'BF': 'fr', 'NE': 'fr', 'TD': 'fr', 'MG': 'fr',
    'CM': 'fr', 'CG': 'fr', 'GA': 'fr', 'DJ': 'fr', 'KM': 'fr', 'VU': 'fr',
    'DE': 'de', 'AT': 'de', 'LI': 'de',
    'IT': 'it', 'SM': 'it', 'VA': 'it',
    'PT': 'pt', 'BR': 'pt', 'AO': 'pt', 'MZ': 'pt', 'GW': 'pt', 'CV': 'pt',
    'ST': 'pt', 'TL': 'pt', 'MO': 'pt',
    'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'SG': 'zh',
    'JP': 'ja',
    'KR': 'ko', 'KP': 'ko',
    'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'IQ': 'ar', 'JO': 'ar', 'KW': 'ar',
    'LB': 'ar', 'LY': 'ar', 'MA': 'ar', 'OM': 'ar', 'PS': 'ar', 'QA': 'ar',
    'SY': 'ar', 'TN': 'ar', 'YE': 'ar', 'BH': 'ar', 'DZ': 'ar', 'SD': 'ar',
    'SO': 'ar', 'MR': 'ar', 'DJ': 'ar', 'KM': 'ar'
  };

  useEffect(() => {
    const detectAndSetLanguage = () => {
      // Check if user has manually selected a language
      const savedLanguage = localStorage.getItem('selectedLanguage');
      const manuallySet = localStorage.getItem('languageManuallySet') === 'true';
      
      if (savedLanguage && manuallySet) {
        // User has manually selected a language, use that
        i18n.changeLanguage(savedLanguage);
        setAutoDetected(false);
        return;
      }

      // Auto-detect based on location
      if (location.countryCode && !location.loading) {
        const detectedLanguage = countryToLanguage[location.countryCode] || 'en';
        
        // Only change if it's different from current language
        if (i18n.language !== detectedLanguage) {
          i18n.changeLanguage(detectedLanguage);
          localStorage.setItem('selectedLanguage', detectedLanguage);
          localStorage.setItem('languageManuallySet', 'false');
          setAutoDetected(true);
        }
      } else if (!savedLanguage) {
        // Fallback to browser language
        const browserLanguage = navigator.language.split('-')[0];
        const supportedLanguages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'ja', 'ko', 'ar'];
        const fallbackLanguage = supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en';
        
        i18n.changeLanguage(fallbackLanguage);
        localStorage.setItem('selectedLanguage', fallbackLanguage);
        localStorage.setItem('languageManuallySet', 'false');
        setAutoDetected(true);
      }
    };

    detectAndSetLanguage();
  }, [location.countryCode, location.loading, i18n]);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem('selectedLanguage', languageCode);
    localStorage.setItem('languageManuallySet', 'true');
    setAutoDetected(false);
  };

  const getLanguageFlag = (languageCode) => {
    const flags = {
      'en': '🇺🇸',
      'es': '🇪🇸',
      'fr': '🇫🇷',
      'de': '🇩🇪',
      'it': '🇮🇹',
      'pt': '🇵🇹',
      'zh': '🇨🇳',
      'ja': '🇯🇵',
      'ko': '🇰🇷',
      'ar': '🇸🇦'
    };
    return flags[languageCode] || '🌐';
  };

  const getLanguageName = (languageCode) => {
    const names = {
      'en': 'English',
      'es': 'Español',
      'fr': 'Français',
      'de': 'Deutsch',
      'it': 'Italiano',
      'pt': 'Português',
      'zh': '中文',
      'ja': '日本語',
      'ko': '한국어',
      'ar': 'العربية'
    };
    return names[languageCode] || languageCode.toUpperCase();
  };

  return {
    currentLanguage: i18n.language,
    autoDetected,
    changeLanguage,
    getLanguageFlag,
    getLanguageName,
    location
  };
};

export default useLanguage;

