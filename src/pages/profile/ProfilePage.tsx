import TextField from '@mui/material/TextField/TextField'
import Typography from '@mui/material/Typography/Typography'
import React, { useContext, useEffect } from 'react'
import Header_section from '../../components/common/Header_section'
import ProfileAvatar from '../../components/common/ProfileAvatar'
import MainLayout from '../../components/layout/main/MainLayout'
import { UserContext, UserContextProps } from '../../providers/UserProvider'
import StreakCard from '../../components/common/StreakCard'
import { Button } from '@mui/material'


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
        <div className='md:bg-slate-100 bg-white h-full md:pt-10'>
          <div className='xl:w-9/12 xl:mx-auto '>
            {/* <Header_section title='Profile' /> */}
            <div className='relative my-16'>
              <ProfileAvatar firstName={user?.fristName} lastName={user?.lastName} imageUrl="https://randomuser.me/api/portraits/men/51.jpg" />
              <div className='flex'></div>
              <section className='md:flex-row flex-col rounded-3xl  pb-10 md:pt-10 md:px-5 lg:px-11  flex justify-between bg-white'>
                <div id='left-col' className='md:pt-28'>
                  <Typography className='text-center hidden md:block md:text-left lg:hidden' variant='h4'>
                    {user?.fristName} {user?.lastName}
                  </Typography>
                  <div className='md:text-left text-center opacity-60 md:text-xl mt-3'>
                    {parts && parseInt(parts[0])}/{parts && parseInt(parts[1]) - 1}/{parts && parseInt(parts[2])}
                  </div>
                  <div className='md:text-left text-center opacity-60 md:text-xl'>
                    {user?.email}
                  </div>
                </div>
                <div id='right-col'>
                  <div className='max-w-md mt-5 md:mt-0'>
                    {user && <StreakCard journalingStreak={user.journalingStreak} />}
                  </div>
                  {/* <form className='text-left pt-6'>
                    <Typography className='pb-5' variant='h5'>
                      Change password
                    </Typography>
                    <div className='flex flex-col max-w-sm gap-4'>
                      <TextField id="New password" type={'password'} label="New password" variant="outlined" className='my-4 bg-slate-200 border-0 mr-4' />
                      <TextField id="confirm password" type={'password'} label="confirm password" variant="outlined" className='my-4 bg-slate-200 border-0 ml-6' />
                      <Button type='submit' variant='contained'>Change</Button>
                    </div>
                  </form> */}
                </div>
              </section>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default ProfilePage