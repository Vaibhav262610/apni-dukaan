import React from 'react'
import { useSelector } from 'react-redux';

const AdminPage = () => {
  const adminAccess = useSelector((state) => state.apna.adminAccess);
  return (
    <>
        <div className='h-screen w-full flex justify-center items-center'>
            {adminAccess ? "<h1>ADMIN PAGE TRUE</h1>" : "<h1>ADMIN PAGE FALSE</h1>"}
        </div>
    </>
  )
}

export default AdminPage