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
    allMarkdownRemark( 
        filter: {fileAbsolutePath: {regex: "/(content/projects).*/"}})
    {
        ${projectFields}
    }
}
`
