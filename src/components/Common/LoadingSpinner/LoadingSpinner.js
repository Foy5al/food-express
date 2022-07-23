import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='text-center'>
            <div className="spinner-grow me-2" style={{ width: '3rem', height: '3rem' }} role="status">
            </div>
            <div className="spinner-grow me-2" style={{ width: '3rem', height: '3rem' }} role="status">
            </div>
        </div>
    );
};

export default LoadingSpinner;