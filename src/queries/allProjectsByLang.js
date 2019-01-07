const defaultProjectFields =  `
    totalCount,
    edges {
        node {
            fileAbsolutePath
            frontmatter {
                key
                logo
                name
                excerpt
                technologies
            }
            html
        }
    }
`;

module.exports = (projectFields = defaultProjectFields) => {
    return `
        {
            en: allMarkdownRemark( 
                filter: {fileAbsolutePath: {regex: "/(content/projects/en).*/"}})
            {
                ${projectFields}
            }
            de: allMarkdownRemark( 
                filter: {fileAbsolutePath: {regex: "/(content/projects/de).*/"}})
            {
                ${projectFields}
            }
        }
    `;
}
