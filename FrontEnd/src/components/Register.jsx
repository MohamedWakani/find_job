import { useState } from 'react'
import useAuthContext from '../context/AuthContext'



export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")
    const { register, errors } = useAuthContext()

    const handelRegiter = async (event) => {
        event.preventDefault()
        register({ name, email, password, password_confirmation })
    }


    return (
<div>
    <div className="main-banner" id="top">
        <video autoPlay muted loop id="bg-video">
            <source src="../../../video/video4.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay header-text">
            <div className="caption sm:mt-8 md:mt-32 lg:mt-12 dark:text-gray-700">
                <section>
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-28 h-28 dark:fill-gray-900 fill-gray-400"
                            >
                                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                            </svg>
                        </div>
                        <div className="w-full bg-gray-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create and account
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handelRegiter}>
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder='Your Name'
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={name} onChange={(e) => setName(e.target.value)} 

                                        />
                                        {errors.name && (
                                            <div className='flex'>
                                                <span className='text-red-400 text-sm m-2 p-2'>{errors.name[0]}</span>
                                            </div>)}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                            required=""
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                        />
                                          {errors.email &&(
                                <div className='flex'>
                                    <span className='text-red-400 text-sm m-2 p-2'>{errors.email[0]}</span>
                                </div>)}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                        />
                                          {errors.password &&(
                                <div className='flex'>
                                    <span className='text-red-400 text-sm m-2 p-2'>{errors.password[0]}</span>
                                </div>)}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="confirm-password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirm-password"
                                            id="confirm-password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                            value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        />
                                    
                                    </div>
                                    <div className="flex items-start">

                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="terms"
                                                className="font-light text-gray-500 dark:text-gray-300"
                                            >
                                                I accept the
                                                <a
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                    href="#"
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Create an account
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account?
                                        <a
                                            href="login"
                                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Login here
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>

    )
}
