import * as React from "react";
import { graphql, Link } from "gatsby";
import '../styles/styles.scss'

const IndexPage = () => {
  return (
    <main>
      <h1>Tommy Li</h1>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
