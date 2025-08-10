import React from 'react';

import { Outlet } from 'react-router';
import Nav from './Nav';

const Root = () => {
    return (
        <div className='bg-base-100'>
            <Nav></Nav>
            <div >
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;