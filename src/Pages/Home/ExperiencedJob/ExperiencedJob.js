import React, { useEffect, useState } from 'react';
import { experiencedJobs } from '../../../Routes/ApiRoutes';

const ExperiencedJob = () => {
    const [experiencedJob, setExperiencedJob] = useState([]);

    useEffect(() => {
        fetch(experiencedJobs)
            .then(res => res.json())
            .then(data => setExperiencedJob(data));
    }, []);



    return (
        <div className='p-5 sm:w-3/5 container mx-auto'>
            <h2 className='text-3xl text-center uppercase font-bold mt-10
            '>Experienced Job</h2>
            {
                experiencedJob.map(job => {
                    return <div className='shadow-lg my-10 p-10 sm:flex items-center justify-between'>
                        <div>
                            <p className='text-2xl font-bold'>{job.positin_name}</p>
                            <div className='md:flex gap-5 my-5'>
                                <p>{job.company_name}</p>
                                <p>{job.job_location}</p>
                            </div>
                        </div>
                        <button>Apply Now</button>
                    </div>;
                })
            }
        </div>
    );
};

export default ExperiencedJob;