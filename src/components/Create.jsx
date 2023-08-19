import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate()

    const [users, setUsers] = useState({});
    const dispatch = useDispatch()

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(users))
        navigate('/read')
    };

  

    return (
        <div>
            <div className="w-full max-w-xs mx-auto my-[10vh]">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            name
                        </label>
                        <input name='name' onChange={getUserData} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            email
                        </label>
                        <input name='email' onChange={getUserData} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="******************" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            age
                        </label>
                        <input name='age' onChange={getUserData} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="enter your age" />
                    </div>
                    {/* ============================================================== */}
                    <label className="block text-gray-700 text-sm font-bold " htmlFor="password">
                        gender
                    </label>
                    <div className="flex gap-4 mb-6">

                        <div className="inline-flex items-center">
                            <label className="relative flex cursor-pointer items-center rounded-full p-3" htmlFor="html" data-ripple-dark="true">
                                <input id="html" name="gender" onChange={getUserData} type="radio" value={'male'} className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10" />
                                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                        <circle data-name="ellipse" cx={8} cy={8} r={8} />
                                    </svg>
                                </div>
                            </label>
                            <label className="mt-px cursor-pointer select-none font-light text-gray-700" htmlFor="html">
                                male
                            </label>
                        </div>
                        <div className="inline-flex items-center">
                            <label className="relative flex cursor-pointer items-center rounded-full p-3" htmlFor="react" data-ripple-dark="true">
                                <input id="react" name="gender" onChange={getUserData} type="radio" value={'female'} className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10" />
                                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                        <circle data-name="ellipse" cx={8} cy={8} r={8} />
                                    </svg>
                                </div>
                            </label>
                            <label className="mt-px cursor-pointer select-none font-light text-gray-700" htmlFor="react">
                                femail
                            </label>
                        </div>
                    </div>


                    {/* =================================================================== */}
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    ©2020 Acme Corp. All rights reserved.
                </p>
            </div>

        </div>
    )
}

export default Create