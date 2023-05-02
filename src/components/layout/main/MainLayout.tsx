import React from 'react'
import AppBarWithDrawer from './AppBarWithDrawer'
import NavBar from './NavBar'
import ResDrawer from './ResDrawer'


const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='p-4 relative'>
      <AppBarWithDrawer>
        {children}
      </AppBarWithDrawer>
    </div>
  )
}

export default MainLayout