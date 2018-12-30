const projectFields =  `
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

module.exports = `
{
    en: allMarkdownRemark( 
        filter: {fileAbsolutePath: {regex: "/(content/projects).*/"}})
    {
        ${projectFields}
    }
    de: allMarkdownRemark( 
        filter: {fileAbsolutePath: {regex: "/(content/projects).*/"}})
    {
        ${projectFields}
    }
}
`
