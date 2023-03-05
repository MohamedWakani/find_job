import React from 'react'
import Home2 from './Home2'

export default function Home1() {
  return (
      <div className=''>
    {/* <div>
        <video  id="background-video" className="w-full" autoPlay loop muted>
          <source src="../public/video/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-center flex-col items-center h-96">
        <div className="flex justify-center items-center capitalize">
          <h1 className="text-8xl">hi</h1>
        </div>
        <div className="mt-5">
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>  */}
      <div className="main-banner" id="top">
        <video autoPlay muted loop id="bg-video">
            <source src="../../../video/video.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay header-text">
            <div className="caption sm:mt-8 md:mt-32 lg:mt-12">
                <h2 className='mb-72'>TROUVEZ <em>L'EMPLOI</em> PARFAIT </h2>
                <Home2 />
            </div>
        </div>
    </div>
    </div>
  )
}
