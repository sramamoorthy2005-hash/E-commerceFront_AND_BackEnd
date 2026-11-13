import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../features/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [details, setDetails] =useState({
    userEmail: '',
    userPassword: ''
  })

  const handleChange = (e) => {
    const {id, value} = e.target;
    setDetails(prevState => ({
      ...prevState,
      [id]: value
    }))
  }
  const {loading, error} = useSelector(state => state.auth);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await dispatch(loginUser(details)).unwrap();
      nav('/home');
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <section className='h-screen flex flex-col items-center justify-center max-md:p-5'>
        <div className="min-h-80 max-md:min-w-full min-w-sm bg-white shadow-2xl shadow-sky-400/60 p-5 rounded-2xl animation-card-up transition-all duration-300 ease-in-out">  
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3 className="text-center font-medium text-xl">Login</h3>
            {error && <p className='text-red-500 text-center'>{error}</p>}
            <div>
              <label className="text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                id="userEmail"
                type="text"
                value={details.userEmail}
                onChange={handleChange}
                className="block mt-1 ring-1 w-full py-1 px-3 rounded-lg ring-gray-400 focus:ring-sky-400 focus:ring-2 focus:shadow-lg focus:shadow-sky-400/10 outline-none transition-all duration-300 ease-out"
              />
            </div>

            <div>
              <label className="text-gray-800" htmlFor="password">
                Password
              </label>
              <input
                id="userPassword"
                type="password"
                value={details.userPassword}
                onChange={handleChange}
                className="block mt-1 w-full ring-1 py-1 px-3 rounded-lg ring-gray-400 focus:ring-sky-400 focus:ring-2 focus:shadow-lg focus:shadow-sky-400/10 outline-none transition-all duration-300 ease-out"
              />
            </div>

            <button type='submit' className="cursor-pointer  text-white py-1 bg-emerald-400 hover:bg-emerald-500 rounded-xl mt-5">
              {loading ? 'Login...in...' : 'Login'}
            </button>
            <p className="text-center">
              You don't have account ?{" "}
              <span onClick={()=>nav('/register')}  className="text-sky-400 hover:underline cursor-pointer hover:underline-offset-4">
                Reg...
              </span>
            </p>
          </form>
      </div>
    </section>
  )
}

export default Login

