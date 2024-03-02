import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to send the form data to the desired email address
    // For demonstration purposes, you can log the data to the console
    console.log("Form Data:", formData);

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-4xl font-bold text-gray-800">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-md bg-gray-100 p-3 focus:border-blue-300 focus:outline-none focus:ring"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md bg-gray-100 p-3 focus:border-blue-300 focus:outline-none focus:ring"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-md bg-gray-100 p-3 focus:border-blue-300 focus:outline-none focus:ring"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-blue-500 to-purple-500 py-3 text-white hover:from-blue-600 hover:to-purple-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
