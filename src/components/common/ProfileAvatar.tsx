import React from 'react'


const ProfileAvatar = ({imageUrl}:{imageUrl:string}) => {
  return (
    <img src={imageUrl} className='rounded-full border-red-400 border-4 md:absolute m-auto -top-8 left-5 w-44'/>
  )
}

export default ProfileAvatar