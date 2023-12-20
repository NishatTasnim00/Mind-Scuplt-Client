import React from 'react'

const AllUsersCard = ({user}) => {
    // console.log(user)
    const {name, email, photo} = user;
  return (
    <div className='mb-5 lg:w-10/12 mx-auto space-y-5 bg-primary bg-opacity-20 p-5 border-gray-200 border-2 rounded-lg text-gray-700 '>
        <figure className='h-48 w-48 rounded-full bg-primary mx-auto'>
            <img className='h-full w-full object-cover rounded-full hover:scale-95' src={photo} alt="" />
        </figure>
        <div className='text-center '>
        <p>{name}</p>
        <p>{email}</p>
        </div>
    </div>
  )
}

export default AllUsersCard