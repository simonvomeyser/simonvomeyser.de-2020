import React, { useState } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl'
import { localeData } from './locales'

addLocaleData(localeData)

const languageContext = React.createContext();

export const LanguageProvider = props => {

    const [language, setLanguage] = useState('en');
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
                    {props.children}
                </>
            </IntlProvider>
        </languageContext.Provider>
    )
};

export default languageContext;