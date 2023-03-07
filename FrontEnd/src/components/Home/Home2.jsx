import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import villes from "./Ville";
export default function Home2() {
  const [mc, setMc] = useState("");
  const dispatch = useDispatch();

  const handelclik = (e) => {
    setMc(e.target.value);
  };
  const save = () => {
    dispatch({ type: "mc", payload: mc });
  };
  return (
    <div className="lg:ml-40 lg:my-48 sm:mb-48  bottom-0 lg:w-3/4">
      <form>
        <div className="lg:flex md:flex">
          <span
            className="capitalize lg:inline-flex lg:items-center lg:px-3 lg:text-sm lg:text-gray-900 lg:bg-gray-200 lg:border lg:border-r-0 lg:border-gray-300 lg:rounded-l-md md:inline-flex md:items-center md:px-3 md:text-sm md:text-gray-900
md:bg-gray-200
md:border border-r-0
md:border-gray-300
md:rounded-l-md
md:bg-blue-500 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600
sm:block sm:px-3 sm:text-lg sm:text-white sm:w-48 sm:py-6 lg:py-0 md:py-0 sm:text-left
 ls"
          >
            mots-clés
          </span>
          <input
            type="text"
            id="website-admin"
            className="lg:rounded-none md:rounded-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:rounded is"
            placeholder="developpemment ..............."
            value={mc}
            onChange={handelclik}
          />
          <span
            className="capitalize lg:inline-flex lg:items-center lg:px-3 lg:text-sm lg:text-gray-900 lg:bg-gray-200 lg:border lg:border-r-0 lg:border-gray-300 md:inline-flex md:items-center md:px-3 md:text-sm md:text-gray-900
md:bg-gray-200
md:border border-r-0
md:border-gray-300
md:bg-blue-500 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600
sm:block sm:items-center sm:px-3 sm:text-lg sm:text-white sm:w-48 sm:py-6 sm:text-left lg:py-0 md:py-0 ls"
          >
            métier
          </span>

          <select
            id="countries"
            className="md:rounded-none lg:rounded-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:rounded is"
          >
            <option >Choose a country</option>
            {villes.map((ville) => (
              <option value={ville.id} key={ville.id}>{ville.ville}</option>
            ))}
          </select>

          <button
            className="sm:mt-8 lg:mt-0 md:mt-0 sm:p-4 lg:p-0 md:p-0 sm:rounded-full bg-blue-500 capitalize lg:inline-flex lg:items-center lg:px-3 text-sm text-gray-900 lg:rounded-r-lg md:rounded-r-lg lg:rounded-l-none md:rounded-l-none bt"
            type="button"
            onClick={save}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="fill-white dark:fill-slate-800 w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
      <a
        href="#cards"
        className="lg:inline-flex lg:items-center lg:mt-40 md:mt-32 bg-white dark:bg-gray-800 lg:p-4 lg:rounded-full sm:inline-flex sm:items-center sm:p-3 sm:rounded-full sm:mt-8 l"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="fill-blue-500 animate-bounce w-6 h-6 "
        >
          <path
            fillRule="evenodd"
            d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a name="cards"></a>
    </div>
  );
}
