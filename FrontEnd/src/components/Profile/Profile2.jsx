import React from "react";

import useAuthContext from '../../context/AuthContext'
export default function Profile2() {
  const { user } = useAuthContext()
  return (


    <main className="profile-page">
      <section className="relative py-16 mt-24 w-700-px">
        <div className="">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img alt="..." src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-40" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                      Connect
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1 mt-7">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block tracking-wide text-blueGray-600">Age</span><span className="text-sm text-slate-400">19</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {user?.name}
                </h3>
                <h4 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Stagiare
                </h4>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  Moroco, Casablanca
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager - Creative Tim Officer
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a href="#pablo" className="font-normal text-pink-500">Show more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
              </div>

            </section>
          </main>
          );
            }

