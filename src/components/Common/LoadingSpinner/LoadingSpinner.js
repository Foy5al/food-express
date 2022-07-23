import React from 'react';
import { Placeholder } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div className='container-fluid  vh-100 text-center'>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
            </Placeholder>
        </div>
    );
};

export default LoadingSpinner;