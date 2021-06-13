const path = require("path");
const data = require("./src/data/pageData");

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    data.forEach(page => {
        createPage({
            path: page.slug,
            component: path.resolve("./src/templates/Generic.js"),
            context: {
                title: page.title,
                description: page.description,
            },
        });
    });

    const mdPages = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);

    mdPages.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: path.resolve("./src/templates/Markdown.js"),
            context: {
                slug: node.frontmatter.slug,
            },
        });
    });
};
