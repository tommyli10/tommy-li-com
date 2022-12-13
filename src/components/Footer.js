import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default function Footer() {
    return (
        <div>
            <h4>Software Engineer</h4>
            <div>
                <Link to='mailto:tommyli76278@gmail.com'>Portfolio</Link>
                <Link to='https://github.com/tommyli10'>Portfolio</Link>
                <Link to='https://linkedin.com/in/tommyli10'>Linkedin</Link>
            </div>
        </div>
    )
}
