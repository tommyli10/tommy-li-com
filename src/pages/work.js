import React from 'react';
import Project from '../components/Project-Title';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';

export default function projects({ data }) {
    const projects = data.projects.nodes;

    return (
        <>
            <Layout>
                <div className='work'>
                    <div className='projects'>
                        <div className='projects-list'>
                            {projects.map(project => (
                                <Project
                                    title={project.frontmatter.title}
                                    url={project.frontmatter.slug}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
    query AllProjects {
        projects: allMarkdownRemark(sort: {frontmatter: {period: ASC}}) {
            nodes {
                frontmatter {
                    slug
                    title
                    period
                }
            }
        }
    }
`;