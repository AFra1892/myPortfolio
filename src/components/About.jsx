import {useRef,useEffect} from 'react'

import tech from '../assets/tech.png'
import {motion, useInView , useAnimation} from 'framer-motion'
const About = () => {
    const ref = useRef(null)
  const isInView = useInView(ref) 
    const mainControls = useAnimation()
   

    useEffect(()=>{
        if(isInView){
          mainControls.start("visible")
          
        }
      },[isInView])
  return (

    <>
    <div className='flex flex-col justify-center ' id="about">
        
            <motion.div
            ref={ref}
            variants={{
                hidden:{opacity:0, y:75},
                visible:{opacity:1, y:0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{duration:0.5 , delay:0.25}}
            className="flex flex-col justify-center items-center text-center h-auto lg:gap-x-16 "
            >
                <h3 className='text-[40px] font-black'>About Me</h3>
                <h1 className='text-2xl font-bold lg:w-[500px] w-[420px]' >A dedicated Front-end Developer
                    based in Tehran, Iran 📍</h1>
                <p className='lg:w-[800px] w-[400px]'>
                    As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, bootstrap.
                    I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                    I am also familiar with backend technologies like node.js and express and mongodb becouse of my final university project. 
                </p>
            </motion.div>
    
    <div className='flex flex-row  justify-center items-center gap-x-8  '>
        <h1 className='text-[30px] font-black lg:block hidden'>My Skills</h1>
        <img className='h-[100px]' src={tech}/>
    </div>
    </div>
    </>
  )
}

export default About