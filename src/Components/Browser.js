import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase"; // Import the auth object from firebase.js
import { useDispatch } from "react-redux";
import { removerUser } from "../utils/userSlice";

const Browser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        dispatch(removerUser()); // Remove user from the store

        navigate("/"); // Navigate to the login page
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out: ", error);
      });
  };
  return (
    <div>
      <h1>Welcome to the Browser Page</h1>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
      >
        Logout
      </button>
    </div>
  );
};

export default Browser;
