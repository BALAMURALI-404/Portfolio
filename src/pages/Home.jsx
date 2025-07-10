import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import '../styles/home.css';
import HomeModel from '../components/HomeModel';

const Home = () => {
  return (
    <section id='Home' className=' home-page min-w-96'>
        {/* Left Section */}
        <div className='z-40 px-10 lg:px-24 xl:mb-0 mb-[20%]'>
            <motion.h1 
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}
            transition={{type:"spring", stiffness:40, damping:25, delay:1.3, duration:1.5}}>
                WELCOME,<br/> I'M 
                <span className='name'> BALAMURALI</span>
                <br/>WEB DEVELOPER
            </motion.h1>
            <motion.p 
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}  
            transition={{type:"spring", stiffness:40, damping:25, delay:1.8, duration:1.5}}
            className="text-xl md:text-1xl lg:texr-2xl font-sans text-justify  max-w-xl">
                I'm a Mechatronics engineer with a strong passion for software development. I enjoy building creative and efficient solutions 
                through code, and I'm constantly exploring new technologies to grow as a developer.
            </motion.p>
        </div>
        {/* Right Section */}
        {/*<div className="relative bg-pink-600 w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="w-full aspect-[6/5] absolute top-32 right-[-60px] bg-blue-600 lg:aspect-[3/2] ">
            <Spline 
              scene="https://prod.spline.design/ApsNwhtdauX6DJLE/scene.splinecode" 
              className="w-full h-full scale-150  bg-gray-200"
            />
          </div>
        </div>*/}
        <div className="relative w-full  lg:w-1/3 top-32 lg:top-10 lg:right-32">
          <HomeModel/>
        </div>
        
    </section>
  )
}

export default Home
