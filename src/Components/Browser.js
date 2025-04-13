import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase"; // Import the auth object from firebase.js
import { useDispatch } from "react-redux";
import { removerUser } from "../utils/userSlice";
import Header from "./Header";

const Browser = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browser;
