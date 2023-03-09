import React from "react";

import useAuthContext from '../../context/AuthContext'
export default function Profile2() {
  const {user}=useAuthContext()


    return (
      <div className="h-fit border-l-0 border-r-0 border-b-0 border-t-8 border-slate-900 border lg:px-8  lg:w-full lg:rounded-t-lg dark:bg-slate-700 bg-slate-200">
        <div className="lg:my-8">
          <h1 className="lg:text-3xl">Welcome {user?.name} To Your Profil</h1>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center lg:h-fit">
          <div>
            <ul className="text-2xl list-inside capitalize">
            <li className="flex items-center text-blue-600 dark:text-blue-500 my-5">
        <span className="hidden sm:inline-flex sm:ml-2">description</span>
        <svg aria-hidden="true" className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </li>
            </ul>
            <p className="lg:text-xl break-words ml-20 hover:text-gray-900 my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae distinctio officia quisquam adipisci quia recusandae
              facere quas fugit quidem qui dicta ex tempora, at necessitatibus
              fugiat minus, quam reprehenderit impedit!
            </p>
          </div>
        </div>
      </div>
    );
  }

