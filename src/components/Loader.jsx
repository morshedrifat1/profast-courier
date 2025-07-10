import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <HashLoader color="#caeb66" />
        </div>
    );
};

export default Loader;