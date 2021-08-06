import "./App.css";
import "./animasi.css";
import React from "react";
import foto1 from "./assets/1.png";
import foto2 from "./assets/2.png";
import foto3 from "./assets/3.png";

function App() {
  return (
    <React.Fragment>
      <div className="antialiased font-sans">
        {/* Yang Pertama */}

        <div className="h-screen bg-purple-600 text-white ujung overflow-y-hidden">
          {/* Navbar */}
          <div className="relative grid grid-cols-5 mx-52 py-6 ">
            <h1 className="col-span-2 text-4xl  ">It's Mine</h1>

            <div className="flex inline-flex col-span-3 gap-8 text-xl items-center">
              <a href="#home" className="border-b-2[">
                Home
              </a>
              <a href="#features">Features</a>
              <a href="#screenshots">Screenshots</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          {/* Navbar */}
          {/* Isi */}
          <div className="grid grid-cols-5 mt-14 mx-52 h-96">
            <div className="col-span-3 flex items-center ">
              <div className="gap-y-3">
                <h1 className="text-5xl font-bold mb-5">
                  Best Mobile Template For Your Businnes
                </h1>
                <p className="text-md mt-5 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  dolorum autem quaerat porro repudiandae reiciendis laboriosam
                  neque quae omnis sequi.
                </p>
                <button className="bg-white text-purple-400 w-44 h-12 rounded-3xl mt-16 font-semibold">
                  Download App
                </button>
              </div>
            </div>
            <div className="flex col-span-2 justify-center items-center relative">
              <div className="circle absolute z-10"></div>
              <img src={foto1} className="w-60 a1" alt="" />
            </div>
          </div>
          {/* Isi */}
        </div>
        {/* Yang Pertama */}
        {/* Yang Kedua */}
        <div className="bg-white h-96 mx-52 my-28 mb-36">
          <div className=" flex justify-center gap-x-5 text-4xl font-bold">
            <h1 className="text-black">Awesome</h1>
            <h1 className="text-purple-600 float-right">Features</h1>
          </div>
          <div className="grid grid-cols-3  text-center pt-12  gap-x-8">
            {/* Pertama */}
            <div className="object-cover p-6 shadow-lg    ">
              <h1 className="mb-16">INI ICON</h1>
              <h2>Pertama</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quidem, optio est eaque dolorum omnis illo libero quo cumque et
                inventore?
              </p>
            </div>
            {/* Pertama */}
            {/* Pertama */}
            <div className="object-cover p-6  shadow-lg  ">
              <h1 className="mb-16">INI ICON</h1>
              <h2>Kedua</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quidem, optio est eaque dolorum omnis illo libero quo cumque et
                inventore?
              </p>
            </div>
            {/* Pertama */}
            {/* Pertama */}
            <div className="object-cover p-6   shadow-lg ">
              <h1 className="mb-16">INI ICON</h1>
              <h2>Kedua</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quidem, optio est eaque dolorum omnis illo libero quo cumque et
                inventore?
              </p>
            </div>
            {/* Pertama */}
           
          </div>
          <div className=" flex justify-center gap-x-5 mt-16"  >
              <div className="w-10 h-5 bg-gray-300 rounded-md"></div>
              <div className="w-10 h-5 bg-purple-500 rounded-md"></div>
            </div>
        </div>
        {/* Yang Kedua */}
        {/* Yang Ketiga */}
        
        <div className="h-screen   bg-gray-300">
        <div className="mx-52 grid grid-cols-4 pt-24 pb-24">
          <div className="col-span-2 flex justify-center">
            <img src={foto2} className="w-56" alt="" />
          </div>
          <div className="col-span-2  ">
            <div className="flex font-bold text-3xl gap-x-2">
            <h1>Fun</h1>
            <h1 className="text-purple-600">Facts</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores pariatur, sequi quod atque excepturi voluptatibus dolores! Vitae provident dolores quibusdam repellat cum alias vel nemo quae amet, facere possimus nihil debitis. Eius minima aut autem aliquam deleniti repellendus accusantium earum?</p>
            <div className="grid grid-cols-2 text-center  gap-y-6 gap-x-6">
              <div className="shadow-lg h- h-36 bg-red-500 ">
                <h1 className="text-5xl">4000</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="shadow-lg h- h-36 bg-yellow-500">
                <h1 className="text-5xl">4000</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="shadow-lg h- h-36 bg-green-500 ">
                <h1 className="text-5xl">4000</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="shadow-lg h- h-36 bg-blue-500">
                <h1 className="text-5xl">4000</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

            </div>
          </div>
        </div>
        </div>
        {/* Yang Ketiga */}
      </div>
    </React.Fragment>
  );
}

export default App;
