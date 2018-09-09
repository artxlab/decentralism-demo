import React from 'react';
import Subscribe from '../atoms/Subscribe';

const Bottom = () => (
    <div>
        <div className='d-flex flex-column flex-lg-row artx-rule'>
            <img className='img-fluid' src='https://via.placeholder.com/528x260' alt='' aria-hidden='true'/>
            <p className='artx-type-et text-white ml-0 ml-lg-4 mt-4 mt-lg-0'>
            <i>Genesis</i> is co-owned by all Decentralists, who gain profits by trading shares of the work. The Decentralist that most accurately appraises the auction price will win the big award. Learn more about how to win money and this historically significant artwork, <i>Genesis</i>, here. 
            </p>
        </div>
        <Subscribe/>
    </div>
);

export default Bottom;