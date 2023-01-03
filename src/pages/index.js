import * as React from 'react';
import { graphql, Link } from "gatsby";
import Layout from '../components/Layout';
import '../styles/normalize.css';
import '../styles/styles.scss';
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <main className='hero'>
          <div>
            <h1 className='headline'>Holistic software development + design.</h1>
            <p className='subtitles'>Fullstack software engineer located in Los Angeles.</p>
            <div className='hero-links'>
              <Link className='button' to='/work'>See my work</Link>
              <Link className='button' to='/about'>Learn about me</Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO />
)