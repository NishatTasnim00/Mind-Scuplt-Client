import React, { useContext } from 'react'
import useGetUser from '../../hook/useGetUser'
import { AuthContext } from '../../provider/AuthProvider'

const Dashboard = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className='flex justify-center items-center h-full font-black lg:text-5xl italic text-primary'>
      <h1>Hi {user?.displayName} !</h1>
    </div>
  )
}

export default Dashboard