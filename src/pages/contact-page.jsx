import React, { useState, useEffect } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Fetch IP based city and pre-fill if available
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => {
        fetch(`https://ipapi.co/${data.ip}/json/`)
          .then((response) => response.json())
          .then((data) => {
            setFormData((prevData) => ({
              ...prevData,
              city: data.city || "",
            }));
          })
          .catch((error) => console.error("Error fetching location:", error));
      })
      .catch((error) => console.error("Error fetching IP:", error));
  }, []);

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
      phonenumber: "",
      city: "",
      message: "",
    });
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        {!submitted ? (
          <>
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
                  htmlFor="phonenumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phonenumber"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  pattern="[0-9]+"
                  inputMode="numeric"
                  className="mt-1 w-full rounded-md bg-gray-100 p-3 focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
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
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-blue-500 to-purple-500 py-3 text-white hover:from-blue-600 hover:to-purple-600 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="text-center text-2xl font-semibold text-gray-800">
            Thank you for your submission!
          </div>
        )}
      </div>
    </div>
  );
}
