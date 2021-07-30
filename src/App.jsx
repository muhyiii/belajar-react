// import './App.css';
import React from "react";
import backgroundImage from "./assets/bg.jpg";
import fotoProfile from "./assets/foto-pp.JPG";
import serviceImage1 from "./assets/service-image-1.png";
import serviceImage2 from "./assets/service-image-2.png";
import serviceImage3 from "./assets/service-image-3.jpg";
import workSection1 from "./assets/work-section-1.JPG";
import workSection2 from "./assets/work-section-2.jpg";
import workSection3 from "./assets/work-section-3.jpg";
import workSection4 from "./assets/work-section-4.jpg";

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
            <div className="animate-bounce transition ease-in duration-1000 relative z-20 flex bg-white  justify-between w-full max-w-4xl p-12 shadow-lg rounded-xl">
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

        {/* Services */}
        <section id="services" className="bg-gray-200 pt-20 pb-28 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Judul */}
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-700">Services</h1>
              <p className="pt-2 text-xl ">Here's What I Offer</p>
            </div>
            {/* Judul */}
            <div className="mt-24 grid grid-cols-3 gap-20">
              {/* service 1 */}
              <div className="relative">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to-red-500 transform -skew-x-4 -rotate-6 rounded-lg "></div>
                <div className="relative z-20 bg-white h-full rounded-md shadow-md ">
                  <img
                    className="rounded-t-md"
                    style={{ height: "240px" }}
                    src={serviceImage1}
                    alt="service.jpg"
                  />
                  <div className="px-10 pb-6">
                    <h2 className="pt-3 font-bold text-2xl">
                      Responsive Website
                    </h2>
                    <p className="pt-2 font-semibold">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum, fugiat quia. Id qui recusandae, praesentium
                      voluptatum aliquid veritatis!
                    </p>
                  </div>
                </div>
              </div>
              {/* service 1 */}
              {/* Service 2 */}
              <div className="relative">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to-red-500 transform -skew-x-4 -rotate-6 rounded-lg "></div>
                <div className="relative z-20 bg-white h-full rounded-md shadow-md ">
                  <img
                    className="rounded-t-md bg-blue-200"
                    style={{ height: "240px" }}
                    src={serviceImage2}
                    alt="service.jpg"
                  />
                  <div className="px-10 pb-6">
                    <h2 className="pt-3 font-bold text-2xl">
                      Mobile Applications
                    </h2>
                    <p className="pt-2 font-semibold">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum, fugiat quia. Id qui recusandae, praesentium
                      voluptatum aliquid veritatis!
                    </p>
                  </div>
                </div>
              </div>
              {/* Service 2 */}
              {/* Service 3 */}
              <div className="relative">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to-red-500 transform -skew-x-4 -rotate-6 rounded-lg "></div>
                <div className="relative z-20 bg-white h-full rounded-md shadow-md ">
                  <img
                    className="rounded-t-md"
                    style={{ height: "240px" }}
                    src={serviceImage3}
                    alt="service.jpg"
                  />
                  <div className="px-10 pb-6">
                    <h2 className="pt-3 font-bold text-2xl">
                      Responsive Website
                    </h2>
                    <p className="pt-2 font-semibold">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum, fugiat quia. Id qui recusandae, praesentium
                      voluptatum aliquid veritatis!
                    </p>
                  </div>
                </div>
              </div>
              {/* Service 3 */}
            </div>
          </div>
        </section>
        {/* Services */}

        {/* Work */}
        <section id="work" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-700">Work</h1>
              <p className="pt-2 text-xl ">Here is My Portofolio</p>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-16">
              {/* work 1 */}
              <div className="bg-white rounded-lg shadow-md col-span-2">
                <img
                  className="object-cover h-80 w-full rounded-t-md"
                  src={workSection1}
                  alt="work-section.jpg"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work Title
                  </h3>
                  <p className="pt-3 text-md font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga accusamus esse rerum perferendis tenetur harum!
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* work 1 */}
              {/* work 2 */}
              <div className="bg-white rounded-lg shadow-md col-span-1">
                <img
                  className="object-cover h-80 w-full rounded-t-md"
                  src={workSection2}
                  alt="work-section.jpg"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work Title
                  </h3>
                  <p className="pt-3 text-md font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga accusamus esse rerum perferendis tenetur harum!
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* work 2 */}
              {/* work 3 */}
              <div className="bg-white rounded-lg shadow-md col-span-1">
                <img
                  className="object-cover h-80 w-full rounded-t-md"
                  src={workSection3}
                  alt="work-section.jpg"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work Title
                  </h3>
                  <p className="pt-3 text-md font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga accusamus esse rerum perferendis tenetur harum!
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* work 3 */}
              {/* work 4 */}
              <div className="bg-white rounded-lg shadow-md col-span-2">
                <img
                  className="object-cover h-80 w-full rounded-t-md"
                  src={workSection4}
                  alt="work-section.jpg"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work Title
                  </h3>
                  <p className="pt-3 text-md font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga accusamus esse rerum perferendis tenetur harum!
                  </p>
                  <a
                    className="inline-block mt-4 px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700"
                    href=""
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* work 4 */}
            </div>
          </div>
        </section>
        {/* Work */}
        {/* Contact */}
        <section id="contact" className="pt-20 px-80 pb-28 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-700">Contact</h1>
              <p className="pt-2 text-xl ">Get in Touch With Me</p>
            </div>
            <div className="mt-16 relative max-w-4xl mx-auto">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-500 to-red-500 transform -skew-x-4 rotate-6 rounded-lg "></div>
              <div className="relative z-20 bg-white rounded-md shadow-md p-12">
                <form action="">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-300"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-300"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="border col-span-2 border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-300"
                    />
                    <textarea
                      name="messege"
                      className="border col-span-2 border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-300"
                      id="messege"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <button className="inline-block mt-4  px-6 py-2 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700">
                    Send Messege
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}
      </div>
    </React.Fragment>
  );
}

export default App;
