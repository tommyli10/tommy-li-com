import React from 'react';
import Project from '../components/Project-Title';
import Layout from '../components/Layout';

export default function projects() {
    const titles = ['Test', 'mate'];

    return (
        <>
            <Layout>
                <div className='misc'>
                    <div className='misc-titles'>
                        <div className='misc-list'>
                            {titles.map(title => (
                                <Project title={title} />
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
