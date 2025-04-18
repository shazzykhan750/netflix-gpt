import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-scree aspect-video pt-[20%] px-24  absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-6xl font-bold">{title}</h1>
      <p className="text-lg font-bold w-1/4 mt-4 ">{overview}</p>
      <div className="mt-4">
        <button className="cursor-pointer px-10 py-2 text-lg text-black bg-white font-bold  rounded-lg">
          Play
        </button>
        <button className="cursor-pointer  px-10 ml-2 py-2 text-lg text-white bg-gray-500 bg-opacity-50 hover:bg-opacity-90 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
