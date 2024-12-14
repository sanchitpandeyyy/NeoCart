"use client";
import { useState } from "react";

const Summary = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    province: "",
    zipCode: "",
    extraDetails: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
  };

  return (
    <form
      className="max-w-lg mx-auto p-6 bg-white grid grid-cols-2 gap-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="firstName" className="block font-semibold mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block font-semibold mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block font-semibold mb-2">
          Phone Number
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="province" className="block font-semibold mb-2">
          Province
        </label>
        <input
          type="text"
          id="province"
          name="province"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={formData.province}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="zipCode" className="block font-semibold mb-2">
          Zip Code
        </label>
        <input
          type="number"
          id="zipCode"
          name="zipCode"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="extraDetails" className="block font-semibold mb-2">
          Extra Details
        </label>
        <textarea
          id="extraDetails"
          name="extraDetails"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={formData.extraDetails}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            className="mr-2"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          I accept the terms and conditions
        </label>
      </div>
    </form>
  );
};

export default Summary;
