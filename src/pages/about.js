import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from "../components/SEO";

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
                                <p>Hi, I'm Tommy. I like to design and build things. I am a fullstack developer located in Los Angeles. When I am not coding, I like to play Overwatch, do indoor bouldering, or hike Mt. Baldy that's right behind my house.</p>
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
                                <li><strong>Frontend: </strong>JavaScript, React, Redux,  HTML/CSS/SASS, TypeScript, Gatsby, D3/Chart.js, Chakra-UI, Material-UI, Bootstrap</li>
                                <li><strong>Backend: </strong>Node.js, Express.js, SQL (PostgreSQL), NoSQL (MongoDB), GraphQL, Apollo, Python, Authentication (bcrypt, JWT),  Firebase, TDD (Jest, Supertest)</li>
                                <li><strong>Hosting/DevOps: </strong>Docker, Webpack, AWS (EB, EC2, CloudFront), Netlify, Git/Github, Github Actions, Railway, Heroku</li>
                                <li><strong>Graphics/3D Modeling: </strong>Photoshop, Illustrator, InDesign, Rhino, Grasshopper, SketchUp</li>
                            </ul>
                        </div>
                    </div>
                    <div className='experiences'>
                        <div className='profile-topic'>
                            <h2>
                                Experience
                            </h2>
                        </div>
                        <div className='profile-section-info'>
                            <div className='work-experience'>
                                <div className='work-intro'>
                                    <strong className='work-title'>Kensa | Open Source Developer</strong>
                                    <p className='work-year'>Aug 2022 - Present</p>
                                </div>
                                <ul className='work-descriptions'>
                                    <li>Developed GraphQL API monitoring app using React to dynamically generate components at runtime and maintain one-way data flow across the entire application, increasing scalability and creating a more intuitive debugging process</li>
                                    <li>Implemented a GraphQL IDE using Monaco Editor to allow users to test GraphQL queries, providing a one-stop testing and data-monitoring playground to speed up development process for GraphQL schemas and resolvers</li>
                                    <li>Created an npm package for app users to easily establish connection between Apollo server and a SQL database through an API key to collect and store query metrics of all requests that are sent to custom GraphQL API endpoints</li>
                                    <li>Created custom TypeScripts types and interfaces to leverage auto type-checking functionality to minimize bugs and prevent runtime errors, improving application scalability and facilitating cross-development among teams</li>
                                    <li>Integrated Apollo Server to an Express backend to communicate with SQL database and provide a self-documenting GraphQL API to the frontend for faster request queries with strongly typed schemas and fields that provide descriptive error messages before execution</li>
                                    <li>Incorporated Apollo Client to create custom React hooks using predefined GraphQL fields to query the exact data and resources from SQL database in a single request on the client side, eliminating over-fetching or under-fetching problems</li>
                                    <li>Deployed application using AWS Elastic Beanstalk and setup Cloudfront distribution to direct all incoming traffic to registered domain name as well as sending all outgoing requests using a secure HTTPS port</li>
                                </ul>
                            </div>
                            <div className='work-experience'>
                                <div className='work-intro'>
                                    <strong className='work-title'>Freelance | Web Developer</strong>
                                    <p className='work-year'>Jan 2021 - Present</p>
                                </div>
                                <ul className='work-descriptions'>
                                    <li>Completed many websites for clients, including custom sites with HTML/CSS/JS, hosting, handled RESTful requests
                                        with Node.js/Express.js and more miscellaneous web development work</li>
                                    <li>Worked with modules like mongoose and node-postgres for Node.js to interact with MongoDB and PostgreSQL</li>
                                </ul>
                            </div>
                            <div className='work-experience'>
                                <div className='work-intro'>
                                    <strong className='work-title'>SECONEA Architects | Architect</strong>
                                    <p className='work-year'>June 2021 - Dec 2021</p>
                                </div>
                                <ul className='work-descriptions'>
                                    <li>Handled a range of assignment that vary in scope and daily responsibilities, including keeping team effort organized, ensuring quality in project delivery, managing project budgets and schedules</li>
                                    <li>Work with Project Managers to design and adapt projects in accordance with zoning ordinances and building guidelines</li>
                                </ul>
                            </div>
                            <div className='work-experience'>
                                <div className='work-intro'>
                                    <strong className='work-title'>California Polytechnic State University | Student Developer</strong>
                                    <p className='work-year'>Jan 2019 - Aug 2019</p>
                                </div>
                                <ul className='work-descriptions'>
                                    <li>Worked alongside the UI/UX developer for Cal Poly Administration and Finance Department (AFD)</li>
                                    <li>Construct marketing material with Photoshop and Illustrator for Architectural department</li>
                                </ul>
                            </div>
                            <div className='work-experience'>
                                <div className='work-intro'>
                                    <strong className='work-title'>Canterbury Gardens & Gifts | Freelance Web Developer</strong>
                                    <p className='work-year'>Jan 2018 - Sep 2018</p>
                                </div>
                                <ul className='work-descriptions'>
                                    <li>Built website with WordPress and managed a database of SKUs for eCommerce website</li>
                                    <li>Used MailChimp to set up mailing list for advertising and marketing purposes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='experiences'>
                        <div className='profile-topic'>
                            <h2>
                                Etc.
                            </h2>
                        </div>
                        <div className='profile-section-info'>
                            <ul>
                                <li>This site is built with React, SASS, and Gatsby then hosted for free on Netlify. Repo for this portfolio site <a className='about-link' href='https://github.com/tommyli10/tommy-li-com'>here</a>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        </>)
}

export const Head = () => (
    <SEO title={'About'} />
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