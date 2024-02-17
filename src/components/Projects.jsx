import React from 'react'
import pizza from '../assets/burger-land.png'
import gpt3 from '../assets/gpt3-full.png'
import socialMedia from '../assets/social-media.png'
const Projects = () => {
  return (
    <>
    <div id='projects' className='flex flex-col justify-center items-center gap-y-8 my-32'>
    <h1 className='lg:text-[55px] text-2xl  pl-8'>Projects</h1>


        <div className='nav-bg bs flex lg:flex-row flex-col  rounded-xl p-8 lg:gap-x-8 gap-y-8 lg:w-[900px] w-[400px]'>
                <div className="lg:w-2/3 w-full h-[300px] overflow-scroll">
                    <img className=' rounded-xl' src={pizza} alt='pizz'/>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h3 className='font-bold text-xl'>Resrurant Web App (October 2023)</h3>
                    <p className='w-[300px]'>a responsive single page app with order and login feature.getting menu items and user information from database and storing user orders in database. </p>
                    <div className="grid grid-cols-3 gap-4">
                        <div className='flex justify-center black-bg p-2 rounded-lg shadow-md w-20 content-center'>
                            <p className='text-lg'>React</p>
                        </div>
                        <div className='flex justify-center black-bg p-2 rounded-lg shadow-md w-20 content-center'>
                            <p className='text-lg'>Node</p>
                        </div>
                        <div className='flex justify-center black-bg p-2 rounded-lg shadow-md w-20 content-center'>
                            <p className='text-lg'>Express</p>
                        </div>
                        <div className='flex justify-center black-bg p-2 rounded-lg shadow-md w-20 content-center'>
                            <p className='text-md'>MongoDB</p>
                        </div>
                    </div>
                        <a href='https://github.com/AFra1892/resturant'>
                        <div className='special-bg main-color text-xl flex justify-center p-2 rounded-lg  content-center'>
                            Github
                        </div>  
                        </a>

                </div>
            </div>
            {/* FIRST CARD */}
            <div className='nav-bg flex lg:flex-row flex-col bs rounded-xl p-8 gap-x-8 lg:w-[900px] w-[400px]'>
                <div className="lg:w-2/3 w-full h-[300px] overflow-scroll">
                    <img className=' rounded-xl' src={gpt3} alt='pizz'/>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h3 className='pt-8 font-bold text-xl'>Gpt3 (Febuary 2023)</h3>
                    <p className='w-[300px]'>An Artifitial inteligance website is an online platform that allows users to hire agancies that will help them with ai tools. The website provides an interface for searching, comparing ai tools.</p>
                    <div class="flex gap-x-8">
                        <div className='flex justify-center black-bg p-2 rounded-lg shadow-md w-20 content-center'>
                            <p className='text-lg'>React</p>
                        </div>
                        <div className='flex justify-center black-bg p-2 rounded-lg shadow-md w-20 content-center'>
                            <p className='text-sm'>Vanila CSS</p>
                        </div>
                    </div>
                    <a href='https://github.com/AFra1892/GPT-3-react'>
                        <div className='special-bg flex justify-center main-color text-xl p-2 rounded-lg  content-center'>
                            Github
                        </div>
                    </a>
                </div>
            </div>
            {/* SECOND CARD */}
            <div className='nav-bg bs flex lg:flex-row flex-col  rounded-xl p-8 lg:gap-x-8 gap-y-8 lg:w-[900px] w-[400px]'>
                <div className="lg:w-2/3 w-full h-[300px] overflow-scroll">
                    <img className=' rounded-xl' src={socialMedia} alt='pizz'/>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h3 className='font-bold text-xl'>Social Media Clone (February 2024)</h3>
                    <p className='w-[300px]'>a responsive single page app with login , posting pictures and text , likes and ... feature.storing users data and posts in database. </p>
                    <div className="grid grid-cols-3 gap-4">
                        <div className='flex justify-center black-bg p-2 rounded-lg shadow-md w-20 content-center'>
                            <p className='text-lg'>React</p>
                        </div>
                        <div className='flex justify-center black-bg p-2 rounded-lg shadow-md w-20 content-center'>
                            <p className='text-lg'>Node</p>
                        </div>
                        <div className='flex justify-center black-bg p-2 rounded-lg shadow-md w-20 content-center'>
                            <p className='text-lg'>Express</p>
                        </div>
                        <div className='flex justify-center black-bg p-2 rounded-lg shadow-md w-20 content-center'>
                            <p className='text-md'>MongoDB</p>
                        </div>
                    </div>
                        <a href='https://github.com/AFra1892/social-media-mern.git'>
                        <div className='special-bg main-color text-xl flex justify-center p-2 rounded-lg  content-center'>
                            Github
                        </div>  
                        </a>

                </div>
            </div>
            {/* THIRD CARD */}
    </div>
    </>
  )
}

export default Projects