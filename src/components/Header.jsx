import {motion} from 'framer-motion';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { SiLeetcode } from "react-icons/si";
import { useState } from 'react';
import '../styles/header.css'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white opacity-50 backdrop-blur-xl ">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-15">
                    {/* logo */}
                    <motion.div 
                    initial={{opacity:0, x:-100}}
                    animate={{opacity:1, x:0}}
                    transition={{type:'spring', stiffness:50, damping:25, delay:0.2, duration:1.2}}
                    className="flex items-center">
                            <a href="/" className='flex items-center justify-center'>
                                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-pink-600 to-red-300 flex items-center justify-center font-bold text-slate-700 text-xl mr-3">
                                    B
                                </div>
                                <span className="text-2xl font-bold name pt-1">
                                        BALAMURALI
                                </span>
                            </a>
                    </motion.div>

                    {/*Desktop navigation */}
                    <nav className="lg:flex hidden space-x-8">
                            {["Home", "About", "Projects", "Contact"].map((item, index) => (
                                    <motion.a
                                    initial={{opacity:0, y:-20}}
                                    animate={{opacity:1, y:0}}
                                    className="group relative"
                                    transition={{typr:"spring", stiffness:100, damping:20, delay:0.7+index*0.2}}
                                    key={item}
                                    href='/'>{item}
                                    <span className="navul"></span>
                                    </motion.a>
                            ))}
                    </nav>

                    {/*Social icons*/}
                    <div className='md:flex hidden items-center space-x-4'>
                        <motion.a 
                        initial={{opacity:0, scale:0.1}}
                        animate={{opacity:1, scale:1}}
                        transition={{delay:1.3, duration:0.8}}
                        href="https://github.com/BALAMURALI-404" target='_blank'>
                            <FiGithub className=" social-icons"/>
                        </motion.a>
                        <motion.a 
                        initial={{opacity:0, scale:0.1}}
                        animate={{opacity:1, scale:1}}
                        transition={{delay:1.3, duration:0.8}}
                        href="https://www.linkedin.com/in/balamurali12/" target='_blank'>
                            <FiLinkedin className="social-icons"/>
                        </motion.a>
                        <motion.a 
                        initial={{opacity:0, scale:0.1}}
                        animate={{opacity:1, scale:1}}
                        transition={{delay:1.3, duration:0.8}} 
                        href="https://leetcode.com/u/BalamuraliB/" target='_blank'>
                            <SiLeetcode className="social-icons"/>
                        </motion.a>
                    </div>

                    {/*Mobile menu button*/}
                    <div className="md:hidden flex items-center">
                        <motion.button
                        whileTap={{scale:0.7}}
                        onClick={toggleMenu} 
                        className='social-icons'>
                            {isOpen? <FiX className='h-6 w-6'/> : <FiMenu className='h-6 w-6'/>}
                        </motion.button>
                    </div>
            </div>
            {/*Mobile navigation*/}
            <motion.div 
            initial={{opacity:0, height:0}}
            animate={{opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0}}
            transition={{duration:0.3}}
            className='md:hidden overflow-hidden bg-violet-1000 shadow-lg px-4 py-5 space-y-5'>
                <nav className='flex flex-col space-y-3'>
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <a onClick={toggleMenu} key={item} href="#">
                            {item}
                        </a>
                    ))}
                </nav>
                <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
                    <div className='flex space-x-5'>
                        <a href="https://github.com/BALAMURALI-404 " target='_blank'>
                            <FiGithub className='social-icons'/>
                        </a>
                        <a href="https://www.linkedin.com/in/balamurali12/" target='_blank'>
                            <FiLinkedin className='social-icons'/>
                        </a>
                        <a href="https://leetcode.com/u/BalamuraliB/" target='_blank'>
                            <SiLeetcode className='social-icons'/>
                        </a>
                    </div>
                </div>
            </motion.div>
    </header>
)
}

export default Header
