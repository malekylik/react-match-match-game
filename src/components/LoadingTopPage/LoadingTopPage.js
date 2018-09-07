import React from 'react';

import Spinner from '../Spinner/Spinner';

import './LoadingTopPage.css';

const LoadingTopPage = () => (
    <div style={{ width: 300, height: 200 }} className="loading-top">
        <Spinner />
    </div>
);

export default LoadingTopPage;
