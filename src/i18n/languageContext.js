import React, { useState } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl'
import { localeData } from './locales'
import { defaultLanguage } from './index'
import { useEffect } from 'react';

const languageContext = React.createContext();
const allMessages = {
    en: require(`./locales/en.js`),
    de: require(`./locales/de.js`),
}
addLocaleData(localeData)

export const LanguageProvider = ({ language: propsLanguage, children }) => {

    const [language, setLanguage] = useState(propsLanguage);
    const messages = allMessages[language];

    return (
        <languageContext.Provider value={{
            language,
            setLanguage
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