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
      setForm({
        ...form,
        [name]: value,
      });
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
      const res = await axios.post("http://localhost:5000/api/coupons", payload);

      alert("Coupon created successfully!");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Error creating coupon!");
    }
  };

  return (
    <div>

      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Create Coupon</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

          <input name="code" onChange={handleChange} className="border p-2" placeholder="Coupon Code" required />

          <input name="description" onChange={handleChange} className="border p-2" placeholder="Description" required />

          <select
            name="discountType"
            onChange={handleChange}
            className="border p-2"
          >
            <option value="FLAT">Flat</option>
            <option value="PERCENT">Percent</option>
          </select>

          <input name="discountValue" onChange={handleChange} className="border p-2" placeholder="Discount Value" required />

          <input name="maxDiscountAmount" onChange={handleChange} className="border p-2" placeholder="Max Discount Amount (optional)" />

          <input type="date" name="startDate" onChange={handleChange} className="border p-2" required />

          <input type="date" name="endDate" onChange={handleChange} className="border p-2" required />

          <input name="usageLimitPerUser" onChange={handleChange} className="border p-2" placeholder="User Limit" />

          {/* Eligibility Section */}
          <div className="col-span-2 border p-4 mt-4 rounded">
            <h2 className="text-lg font-bold mb-2">Eligibility</h2>

            <input
              name="eligibility.allowedUserTiers"
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Allowed User Tiers (comma-separated)"
            />

            <input
              name="eligibility.allowedCountries"
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Allowed Countries (comma-separated)"
            />

            <input
              name="eligibility.minLifetimeSpend"
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Min Lifetime Spend"
            />

            <input
              name="eligibility.minOrdersPlaced"
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Min Orders"
            />

            <label className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                name="eligibility.firstOrderOnly"
                onChange={handleChange}
              />
              First Order Only
            </label>

            <input
              name="eligibility.minCartValue"
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Min Cart Value"
            />

            <input
              name="eligibility.applicableCategories"
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Applicable Categories (comma-separated)"
            />

            <input
              name="eligibility.excludedCategories"
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Excluded Categories (comma-separated)"
            />

            <input
              name="eligibility.minItemsCount"
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Min Items Count"
            />
          </div>

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white p-2 rounded"
          >
            Create Coupon
          </button>
        </form>
      </div>
    </div>
  );
}
