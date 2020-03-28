import React, { useState } from 'react';
import { IntlProvider, addLocaleData, intlShape } from 'react-intl'
import { localeData } from './locales'
import { defaultLanguage } from './index'
import { useEffect } from 'react';
import { isSSR } from '../util/isSSR';

const languageContext = React.createContext();
const allMessages = {
    en: require(`./locales/en.js`),
    de: require(`./locales/de.js`),
}
addLocaleData(localeData)

export const LanguageProvider = ({ language: propsLanguage, children }) => {

    const [language, setLanguage] = useState(propsLanguage);
    const messages = allMessages[language];

    const setAndStoreLanguage = (language) => {
        if (!isSSR()) {
            localStorage.setItem('language', language)
        }
        setLanguage(language)
    }

    return (
        <languageContext.Provider value={{
            language,
            setLanguage: setAndStoreLanguage
        }}>
            <IntlProvider locale={language} messages={messages}>
                <>
                    {children}
                </>
            </IntlProvider>
        </languageContext.Provider>
    )
};

export default languageContext;