import React from 'react'
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
<>
    <div id='contact' className='flex flex-row h-[200px] py-8 lg:px-20 px-4 special-bg items-center'>
        <h1 className='text-[40px] w-[120px] text-black font-black'>Get in Touch</h1>
        <div>
            <h1 className='lg:text-[30px] text-lg text-black pl-16'><MdEmail />Email: mashhadifarahani1@gmail.com</h1>
            
        </div>
    </div>
</>
    )
}

export default Contact