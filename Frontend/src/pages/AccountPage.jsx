import React, { useContext, useState,useEffect } from 'react';
import { UserContext } from '../UserContext';
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios'
import ContainerPage from './ContainerPage';
const AccountPage = () => {
  const { user } = useContext(UserContext);
  // Check if user data is available and not null
  // if (!user) {
  //   // Add a loading indicator or any other appropriate message
  //   return <div>Loading...</div>;
  // }
  const [toHomePage, settoHomePage] = useState(null)
  let{subpage} = useParams();
  if(subpage===undefined)
  {
    subpage='profile';
  }

  

  async function logout()
  {
    await axios.post('exporter/logout');
    settoHomePage('/');
  }
  if(toHomePage)
  {
    return <Navigate to={'/login'}/>
  }

  function linkClasses(type=null)
  {
    let classes='inline-flex gap-1 py-2 px-6';
    if(type===subpage )
    {
      classes += ' bg-primary text-white rounded-full '
    }
    else
    {
      classes+=' bg-gray-300 rounded-full ';
    }
    return classes;
  }
  
  return (
    
    <div>

    
      <nav className='w-full  flex mt-8 justify-center gap-2'>
      <Link className={linkClasses('profile')} to={'/account'}>
          My Profile
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

        </Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>
          My Bookings

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
</svg>

        </Link>
        <Link className={linkClasses('history')} to={'/account/history'}>
          History
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
</svg>

        </Link>
      </nav>
      { subpage==='profile' &&

      <button className=' primary  max-w-sm mt-2 '>Logout</button>
      }
    { subpage==='bookings' &&
    <ContainerPage/>
    }
    
    
    
    </div>
  );
};

export default AccountPage;
