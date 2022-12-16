import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
// import * as styles from '../styles/project-details.scss';

export default function project({ data }) {
    const { html } = data.markdownRemark;
    const { period, description, tech, title, featuredImg, url } = data.markdownRemark.frontmatter;

    const images = featuredImg.map(img => getImage(img));

    return (
        <>
            <Layout>
                <div className='project'>
                    <div className='project-header'>
                        <span className='project-period'>{period}</span>
                        <div className='project-text'>
                            <h1 className='project-title'>{title}</h1>
                            <h2 className='project-description'>{description}</h2>
                        </div>
                        <div className='project-link'>
                            <Link to={url}>{url}</Link>
                        </div>
                    </div>
                    <div className='project-body'>
                        <div className='project-meta'>
                            <ul>
                                {tech.map((item, index) => (
                                    <li key={`${item}-${index}`}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='project-text'>
                        <div
                            className='project-content'
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                    <div className='project-images'>
                        {images.map(img => <GatsbyImage image={img} alt='project picture' />)}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
    query ProjectsPage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                tech
                title
                period
                description
                url
                featuredImg {
                    childImageSharp {
                    fluid {
                        src
                    }
                    gatsbyImageData(placeholder: DOMINANT_COLOR, formats: AUTO)
                    }
                }
            }
        }
    }
`;