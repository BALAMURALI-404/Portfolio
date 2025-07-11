import { motion } from 'framer-motion';
import '../styles/home.css';
import PolaroidStack from '../components/PolaroidStack';

const Home = () => {
  return (
    <section id='Home' className=' home-page pl-10 lg:pl-24 min-w-96'>
        {/* Left Section */}
        <div className='z-40  xl:mb-0 mb-[20%]'>
            <motion.h1 
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}
            transition={{type:"spring", stiffness:40, damping:25, delay:0.5,duration:0.5}}>
                WELCOME,<br/> I'M 
                <span className='name'> BALAMURALI</span>
                <br/>WEB DEVELOPER
            </motion.h1>
            <motion.p 
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}  
            transition={{type:"spring", stiffness:40, damping:25, delay:1,duration:0.5}}
            className="text-xl md:text-1xl lg:texr-2xl font-sans text-justify  max-w-xl">
                I'm a Mechatronics engineer with a strong passion for software development. I enjoy building creative and efficient solutions 
                through code, and I'm constantly exploring new technologies to grow as a developer.
            </motion.p>
        </div>
        {/* Right Section */}
        <div className='relative flex items-center w-full h-1/2 top-5 lg:w-2/5 lg:-top-10 lg:right-20'>
          <PolaroidStack/>
        </div>
    </section>
  )
}

export default Home
