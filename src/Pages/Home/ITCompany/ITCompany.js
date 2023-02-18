import React, { useEffect, useState } from 'react';
import { ITcompanies } from '../../../Routes/ApiRoutes';

const ITCompany = () => {

    const [ITCompanies, setITCompanies] = useState([]);

    useEffect(() => {
        fetch(ITcompanies)
            .then(res => res.json())
            .then(data => setITCompanies(data));
    }, []);



    return (
        <div className='p-5 sm:w-3/5 container mx-auto'>
            <h2 className='text-3xl text-center uppercase font-bold mt-10
            '>IT Company</h2>
            <div className='md:grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
                {
                    ITCompanies.map(job => {
                        return <div className='shadow-lg my-10 p-10'>
                            <div>
                                <img src={job.img} alt=' ' className='h-28' />
                                <p className='text-2xl font-bold'>{job.positin_name}</p>
                                <div className='my-5 text-xl font-bold'>
                                    <p>{job.company_name}</p>

                                </div>
                            </div>
                            <button>Veiw Details</button>
                        </div>;
                    })
                }
            </div>
        </div>
    );
};

export default ITCompany;