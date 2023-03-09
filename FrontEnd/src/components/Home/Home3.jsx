import React from "react";
import infos from "./List";

import Home4 from "./Home4";
export default function Home3() {
  return (
    <div className='sm:container flex md:justify-center lg:justify-between'>
      <div>
      {infos.slice(1,5).map((info,index)=>
      <a key={index}
        href="#"
        class=" my-12 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-full h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={info.img}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {info.nom}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          
        </div>
      </a>
    )}
  
    </div>
    <Home4/>
    </div>
  );
}