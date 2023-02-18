import React, { useEffect, useState } from 'react';
import { fresherJobs } from '../../../Routes/ApiRoutes';

const FresherJob = () => {

    const [fresherJob, setFresherJob] = useState([]);

    useEffect(() => {
        fetch(fresherJobs)
            .then(res => res.json())
            .then(data => setFresherJob(data));
    }, []);



    return (
        <div className='p-5 sm:w-3/5 container mx-auto'>
            <h2 className='text-3xl text-center uppercase font-bold mt-10
            '>Fresher Job</h2>
            {
                fresherJob.map(job => {
                    return <div className='shadow-lg my-10 p-10 sm:flex items-center justify-between'>
                        <div>
                            <p className='text-2xl font-bold'>{job.positin_name}</p>
                            <div className='md:flex gap-5 my-5'>
                                <p>{job.company_name}</p>
                                <p>{job.job_location}</p>
                            </div>
                        </div>
                        <button className='text-white bg-blue-900 p-2 rounded-md'>Apply Now</button>
                    </div>;
                })
            }
            <button className='text-center font-bold block w-full  my-5 text-blue-900'>SEE ALL</button>
        </div>
    );
};

export default FresherJob;