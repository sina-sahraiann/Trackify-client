import React, { useState } from 'react'


const ProfileAvatar = ({ imageUrl }: { imageUrl: string }) => {

  const [image, setImage] = useState(null)

  const onClickHandler = () => {
    console.log('sina');

  }

  return (
    <button onClick={onClickHandler} className='rounded-full relative border-red-400 border-4 md:absolute m-auto -top-8 left-5 w-44 h-44'>
      <img src={imageUrl} className='w-full absolute rounded-full bottom-0' />
      <input className='hidden' type="file" id='file' />
      <label htmlFor="file" className='cursor-pointer rounded-full w-full z-20 -translate-x-1/2 absolute bottom-0 top-0 bg-black object-fill text-white hover:bg-opacity-50 hover:text-opacity-60 text-opacity-0   transition-all bg-opacity-0 h-full'><p className='pt-16 text-lg font-bold'>choose photo</p></label>
    </button>
  )
}

export default ProfileAvatar