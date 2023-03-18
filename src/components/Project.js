import React from "react";
import LeftArrow from "../assets/image/arrow-right-short.svg";

const Project = () => {
  return (
    <>
      <div className="mt-40 text-white px-52">
        <div className="flex items-center">
          <h1 className="text-4xl text-white text-center">Project</h1>
          <hr className="w-full border-yellow-600 border-t-4 ml-2" />
        </div>
        <div className="w-full grid grid-cols-2 gap-4 mt-16">
          <div className="w-full bg-slate-200 h-64 relative group transition-transform duration-500">
            <div className="card-hovered"></div>
            <div className="hovered-content h-full flex flex-col justify-center items-center">
              <h3 className="text-black text-4xl font-semibold">
                Portfolio Item
              </h3>
              <h3 className="py-4 text-2xl">Mangalime</h3>
              <div className="w-14 h-14 bg-transparent border-solid border-black border-2 rounded-full flex justify-center items-center ease-out duration-300 transition-all cursor-pointer hover:bg-white">
                <img src={LeftArrow} alt="special" className="w-10" />
              </div>
            </div>
            <img
              src="https://plus.unsplash.com/premium_photo-1671269943771-63db2ab54bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="tet"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="w-full bg-slate-200 h-64 relative group transition-transform duration-500">
            <div className="card-hovered"></div>
            <div className="hovered-content h-full flex flex-col justify-center items-center">
              <h3 className="text-black text-4xl font-semibold">
                Portfolio Item
              </h3>
              <h3 className="py-4 text-2xl">Mangalime</h3>
              <div className="w-14 h-14 bg-transparent border-solid border-black border-2 rounded-full flex justify-center items-center ease-out duration-300 transition-all cursor-pointer hover:bg-white">
                <img src={LeftArrow} alt="special" className="w-10" />
              </div>
            </div>
            <img
              src="https://plus.unsplash.com/premium_photo-1671269943771-63db2ab54bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="tet"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="w-full bg-slate-200 h-64 relative group transition-transform duration-500">
            <div className="card-hovered"></div>
            <div className="hovered-content h-full flex flex-col justify-center items-center">
              <h3 className="text-black text-4xl font-semibold">
                Portfolio Item
              </h3>
              <h3 className="py-4 text-2xl">Mangalime</h3>
              <div className="w-14 h-14 bg-transparent border-solid border-black border-2 rounded-full flex justify-center items-center ease-out duration-300 transition-all cursor-pointer hover:bg-white">
                <img src={LeftArrow} alt="special" className="w-10" />
              </div>
            </div>
            <img
              src="https://plus.unsplash.com/premium_photo-1671269943771-63db2ab54bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="tet"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="w-full bg-slate-200 h-64 relative group transition-transform duration-500">
            <div className="card-hovered"></div>
            <div className="hovered-content h-full flex flex-col justify-center items-center">
              <h3 className="text-black text-4xl font-semibold">
                Portfolio Item
              </h3>
              <h3 className="py-4 text-2xl">Mangalime</h3>
              <div className="w-14 h-14 bg-transparent border-solid border-black border-2 rounded-full flex justify-center items-center ease-out duration-300 transition-all cursor-pointer hover:bg-white">
                <img src={LeftArrow} alt="special" className="w-10" />
              </div>
            </div>
            <img
              src="https://plus.unsplash.com/premium_photo-1671269943771-63db2ab54bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="tet"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
