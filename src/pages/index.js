import * as React from 'react';
import { graphql, Link } from "gatsby";
import Layout from '../components/Layout';
import '../styles/normalize.css';
import '../styles/styles.scss';

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <div>
          <h1>Holistic software development + design</h1>
          <p>I like to design and build things.</p>
          <div>
            <Link className='button' to='/work'>See my work</Link>
            <Link className='button' to='/about'>About me</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
