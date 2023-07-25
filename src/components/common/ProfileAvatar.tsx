import { Typography } from '@mui/material';
import React, { useState } from 'react'


const ProfileAvatar = ({ imageUrl, firstName, lastName }: { imageUrl: string, firstName: string | undefined, lastName: string | undefined }) => {

  const [image, setImage] = useState(null)

  const onClickHandler = () => {
    console.log('sina');

  }

  return (
    <div>
      <button onClick={onClickHandler} className='rounded-full block relative border-red-400 border-4 md:absolute m-auto md:left-5 -top-8 w-44 h-44'>
        <img src={imageUrl} className='w-full absolute rounded-full bottom-0' />
        <input className='hidden' type="file" id='file' />
        <label htmlFor="file" className='cursor-pointer rounded-full w-full z-20 -translate-x-1/2 absolute bottom-0 top-0 bg-black object-fill text-white hover:bg-opacity-50 hover:text-opacity-60 text-opacity-0   transition-all bg-opacity-0 h-full'><p className='pt-16 text-lg font-bold'>choose photo</p></label>
      </button>
      <Typography className='text-center md:text-left md:hidden lg:block lg:translate-x-52 lg:translate-y-24 bg-white md:bg-inherit' variant='h4'>
        {firstName} {lastName}
      </Typography>
    </div>
  )
}

export default ProfileAvatar