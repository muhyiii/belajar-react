import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-7 gap-1 h-screen w-screen text-center" >
        {/* <div className="bg-red-500 col-start-2 col-end-7 rounded-2xl">1</div>
        <div className="bg-gray-500 col-start-1 rounded-2xl animate-bounce ease-linear">2</div>
        <div className="bg-green-500 col-start-3 col-end-6 rounded-2xl ">3</div>
        <div className="bg-blue-500 col-end-8 rounded-2xl animate-bounce ease-linear">4</div>
        <div className="bg-yellow-500 col-start-2 col-end-7 rounded-2xl">5</div> */}
        

        <div className="grid grid-cols-7 gap-x-1 h-screen w-screen">
          <div className="bg-yellow-500"></div>
          <div className=" col-span-6 overflow-auto">
            <div className="h-12 bg-pink-600"></div>
            <div className="h-full bg-indigo-500 flex items-center justify-center">
              <form action="" className="p-10">
                <label htmlFor="Username" className="font-semibold text-xl">Username</label>
                <input type="text" className="border bg-gray-400 w-full px-8 py-3 hover:bg-gray-500 focus:bg-gray-300 rounded-2xl" />
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </React.Fragment>
  );
}

export default App;
