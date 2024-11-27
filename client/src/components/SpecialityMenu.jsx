import React from 'react';
import { subjectData } from '../assets/assets'; // Ensure subjectData is an array
import { Link } from 'react-router-dom'; // If you plan to add navigation

const SpecialityMenu = () => {
    return (
        <div id='subject' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Different Subjects Offered</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply request a session hassle-free.</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
                {subjectData.map((item, index) => (
                    <div key={index} className="text-center">
                        <img className='w-16 sm:w-24 mb-2' src={item.image} alt={item.subject} />
                        <p>{item.subject}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialityMenu;
