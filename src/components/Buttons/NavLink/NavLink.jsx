import Link from 'next/link';
import React from 'react';

const NavLink = ({href, navName}) => {
    return (
        <Link href={href} className='NavLink'>
            {navName}
        </Link>
    );
};

export default NavLink;