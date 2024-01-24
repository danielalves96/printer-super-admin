import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationPT from './translations/pt/translation.json';

const resources = {
  pt: {
    translation: translationPT,
  },
};

const languageDetectorOptions = {
  detection: {
    order: ['cookie', 'navigator'],
    caches: ['cookie'],
    cookieMinutes: 43200,
  },
  caches: ['cookie'],
  cookieMinutes: 6 * 30 * 24 * 60,
};

const i18nConfig = {
  resources,
  fallbackLng: 'pt-BR',
  detection: languageDetectorOptions,
};

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
