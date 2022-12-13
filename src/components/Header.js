import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default function Header() {
    return (
        <nav>
            <Link to='/'>Tommy Li</Link>
            <div>
                <Link to='/work'>Portfolio</Link>
                <Link to='/about'>About</Link>
                <Link to='/misc'>Other Stuff</Link>
            </div>
        </nav>
    )
}
