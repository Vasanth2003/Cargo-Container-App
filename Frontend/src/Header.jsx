import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

const Header = () => {
  const  {user} = useContext(UserContext);
  return (
    <div>
        <header>
        <div className='nav bg-blue-950 flex  p-5 justify-between'>
          <div className='title text-white'>Company Name</div>
          <div className='nav-menu flex gap-4 text-white'>
            <div>
              Home
            </div>
            <div>
              About
            </div>
            <div>
              Services
            </div>
            <div>
              Terms & Conditions
            </div>
            <Link  to={user?'http://localhost:5173/account':'http://localhost:5173/login'} className='text-white flex gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {!!user && (
              <div>
                {user.name}
              </div>
            )} 
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header