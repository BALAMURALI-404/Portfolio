import { motion } from 'framer-motion';
import '../styles/home.css';
import PolaroidStack from '../components/PolaroidStack';
import { useRef,useEffect } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const textRef = useRef(null);
   useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        'Web Developer','IDE is my canvas','Mechatronics Engineer','Tech Enthusiast','Problem Solver'],
      typeSpeed: 70, backSpeed: 30,backDelay: 1500,startDelay: 500,loop: true,showCursor: true,cursorChar: '|',});

    return () => {
        typed.destroy();
      };
    }, []);


  return (
    <section id='Home' className=' home-page pl-10 lg:pl-28 min-w-96 relative'>
        {/* Left Section */}
        <div className='z-20 w-full md:w-2/3 xl:mb-0 mb-[20%] '>
            <motion.h1 
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}
            transition={{type:"spring", stiffness:40, damping:25, delay:0.5,duration:0.5}}>
                WELCOME,<br/> I'M 
                <span className='name'> BALAMURALI</span>
                <br/> <span ref={textRef}></span>
            </motion.h1>
            <div className='flex gap-8'>
              <motion.button 
              onClick={()=>window.location="#Projects"}
              initial={{opacity:0, y:80}}
              animate={{opacity:1, y:0}}  
              transition={{type:"spring", stiffness:40, damping:25, delay:1,duration:0.5}}
              className="text-xl p-2 text-white border-white border-2 hover:border-red-500 hover:text-red-500 rounded-lg  bg-gray-600/20 backdrop-blur-sm font-mono text-justify">
                  See My Works
              </motion.button>
              <motion.button 
              onClick={()=>window.location="#Contact"}
              initial={{opacity:0, y:80}}
              animate={{opacity:1, y:0}}  
              transition={{type:"spring", stiffness:40, damping:25, delay:1,duration:0.5}}
              className="text-xl p-2 text-white border-white border-2 hover:border-red-500 hover:text-red-500 rounded-lg bg-gray-600/20 backdrop-blur-sm font-mono text-justify">
                  Contact Me
              </motion.button>
            </div>
        </div>
        {/* Right Section */}
        <div className='relative flex items-center w-full h-1/2 top-5 lg:w-2/5 lg:-top-10 lg:right-20'>
          <PolaroidStack/>
        </div>
    </section>
  )
}

export default Home
