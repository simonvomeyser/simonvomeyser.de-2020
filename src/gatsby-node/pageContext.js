import React from 'react'

const { getPathKey } = require('../i18n/translatedPathHelper')

const pageContext = React.createContext()

export function PageContextProvider({ pageData, children }) {
    pageData.isFrontpage = pageData.path === '/';
    pageData.key = getPathKey(pageData.path) || 'index';

    return (
        <pageContext.Provider value={pageData}>
            {children}
        </pageContext.Provider>
    )
}

export default pageContext;