import React from "react";
import { Link } from "react-router";

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 ">
            <div className="max-w-3xl mx-auto text-center">

                {/* Card */}
                <div className="bg-white shadow-xl rounded-3xl p-10 border border-indigo-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">

                    <h1 className="text-5xl font-extrabold text-indigo-700 tracking-wide">
                        Coupon Management System
                    </h1>

                    <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                        Easily create, manage, and apply coupons for your e-commerce platform.
                        <br />
                        Choose an option from the navigation bar or the buttons below to get started.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex justify-center flex-wrap gap-4">
                        <Link
                            to="/create-coupon"
                            className="px-7 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
                        >
                            Create Coupon
                        </Link>
                        <Link
                            to="/best-coupon"
                            className="px-7 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-2xl font-semibold shadow hover:bg-indigo-50 transform transition hover:scale-105"
                        >
                            Get Best Coupon
                        </Link>
                        <Link
                            to="/coupons"
                            className="px-7 py-3 bg-indigo-100 text-indigo-700 rounded-2xl font-semibold shadow hover:bg-indigo-200 transform transition hover:scale-105"
                        >
                            View Coupon List
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
