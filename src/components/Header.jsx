import {useEffect, useRef} from 'react'
import Navbar from './Navbar'
import { FaLocationDot } from "react-icons/fa6";
import anime from 'animejs'
import {motion, useInView , useAnimation} from 'framer-motion'

const WaterDropGrid = ()=>{

  const ref = useRef(null)
  const isInView = useInView(ref) 
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
      slideControls.start("visible")
    }
  },[isInView])

  return (
    <>
    <Navbar/>
    <div className=' relative flex h-screen place-content-center px-8'>
      <div ref={ref} className='flex flex-col absolute lg:left-[300px] z-10 text-white'>
      <motion.div
      
        variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration:0.5 , delay:0.25}}
        
        >
        
          <h1 className='lg:text-[70px] text-[50px] font-black w-[300px]'>Hey,I'm Amir<span className='special-color'>.</span></h1>
          <h2 className='lg:text-[30px] text-[30px] '>I'm a <span className='special-color font-bold'>Frontend Developer</span></h2>
          <p className=' my-4 w-[380px]'>I've spent last 4 years learning web development tools and technologies and building different projects. i finished my university recently and now looking for job in web development industries. if you want to work with me send me an email.</p>
          <button className='special-bg main-color text-xl flex justify-center p-2 rounded-lg  content-center'>Get in Touch</button>
        </motion.div>
        <motion.div
          variants={{
            hidden:{left:0},
            visible:{left:'100%'}

          }}
          initial="hidden"
          animate={slideControls}
          transition={{duration:0.5 , ease:"easeIn"}}
          style={{
            position:"absolute",
            top:4,
            bottom:4,
            left:4,
            right:4,
            background:'#66FCF1',
            zIndex:20,
          }}
        />
      </div>
      <DotGrid/>
    </div>
    </>
  )
}

const GRID_WIDTH = 18;
const GRID_HEIGHT = 17;


const DotGrid  =()=>{
  const handleDotCLick = (e)=>{
anime({
  targets:".dot-point",
  scale:[
    {value:1.35 , easing:'easeOutSine',duration:250},
    {value:1 , easing:'easeInOutQuad',duration:500},
  ],
  translateY:[
    {value:-15, easing:'easeOutSine', duration:250},
    {value:0, easing:'easeInOutQuad', duration:500}
  ],
  opacity:[
    {value:1, easing:'easeOutSine', duration:250},
    {value:0.5, easing:'easeInOutQuad', duration:500}
  ],
  delay:anime.stagger(100,{
    grid:[GRID_WIDTH,GRID_HEIGHT],
    from:e.target.dataset.index
  })
})
  }
  const dots = [];
  let index = 0;

  for(let i=0;i<GRID_WIDTH;i++){
    for(let j=0;j<GRID_HEIGHT;j++){
      dots.push(
        <div
        onClick={handleDotCLick}
         className='group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600 '
         data-index={index}
         key={`${i}-${j}`}
         >
          <div
           className='dot-point lg:h-2 h-1 lg:p-2 p-1 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white'
           data-index={index}
           />
        </div>
      );
      index++
    }
  }

  return (

  <div>
    <div
      style={{gridTemplateColumns:`repeat(${GRID_WIDTH},1fr)`}}
      className='grid w-fit'
    >
      {dots}
    </div>
  </div>

  )
}

// const Header = () => {
//   return (
//     <>
//         <Navbar/>
//         <div id='home' className='flex h-[400px] items-center lg:pl-56 pl-4 m-8'>
//             <div className='flex flex-col w-[500px]'>
//                 <h1 className='lg:text-[55px] text-2xl font-bold leading-tight'>Front-End React Developer</h1>
//                 <p className='text-lg text-gray-600 w-[400px]'>Hi, I'm Amir. A passionate Front-end React Developer based in Tehran, Iran.📍</p>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Header
export default WaterDropGrid