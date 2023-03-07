import React from "react";
import infos from "./List";
import { useSelector } from "react-redux";
import Home4 from "./Home4";
export default function Home3() {
  const mc = useSelector((state) => state.mc);
  return (
    <div className="container my-12">
     
      {mc.length ? (
        <h1 className="p-8 dark:text-white capitalize text-center bg-slate-500 rounded">
          les annonces de {mc}{" "}
        </h1>
      ) : null}

<div className="flex justify-evenly items-center">
        <div>
        <h1 className="p-8 dark:text-white capitalize text-center bg-sky-500 rounded mt-8">annonces de travialle</h1>

      {infos.slice(0,5).map((info, index) => (
          <a
            key={index}
            href="#"
            className="w-full shadow-xl hover:shadow-gray-500 my-12 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={info.img}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="dark:text-white mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {info.nom}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {info.desc}
              </p>
            </div>
          </a>
      ))}
      </div>
     
      <Home4 />
    
      </div>
    </div>
  );
}
