import {motion} from 'framer-motion';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { SiLeetcode } from "react-icons/si";
import { useState } from 'react';
import { a } from 'framer-motion/client';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
return (
    <header className="absolute w-full z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
                    {/* logo */}
                    <motion.div 
                    initial={{opacity:0, x:-100}}
                    animate={{opacity:1, x:0}}
                    transition={{type:'spring', stiffness:50, damping:25, delay:0.2, duration:1.2}}
                    className="flex items-center">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center font-bold text-purple-600 text-xl mr-3">
                                    B
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent">
                                    Balamurali
                            </span>
                    </motion.div>

                    {/*Desktop navigation */}
                    <nav className="lg:flex hidden space-x-8">
                            {["Home", "About", "Projects", "Contact"].map((item, index) => (
                                    <motion.a
                                    initial={{opacity:0, y:-20}}
                                    animate={{opacity:1, y:0}}
                                    transition={{typr:"spring", stiffness:100, damping:20, delay:0.7+index*0.2}}
                                    key={item}
                                    className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-300 relative group"
                                    href='#'>{item}
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-purple-600 w-0 group-hover:w-full transition-all duration-300"></span>
                                    </motion.a>
                            ))}
                    </nav>

                    {/*Social icons*/}
                    <div className='md:flex hidden items-center space-x-4'>
                        <motion.a 
                        initial={{opacity:0, scale:0.1}}
                        animate={{opacity:1, scale:1}}
                        transition={{delay:1.3, duration:0.8}}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-purple-400 transition-color duration-300" href="#">
                            <FiGithub className="w-5 h-5"/>
                        </motion.a>
                        <motion.a 
                        initial={{opacity:0, scale:0.1}}
                        animate={{opacity:1, scale:1}}
                        transition={{delay:1.3, duration:0.8}}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-purple-400 transition-color duration-300" href="#">
                            <FiLinkedin className="w-5 h-5"/>
                        </motion.a>
                        <motion.a 
                        initial={{opacity:0, scale:0.1}}
                        animate={{opacity:1, scale:1}}
                        transition={{delay:1.3, duration:0.8}}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-purple-400 transition-color duration-300" href="#">
                            <SiLeetcode className="w-5 h-5"/>
                        </motion.a>
                    </div>

                    {/*Mobile menu button*/}
                    <div className="md:hidden flex items-center">
                        <motion.button
                        whileTap={{scale:0.7}}
                        onClick={toggleMenu} 
                        className='text-grey-300'>
                            {isOpen? <FiX className='h-6 w-6'/> : <FiMenu className='h-6 w-6'/>}
                        </motion.button>
                    </div>
            </div>
            {/*Mobile navigation*/}
            <motion.div 
            initial={{opacity:0, height:0}}
            animate={{opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0}}
            transition={{duration:0.3}}
            className='md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5'>
                <nav className='flex flex-col space-y-3'>
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <a onClick={toggleMenu} className='text-gray-300 font-medium py-2' key={item} href="#">
                            {item}
                        </a>
                    ))}
                </nav>
                <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
                    <div className='flex space-x-5'>
                        <a href="#">
                            <FiGithub className='h-5 w-5 text-gray-300'/>
                        </a>
                        <a href="#">
                            <FiLinkedin className='h-5 w-5 text-gray-300'/>
                        </a>
                        <a href="#">
                            <SiLeetcode className='h-5 w-5 text-gray-300'/>
                        </a>
                    </div>
                </div>
            </motion.div>
    </header>
)
}

export default Header
