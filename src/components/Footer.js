import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default function Footer() {
    return (
        <footer>
            <a href='javascript:void(0);'>Software Engineer</a>
            <div>
                <Link to='mailto:tommylidev@gmail.com'>Contact</Link>
                <Link to='https://github.com/tommyli10'>Github</Link>
                <Link to='https://linkedin.com/in/tommyli10'>Linkedin</Link>
            </div>
        </footer>
    )
}
