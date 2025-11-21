import React, { useEffect, useState } from "react";

const CouponList = () => {
  const [coupons, setCoupons] = useState([]);

  const fetchCoupons = async () => {
    try {
      const res = await fetch("https://coupon-ui-backend.vercel.app/api/coupons");
      const data = await res.json();
      setCoupons(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-12 p-6">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
        Available Coupons
      </h2>

      {coupons.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No coupons available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coupons.map((c, index) => (
            <div
              key={index}
              className="relative p-6 rounded-3xl shadow-xl bg-gradient-to-r from-blue-50 via-white to-blue-50 border-t-4 border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute -top-3 left-6 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                {c.discountType === "FLAT"
                  ? `₹${c.discountValue} OFF`
                  : `${c.discountValue}% OFF`}
              </div>
              <h3 className="text-2xl font-bold text-indigo-700 mt-4 mb-2">{c.code}</h3>
              <p className="text-gray-700 mb-3">{c.description}</p>
              <p className="text-gray-800 mb-1">
                <span className="font-medium">Validity:</span> {c.startDate} to {c.endDate}
              </p>
              <p className="text-gray-800 mb-1">
                <span className="font-medium">Categories:</span>{" "}
                {c.eligibility?.applicableCategories?.join(", ") || "All"}
              </p>
              <p className="text-gray-600 text-sm">
                First Order Only: {c.eligibility?.firstOrderOnly ? "Yes" : "No"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CouponList;
