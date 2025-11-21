import React, { useState } from "react";

const BestCoupon = () => {
  const [coupon, setCoupon] = useState(null);
  const [loading, setLoading] = useState(false);

  const userCart = {
    user: {
      userId: "u123",
      userTier: "NEW",
      country: "IN",
      lifetimeSpend: 1200,
      ordersPlaced: 0,
    },
    cart: {
      items: [
        { productId: "p1", category: "electronics", unitPrice: 1500, quantity: 1 },
        { productId: "p2", category: "fashion", unitPrice: 500, quantity: 2 },
      ],
    },
  };

  const handleBestCoupon = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/coupons/best", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userCart),
      });

      const data = await res.json();
      setCoupon(data.bestCoupon);
    } catch (err) {
      console.error("Error fetching best coupon:", err);
      alert("Failed to fetch best coupon. Check server logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-indigo-100 hover:shadow-2xl transition duration-300">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-3">
            Best Coupon Finder
          </h2>

          <p className="text-center text-gray-600 mb-6">
            Click the button to find the best eligible coupon for your cart.
          </p>

          <button
            onClick={handleBestCoupon}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-xl mb-6 shadow hover:scale-105 transform transition"
          >
            {loading ? "Loading..." : "Get Best Coupon"}
          </button>

          {coupon ? (
            <div className="bg-gradient-to-r from-green-100 to-green-200 p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <p className="text-xl font-semibold text-green-800 mb-2">
                Code: <span className="font-bold">{coupon.code}</span>
              </p>
              <p className="text-gray-700 mb-2">{coupon.description}</p>
              <p className="text-lg font-bold text-green-900">
                Discount: <span className="text-2xl">₹{coupon.discount}</span>
              </p>
            </div>
          ) : (
            !loading && (
              <p className="text-center text-red-500 mt-4">
                No eligible coupon found for this user or cart.
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BestCoupon;
