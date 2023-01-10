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
                                <li><strong>Frontend: </strong>JavaScript, React, Redux,  HTML/CSS/SASS, TypeScript, Gatsby, D3/Chart.js, Chakra-UI, Material-UI, Bootstrap, WordPress</li>
                                <li><strong>Backend: </strong>Node.js, Express.js, SQL (PostgreSQL), NoSQL (MongoDB), GraphQL, Apollo, Authentication (bcrypt, JWT),  Firebase, TDD (Jest, Supertest)</li>
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
                                    <strong className='work-title'>Peconea Consultancy | Software Engineer</strong>
                                    <p className='work-year'>Mar 2021 - Present</p>
                                </div>
                                <ul className='work-descriptions'>
                                    <li>Worked with clients to understand their needs and design/build websites that align with their visions</li>
                                    <li>Leveraged React, HTML/CSS, and Gatsby to build responsive and performant websites that can scale</li>
                                    <li>Handled RESTful and GraphQL API service requests with Express.js and Apollo backend</li>
                                    <li>Worked with modules like MongoDB and mongoose for database persistence using Node.js to interact with MongoDB</li>
                                    <li>Set up continuous deployment (CD) pipeline for various websites using Github and Netlify</li>
                                    <li>Implemented and used Mailchimp to handle the mailing lists</li>
                                </ul>
                            </div>
                            <div className='work-experience'>
                                <div className='work-intro'>
                                    <strong className='work-title'>Heller Manus Architects | Intern Designer</strong>
                                    <p className='work-year'>Mar 2020 - Aug 2020</p>
                                </div>
                                <ul className='work-descriptions'>
                                    <li>Responsible for planning and designing multiple residential projects in the San Francisco and Greater Los Angeles Metropolitan Area</li>
                                    <li>Developed and maintained project documents using various tools ranging from CAD to data-driven BIM software</li>
                                    <li>Assisted project managers in direction of project planning, budgeting, and establishing critical project objectives</li>
                                    <li>Communicated and worked out solutions with professionals from multiple fields, including engineers and city planners, during various project phases for design and sustainability feedback</li>
                                </ul>
                            </div>
                            <div className='work-experience'>
                                <div className='work-intro'>
                                    <strong className='work-title'>California Polytechnic State University | Front End Developer</strong>
                                    <p className='work-year'>Jan 2019 - Aug 2019</p>
                                </div>
                                <ul className='work-descriptions'>
                                    <li>Worked alongside the UI/UX developer for Cal Poly Administration and Finance Department (AFD)</li>
                                    <li>Created dynamic forms with JavaScript, jQuery, and PHP</li>
                                    <li>Built responsive department pages using Foundation following best practices in accessibility and UI/UX</li>
                                </ul>
                            </div>
                            <div className='work-experience'>
                                <div className='work-intro'>
                                    <strong className='work-title'>Canterbury Gardens & Gifts | Freelance Web Developer</strong>
                                    <p className='work-year'>Jan 2018 - Sep 2018</p>
                                </div>
                                <ul className='work-descriptions'>
                                    <li>Built website with HTML/CSS, JavaScript, and a NoSQL database that are ideal for large amount of store items</li>
                                    <li>Managed a database of SKUs for eCommerce website for brick-and-mortar Christmas store</li>
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