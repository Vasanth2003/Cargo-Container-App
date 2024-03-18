import React from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'

const ContainerPage = () => {
    const {id} = useParams();
  const [title,setTitle] = useState('');
  const [volume,setVolume] = useState('');
  const [addedPhotos,setAddedPhotos] = useState([]);
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState(100);
  const [departure,setDeparture] = useState('');
  const [redirect,setRedirect] = useState(false);
    const {action} = useParams();

  function inputHeader(text)
    {
      return(
        <h2 className='text-xl mt-4' >{text}</h2>
 
      )
    }
    function inputDescription(text)
    {
      return(
        <p className='text-gray-500 text-sm' >{text}</p>
 
      )
    }
    function preInput(header,description)
    {
      return(
        <>
          {inputHeader(header)}
          {inputDescription(description)}
        </>
 
      )
    }
console.log(action);
  return (
    <div>
    {action !== 'new' && (
        <div className='text-center mt-10'>
    <Link className='bg-primary inline-flex gap-1 px-7  py-2 justify-center  rounded-full text-white' to={'/account/bookings/new'}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>

    Add New Container
    </Link>

    </div>
    )}

    {action === 'new' && (
       <form>
          {preInput('Title','Enter Container Name')}
          <input value={title} onChange={ev=> setTitle(ev.target.value)} type='text' placeholder='title'/>
        
          {preInput('Volume','Enter Volume')}
        <input value={volume} onChange={ev=> setVolume(ev.target.value)} type='text' placeholder='volume'/>
        
        {preInput('Price','Enter Price')}
        <input value={price} onChange={ev=> setPrice(ev.target.value)} type='text' placeholder='price'/>
       
       <div className=''>
       {preInput('Photos','Add Photos here...')}
       <input 
       value={photoLink} onChange={ev=> setAddedPhotos(ev.target.value)}
        type='text' placeholder='Add using a link'/>
        <button className='bg-gray-200 flex gap-1 justify-center border bg-transparent px-4 rounded-2xl'>Add Photos</button>
       </div>

       {preInput('Description','Enter Description here...')}
      <textarea value={description} onChange={ev=> setDescription(ev.target.value)}/>

      <div>
      {preInput('Departure Time','Enter Departure Time')}
        <input value={departure} onChange={ev=> setDeparture(ev.target.value)} type='text' />
      </div>

      <button className='primary my-4'>Save</button>
       </form>
    )}
   
        
    </div>
  )
}

export default ContainerPage