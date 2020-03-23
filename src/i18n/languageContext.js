import React, { useState } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl'
import { localeData } from './locales'
import { defaultLanguage } from './index'

addLocaleData(localeData)

const languageContext = React.createContext();

export const LanguageProvider = ({ language: propsLanguage, children }) => {

    const [language, setLanguage] = useState(propsLanguage);
    const messages = {
        en: require(`./locales/en.js`),
        de: require(`./locales/de.js`),
    }
    return (
        <languageContext.Provider value={{
            language,
            setLanguage: (language) => setLanguage(language)
        }}>
            <IntlProvider locale={language} messages={messages[language]}>
                <>
                    {children}
                </>
            </IntlProvider>
        </languageContext.Provider>
    )
};

export default languageContext;