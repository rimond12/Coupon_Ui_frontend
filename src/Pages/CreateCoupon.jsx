import { useState } from "react";
import axios from "axios";

export default function CreateCoupon() {

  const [form, setForm] = useState({
    code: "",
    description: "",
    discountType: "FLAT",
    discountValue: "",
    maxDiscountAmount: "",
    startDate: "",
    endDate: "",
    usageLimitPerUser: "",
    eligibility: {
      allowedUserTiers: "",
      minLifetimeSpend: "",
      minOrdersPlaced: "",
      firstOrderOnly: false,
      allowedCountries: "",
      minCartValue: "",
      applicableCategories: "",
      excludedCategories: "",
      minItemsCount: "",
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("eligibility.")) {
      const key = name.split(".")[1];
      setForm({
        ...form,
        eligibility: {
          ...form.eligibility,
          [key]: type === "checkbox" ? checked : value,
        },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      discountValue: Number(form.discountValue),
      maxDiscountAmount: Number(form.maxDiscountAmount),
      usageLimitPerUser: Number(form.usageLimitPerUser),
      eligibility: {
        allowedUserTiers: form.eligibility.allowedUserTiers
          ? form.eligibility.allowedUserTiers.split(",")
          : [],
        allowedCountries: form.eligibility.allowedCountries
          ? form.eligibility.allowedCountries.split(",")
          : [],
        applicableCategories: form.eligibility.applicableCategories
          ? form.eligibility.applicableCategories.split(",")
          : [],
        excludedCategories: form.eligibility.excludedCategories
          ? form.eligibility.excludedCategories.split(",")
          : [],
        minLifetimeSpend: Number(form.eligibility.minLifetimeSpend),
        minOrdersPlaced: Number(form.eligibility.minOrdersPlaced),
        minCartValue: Number(form.eligibility.minCartValue),
        minItemsCount: Number(form.eligibility.minItemsCount),
        firstOrderOnly: form.eligibility.firstOrderOnly,
      },
    };

    try {
      const res = await axios.post("https://coupon-ui-backend.vercel.app/api/coupons", payload);
      alert("✅ Coupon created successfully!");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("❌ Error creating coupon!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-5xl p-8">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
          Create Coupon
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Info */}
          <div>
            <label className="block font-medium mb-1">Coupon Code</label>
            <input
              name="code"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter coupon code"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <input
              name="description"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter description"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Discount Type</label>
            <select
              name="discountType"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="FLAT">Flat</option>
              <option value="PERCENT">Percent</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Discount Value</label>
            <input
              name="discountValue"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter discount value"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Max Discount Amount</label>
            <input
              name="maxDiscountAmount"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Optional"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Usage Limit per User</label>
            <input
              name="usageLimitPerUser"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Optional"
            />
          </div>

          {/* Eligibility Section */}
          <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Eligibility</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Allowed User Tiers</label>
                <input
                  name="eligibility.allowedUserTiers"
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="Comma-separated"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Allowed Countries</label>
                <input
                  name="eligibility.allowedCountries"
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="Comma-separated"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Min Lifetime Spend</label>
                <input
                  name="eligibility.minLifetimeSpend"
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Min Orders Placed</label>
                <input
                  name="eligibility.minOrdersPlaced"
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="0"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="eligibility.firstOrderOnly"
                  onChange={handleChange}
                  className="w-5 h-5 accent-blue-500"
                />
                <label className="font-medium">First Order Only</label>
              </div>

              <div>
                <label className="block font-medium mb-1">Min Cart Value</label>
                <input
                  name="eligibility.minCartValue"
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Applicable Categories</label>
                <input
                  name="eligibility.applicableCategories"
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="Comma-separated"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Excluded Categories</label>
                <input
                  name="eligibility.excludedCategories"
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="Comma-separated"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Min Items Count</label>
                <input
                  name="eligibility.minItemsCount"
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="col-span-1 md:col-span-2 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold p-3 rounded-xl shadow-lg transition-all duration-200"
          >
            Create Coupon
          </button>
        </form>
      </div>
    </div>
  );
}
