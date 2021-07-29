// import './App.css';
import React from "react";
import backgroundImage from "./assets/bg.jpg";
import fotoProfile from "./assets/foto-pp.JPG";

function App() {
  return (
    <React.Fragment>
      <div className="antialiased relative text-gray-600">
        {/* =================================== */}
        <div className="absolute w-full  min-h-screen">
          <div
            className="absolute top-0 w-full h-1/2 bg-cover bg-bottom"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="absolute left-0 right-0 z-20 bottom-10 inline-flex space-x-20 justify-center uppercase font-bold text-gray-700">
            <a className="hover:text-blue-700" href="#services">
              Services
            </a>
            <a className="hover:text-blue-700" href="#work">
              Work
            </a>
            <a className="hover:text-blue-700" href="#contact">
              Contact
            </a>
          </div>
        </div>
        {/* =================================== */}
        {/* Card Identity */}
        <div className="relative z-10 flex justify-center items-center  min-h-screen h-auto">
          <div className="max-w-4xl relative">
            <div className=" absolute inset-0 transform -skew-x-4 -rotate-6 z-10 w-full max-w-4xl p-12 shadow-lg rounded-xl bg-gradient-to-r from-blue-500 to to-red-500 "></div>
            <div className="animate-bounce   relative z-20 flex bg-white  justify-between w-full max-w-4xl p-12 shadow-lg rounded-xl">
              <div className="flex flex-col justify-between space-y-6 py-9">
                <div>
                  <h2 className="text-lg">Hello I Am</h2>
                  <h1 className="text-4xl font-bold text-gray-800">Muhyiii</h1>
                </div>
                <p className="text-md leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  similique delectus et laudantium explicabo consequuntur in
                  dignissimos blanditiis libero!
                </p>
              </div>
              <img
                src={fotoProfile}
                alt="contoh-foto.jpg"
                className="w-64 h-64 rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
        {/* Card Identity */}
      </div>
    </React.Fragment>
  );
}

export default App;
