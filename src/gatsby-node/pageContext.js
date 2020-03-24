import React from 'react'

const pageContext = React.createContext()

export function PageContextProvider({ pageData, children }) {
    return (
        <pageContext.Provider value={pageData}>
            {children}
        </pageContext.Provider>
    )
}

export default pageContext;