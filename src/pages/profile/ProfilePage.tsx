import TextField from '@mui/material/TextField/TextField'
import Typography from '@mui/material/Typography/Typography'
import React from 'react'
import Header_section from '../../components/common/Header_section'
import ProfileAvatar from '../../components/common/ProfileAvatar'
import MainLayout from '../../components/layout/main/MainLayout'


const ProfilePage = () => {
  return (
    <>
      <MainLayout>
        <Header_section title='Profile' />
        <div className='relative pt-11 mt-16'>
          <ProfileAvatar imageUrl="https://randomuser.me/api/portraits/men/51.jpg" />
          <section className=' bg-slate-100 pb-10 md:pt-32 md:px-11 rounded-xl'>
            <Typography className='text-center md:text-left pb-10 opacity-80' variant='h4'>
              Apex1380
            </Typography>
            <div className='text-left opacity-60 md:text-xl'>
              Sina Sahraeian
            </div>
            <div className='text-left opacity-60 md:text-xl'>
              2000/12/31
            </div>
            <div className='text-left opacity-60 md:text-xl'>
              sinasahraian780@gmail.com
            </div>
            <form className='text-left pt-6'>
              <Typography className='pb-5' variant='h5'>
                Change password
              </Typography>
              <div className='flex flex-col max-w-sm'>
                <TextField id="outlined-basic" type={'password'} label="New password" variant="outlined" className='my-4 bg-slate-200 border-0 mr-4' />
                <TextField id="outlined-basic" type={'password'} label="confirm password" variant="outlined" className='my-4 bg-slate-200 border-0 ml-6' />
              </div>
            </form>
          </section>

        </div>
      </MainLayout>
    </>
  )
}

export default ProfilePage