import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const gotoHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">404 Not Found</h1>
        <p className="mb-8 text-lg">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <button
          onClick={gotoHomePage}
          className="rounded-full bg-white px-6 py-3 font-semibold text-gray-800 hover:bg-gray-300 focus:outline-none"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
