import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import '../styles/home.css';

const Home = () => {
  return (
    <section>
        {/* Left Section */}
        <div className='z-40 xl:mb-0 mb-[20%]'>
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
            className="text-xl md:text-1xl lg:texr-2xl text-violet-200 max-w-xl">
                I'm a Mechatronics engineer with a strong passion for software development. I enjoy building creative and efficient solutions 
                through code, and I'm constantly exploring new technologies to grow as a developer.
            </motion.p>
        </div>
        {/* Right Section */}
        <Spline 
        className='absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0'
        scene="https://prod.spline.design/RSHtHklCZgxHLlwK/scene.splinecode" />
        
    </section>
  )
}

export default Home
