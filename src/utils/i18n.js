import { useRouter } from "next/router";

export const getTranslation = (key, locale) => {
    const translations = require(`../public/locales/${locale}.json`);
    return translations[key] || key;
};
