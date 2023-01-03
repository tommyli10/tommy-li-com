import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import { SEO } from "../components/seo";

export default function about({ data }) {
    const pic = getImage(data.file.childImageSharp);

    return (
        <>
            <Layout>
                <div className='about'>
                    <div className='about-intro-section'>
                        <div className='profile-pic'>
                            <GatsbyImage image={pic} alt='profile picture' />
                        </div>
                        <div className='profile-summary'>
                            <div>
                                <p>Hi, I'm Tommy. I like to design and build things. I am a fullstack developer located in Los Angeles.</p>
                                <br />
                                <p>Other than designing and creating responsive websites for individuals and small businesses, I am also an advocate and contributor for open source products that help developers.</p>
                            </div>
                            <div className='profile-links'>
                                <Link className='button' to='mailto:tommylidev@gmail.com'>Contact me</Link>
                                <Link className='button' href='/tommy-li-resume.pdf'>Resume</Link>
                            </div>
                        </div>
                    </div>
                    <div className='experiences'>
                        <div className='profile-topic'>
                            <h2>
                                Process
                            </h2>
                        </div>
                        <div className='profile-section-info'>
                            <p>I have a degree in architecture, and years of working with engineers and desinging building systems with many parts led me to believe that the best engineers think like designers. Whether it is building an external API, programmatic API, or user interface, I always remind myself that keeping the user's needs in mind is the heart of a good user experience.</p>
                            <br />
                            <p>While I like to learn new technologies to expand my toolset, I value working software over specific tools. This is because I've been caught in analysis paralysis and realized that I learn more by just start solving problems, and that will often lead me to iterate into better solutions.</p>
                        </div>
                    </div>
                    <div className='experiences'>
                        <div className='profile-topic'>
                            <h2>
                                Skills
                            </h2>
                        </div>
                        <div className='profile-section-info'>
                            <ul>
                                <li><strong>Technical: </strong>JavaScript, React (Hooks, Router), Redux, Node.js, Express, SQL (PostgreSQL), NoSQL (MongoDB), GraphQL, Apollo, TypeScript
                                    Authentication (bcrypt, JWT), Webpack, Gatsby, Git/Github, Chart.js, Chakra UI, Material UI, Bootstrap, HTML/CSS/SAS, TDD (Jest, Supertest),
                                    Docker, AWS, Netlify, WordPress</li>
                                <li><strong>Graphics/3D Modeling: </strong>Photoshop, Illustrator, InDesign, Rhino, Grasshopper, SketchUp</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        </>)
}

export const Head = () => (
    <SEO title={'About Page'} />
)

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