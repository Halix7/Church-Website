import React from 'react'

const ProfileInfo = ({value,userDetail}) => {
    
  return (
   
        <div className={` ${userDetail?.branch?.toLowerCase() === value?.toLowerCase() ?  "flex":"hidden"}  flex-col bg-gray-200 mx-2 items-center gap-3 relative justify-center shadow-xl rounded-lg max-w-md px-2 py-2`}>
            <h1 className='font-bold text-xl font-serif text-center text-red-600'>
                {
                
                userDetail?.name
                }
               
            </h1>
            <h4 className='font-bold font-serif bg-red-500 text-white px-5 py-2 rounded-sm'>
                {
                    userDetail?.nci
                }
            </h4>
            <img src={userDetail?.image} className=' w-[15rem] h-[18rem] rounded-md mx-5 ' alt="picture" />
            <p className='text-md text-center max-w-[20rem] mx-2'>
                {
                    userDetail?.address
                }
            </p>
            <p className='text-red-500 font-bold text-lg font-serif'>
                {
                    userDetail?.branch
                }
            </p>
            
        </div>
       
   
  )
}

export default ProfileInfo