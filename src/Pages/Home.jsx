import React from "react";
import assets from "../assets";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-white to-white/30 w-full relative">
        <img src="https://images.unsplash.com/photo-1636955816868-fcb881e57954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full h-full object-cover absolute mix-blend-color-burn opacity-30" alt="" />
        <div className="flex justify-between items-center mx-[86px] py-[77px]">
          <div>
            <p className="text-Accent3 font-semibold text-4xl mb-6">Selamat datang di website resmi</p>
            <p className="text-Accent1 font-bold text-8xl leading-[140px]">BEM HIMATIKA ‘IDENTIKA’ UPI</p>
          </div>
          <div>
            <img src={assets.vektor1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
