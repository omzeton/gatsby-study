import React from "react";
import { graphql } from "gatsby";

const Markdown = ({ data }) => {
    const { markdownRemark } = data;
    return (
        <div>
            <h1>{markdownRemark.frontmatter.title}</h1>
            <p>{markdownRemark.frontmatter.description}</p>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
        </div>
    );
};

export const pageQuery = graphql`
    query ($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                description
                slug
                title
            }
        }
    }
`;
export default Markdown;
