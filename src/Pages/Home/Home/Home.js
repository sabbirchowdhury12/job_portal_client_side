import React from 'react';
import FresherJob from '../FresherJob/FresherJob';
import ExperiencedJob from '../ExperiencedJob/ExperiencedJob';
import ITCompany from '../ITCompany/ITCompany';

const Home = () => {
    return (
        <div>
            <FresherJob />
            <ExperiencedJob />
            <ITCompany />
        </div>
    );
};

export default Home;
