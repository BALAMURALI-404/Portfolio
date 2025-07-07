import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from "react-icons/si";

function Social_pnal() {
  return (
        <div className='social-panal'>
            <motion.a 
            initial={{opacity:0, scale:0.1}}
            animate={{opacity:1, scale:1}}
            transition={{delay:0.3, duration:0.8}}
            href="https://github.com/BALAMURALI-404" target='_blank'>
                <FiGithub className=" social-icons"/>
            </motion.a>
            <motion.a 
            initial={{opacity:0, scale:0.1}}
            animate={{opacity:1, scale:1}}
            transition={{delay:0.3, duration:0.8}}
            href="https://www.linkedin.com/in/balamurali12/" target='_blank'>
                <FiLinkedin className="social-icons"/>
            </motion.a>
            <motion.a 
            initial={{opacity:0, scale:0.1}}
            animate={{opacity:1, scale:1}}
            transition={{delay:0.3, duration:0.8}} 
            href="https://leetcode.com/u/BalamuraliB/" target='_blank'>
                <SiLeetcode className="social-icons"/>
            </motion.a>
        </div>
  )
}

export default Social_pnal;
