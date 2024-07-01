import React from 'react'
import UserProvider from './context'

const UserLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}

export default UserLayout