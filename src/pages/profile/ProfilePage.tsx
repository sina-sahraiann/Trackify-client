import TextField from '@mui/material/TextField/TextField'
import Typography from '@mui/material/Typography/Typography'
import React, { useContext, useEffect } from 'react'
import Header_section from '../../components/common/Header_section'
import ProfileAvatar from '../../components/common/ProfileAvatar'
import MainLayout from '../../components/layout/main/MainLayout'
import { UserContext, UserContextProps } from '../../providers/UserProvider'
import StreakCard from '../../components/common/StreakCard'


const ProfilePage = () => {

  const { user } = useContext(UserContext) as UserContextProps
  let parts = user?.birthDate.split(/[-T:.+]/); // split by - T : . +
  if (parts) {
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // months are 0-based in JS
    const day = parseInt(parts[2]);
  }

  return (
    <>
      <MainLayout>
        <Header_section title='Profile' />
        <div className='relative pt-11 mt-16'>
          <ProfileAvatar imageUrl="https://randomuser.me/api/portraits/men/51.jpg" />
          <section className=' bg-slate-100 pb-10 md:pt-32 md:px-11 rounded-xl'>
            <Typography className='text-center md:text-left pb-10 opacity-80' variant='h4'>
              {user?.fristName}
            </Typography>
            <div className='text-left opacity-60 md:text-xl'>
              {user?.fristName} {user?.lastName}
            </div>
            <div className='text-left opacity-60 md:text-xl'>
              {parts && parseInt(parts[0])}/{parts && parseInt(parts[1]) - 1}/{parts && parseInt(parts[2])}
            </div>
            <div className='text-left opacity-60 md:text-xl'>
              {user?.email}
            </div>
            {user && <StreakCard journalingStreak={2}/>}
            <form className='text-left pt-6'>
              <Typography className='pb-5' variant='h5'>
                Change password
              </Typography>
              <div className='flex flex-col max-w-sm'>
                <TextField id="New password" type={'password'} label="New password" variant="outlined" className='my-4 bg-slate-200 border-0 mr-4' />
                <TextField id="confirm password" type={'password'} label="confirm password" variant="outlined" className='my-4 bg-slate-200 border-0 ml-6' />
              </div>
            </form>
          </section>
        </div>
      </MainLayout>
    </>
  )
}

export default ProfilePage