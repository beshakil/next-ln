
"use client";

import { Spinner } from '@heroui/react';
import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center mt-60'>
            <Spinner color="primary" labelcolor="primary" size="lg"/>
        </div>
    );
};

export default Loading;