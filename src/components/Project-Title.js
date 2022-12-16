import React from 'react';
import { Link } from 'gatsby';

export default function Project({ title, period, url }) {
    return (
        <Link to={`/work/${url}`} className='project-preview'>
            <h1 className='project-preview-title'>{title}</h1>
        </Link>
    )
}
