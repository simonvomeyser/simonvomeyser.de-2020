import React, { useState } from 'react';

const languageContext = React.createContext();

export const LanguageProvider = props => {

    const [language, setLanguage] = useState('en');

    return (
        <languageContext.Provider value={{
            language,
            setLanguage: (language) => setLanguage(language)
        }}>
            {props.children}
        </languageContext.Provider>
    )
};

export default languageContext;