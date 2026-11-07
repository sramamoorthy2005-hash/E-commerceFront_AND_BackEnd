import React from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const nav = useNavigate();
  return (
    <section className='h-screen flex flex-col items-center justify-center max-md:p-5'>
        <div className="min-h-80 min-w-sm max-md:min-w-full bg-white shadow-2xl shadow-sky-400/60 p-5 rounded-2xl animation-card-down transition-all duration-300 ease-in-out">  
          <div className="flex flex-col gap-4">
            <h3 className="text-center font-medium text-xl">Register</h3>

            <div>
              <label className="text-gray-800" htmlFor="email">
                Name
              </label>
              <input
                id="email"
                type="text"
                className="block mt-1 ring-1 w-full py-1 px-3 rounded-lg ring-gray-400 focus:ring-sky-400 focus:ring-2 focus:shadow-lg focus:shadow-sky-400/10 outline-none transition-all duration-300 ease-out"
              />
            </div>

            <div>
              <label className="text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="block mt-1 ring-1 w-full py-1 px-3 rounded-lg ring-gray-400 focus:ring-sky-400 focus:ring-2 focus:shadow-lg focus:shadow-sky-400/10 outline-none transition-all duration-300 ease-out"
              />
            </div>

            <div>
              <label className="text-gray-800" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="text"
                className="block mt-1 w-full ring-1 py-1 px-3 rounded-lg ring-gray-400 focus:ring-sky-400 focus:ring-2 focus:shadow-lg focus:shadow-sky-400/10 outline-none transition-all duration-300 ease-out"
              />
            </div>

            <button className="cursor-pointer text-white py-1 bg-sky-400 hover:bg-sky-500 rounded-xl mt-5">
              Register
            </button>
            <p className="text-center">
              You Already have an account ?{" "}
              <span onClick={()=>nav('/login')}  className="text-emerald-400 hover:underline cursor-pointer hover:underline-offset-4">
                Login...
              </span>
            </p>
          </div>
      </div>
    </section>
  )
}

export default Registration