import React from 'react'

export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>
<img
className='w-16 h-16 rounded-full mr-4 object-cover border-cover border-2 border-blue-900'
src='../image/pic.jpg'
alt='Author Image'/>
<div>
  <h3 className='text-xl font-bold'>Pashmeen Zia</h3>
  <p className='text-slate-500'>
  Typescript | Next.js | Web Developer
  </p>
</div>
      </div>


      <p className='mt-4 text-black leading-relaxed'>
      Pashmeen Zia is a passionate developer and creative thinker, building innovative solutions with Next.js and beyond.
      </p>
      <div className='mt-4 flex space-x-3'>
        <a
        href='https://www.linkedin.com/in/pashmeen-zia-31884b2b5/'
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
         LinkedIn
        </a>

        <a
        href='https://github.com/PashmeenZia'
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
         GitHub
        </a>
      </div>
    </div>
  )
}
