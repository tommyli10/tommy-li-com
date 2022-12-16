import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

export default function about({ data }) {
    const pic = getImage(data.file.childImageSharp);

    return (
        <>
            <Layout>
                <div className='about'>
                    <div className='intro-section'>
                        <div className='profile-pic'>
                            <GatsbyImage image={pic} alt='profile picture' />
                        </div>
                        <div className='profile-summary'>
                            <div className='summary'>
                                <p>Hi, I'm Tommy, a full-stack software engineer. I believe that the best engineers think like designers. Whether it is building an external API, programmatic API, or user interface, I always remind myself that keeping the user's needs in mind is the heart of a good user experience.</p>
                                <br />
                                <p>My experience ranges from full-stack development to system design and DevOps. I work day-to-day with JavaScript, TypeScript, React/Redux, Node/Express, Apollo GraphQL, and databases (PostgreSQL, Mongoose). I am also a big support and active contributor to open source products.</p>
                            </div>
                            <div className='profile-links'>
                                <Link className='button' to='mailto:tommylidev@gmail.com'>Contact me</Link>
                                <Link className='button' href='/tommy-li-resume.pdf'>Resume</Link>
                            </div>
                        </div>
                    </div>
                    <div className='about-details'>
                        {/* placeholder for in depth about me  */}
                    </div>
                </div>
            </Layout>
        </>)
}


export const query = graphql`
    query GetPicture {
    file(relativePath: {eq: "profile.png"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        },
        gatsbyImageData(placeholder:DOMINANT_COLOR, formats: AUTO)
        }
    }
    }
`