import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <div className='border-3 h-35 flex items-center px-10 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'>
        <Link className='text-[6vw] mt-6' to='/project'>Project</Link>
      </div>
      <div className='border-3 h-35 flex items-center px-10 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'>
        <Link className='text-[6vw] mt-6' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
