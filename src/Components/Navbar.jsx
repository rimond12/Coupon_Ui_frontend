import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white ">
            <div className='max-w-7xl mx-auto p-4 flex justify-center gap-6 '>
                <Link to="/">Home</Link>
                <Link to="/create-coupon">Create Coupon</Link>
                <Link to="/best-coupon">Best Coupon</Link>
                <Link to="/coupons">Coupon List</Link>
            </div>
        </nav>
    );
}

export default Navbar;