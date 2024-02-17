import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    const d = new Date().getFullYear() 

    
    return (
    <>
        <div className='nav-bg flex lg:flex-row flex-col justify-between gap-y-4 items-center py-8 px-20   shadow-2xl'>
            <h1 className="text-white">Copyright © {d}. All rights are reserved</h1>
            <div className="flex flex-row gap-x-8 ">
            <a href="https://github.com/AFra1892">
                <FaGithub  color="white" size={25}/>
            </a>
            <FaLinkedin color="white" size={25} />
            </div>
        </div>
    </>
  )
}

export default Footer