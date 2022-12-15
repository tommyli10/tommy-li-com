import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default function Header() {
    return (
        <header>
            <Link to='/'>Tommy Li</Link>
            <div>
                <Link to='/work'>Portfolio</Link>
                <Link to='/about'>About</Link>
                <Link to='/misc'>Misc</Link>
            </div>
        </header>
    )
}
