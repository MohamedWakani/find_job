import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useAuthContext from '../context/AuthContext'
import axios from './api/axios'

export default function ResetPassword() {
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [password, setPassword]=useState("")
    const [password_confirmation, setPasswordConfirmation]=useState("")
    const [searchParams]=useSearchParams()
    const {token}=useParams()
    const { csrf } = useAuthContext()

    useEffect(()=>{
        setEmail(searchParams.get("email"))

    },[])


    const handelSubmit = async (e) => {
        e.preventDefault()
        await csrf
        setErrors([])
        setStatus(null)
        try {
            const response = await axios.post("/reset-password", { email, token, password, password_confirmation })
            setStatus(response.data.status)
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }
    return (
        <div>
            <div className="main-banner" id="top">
                <video autoPlay muted loop id="bg-video">
                    <source src="../../../video/video1.mp4" type="video/mp4" />
                </video>

                <div className="video-overlay header-text">
                    <div className="caption sm:mt-8 md:mt-32 lg:mt-12 dark:text-gray-700">
                        <section className="">
                            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                                <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-28 h-28  fill-gray-400 dark:fill-gray-900 fill-white"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="w-full bg-gray-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    {status && <div className='bg-green-700 m-2 p-2 rounded text-white  '>
                                        {status}
                                        <div className="m-2 p-2">
                                            Go To <a href="/login">Login</a>
                                        </div>
                                        </div>}
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Add your new password
                                        </h1>
                                        <form

                                            className="space-y-4 md:space-y-6"
                                            onSubmit={handelSubmit}
                                        >
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
                                                {errors.password && (
                                                    <div className='flex'>
                                                        <span className='text-red-400 text-sm m-2 p-2'>{errors.password[0]}</span>
                                                    </div>)}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="confirm-password"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                   Confirme Password 
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


                                            <button
                                                type="submit"
                                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Reset
                                            </button>
                                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                Don’t have an account yet?
                                                <a
                                                    href="register"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Sign up
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
