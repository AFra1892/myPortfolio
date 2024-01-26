import {useState, useRef} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Squash as Hamburger } from "hamburger-react";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDarkMode ,setIsDarkMode]  = useState(false)

  const ref = useRef(null);
  const routes = [
    {
      title: "Home",
      href: "#",
      Icon: BiHomeAlt2,
    },
    {
      title: "Explore",
      href: "#",
      Icon: FiSearch,
    },
    {
      title: "Pricing",
      href: "#",
      Icon: IoPricetagsOutline,
    },
    {
      title: "About",
      href: "#",
      Icon: PiChatCircleBold,
    },
  ];
  
  
  return (
    <>
        <nav  className='bs items-center flex  flex-row justify-between p-4 nav-bg mb-8'>
            <div>
                <h1 className='text-2xl font-bold'>PERSONAL PORTFOLIO</h1>
            </div>
            <ul className='hidden lg:flex flex-row gap-x-6 text-2xl p-4'>
        
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-30 fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20 mt-6"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg text-white">{route.title}</span>
                      <Icon className="text-xl" color='white' />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
        </nav>
    </>
  )
}

export default Navbar