import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

const Browser = () => {
  const user = useSelector((store) => store.user.user);
  console.log("User from Redux Store:", user);

  return (
    <div>
      <Header />
      {/* Add padding to prevent overlap */}
      <div className="pt-30 relative">
        {user ? (
          <h1 className="text-2xl px-5 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-fadeIn">
            {user.displayName} i love you
          </h1>
        ) : (
          <h1 className="text-2xl px-5 font-bold text-black-500">
            Welcome, Guest!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Browser;
