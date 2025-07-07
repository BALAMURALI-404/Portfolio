import {motion} from 'framer-motion';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { SiLeetcode } from "react-icons/si";
import { useState } from 'react';
import '../styles/header.css'; 
import resume from "../../images/22MTR015_BALAMURALI_B.pdf"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

const navcomp = [{key:"Home",ref:"#Home"}, 
                {key:"Education",ref:"#Education"},
                {key:"Skills",ref:"#Skills"},
                {key:"Projects",ref:"#Projects"},
                {key:"Highlights",ref:"#Highlights"},
                {key:"Contact",ref:"#Contact"}]

return (
    <header className="fixed w-full z-50 transition-all duration-300 backdrop-blur-lg">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-15">
                    {/* logo */}
                    <motion.div 
                    initial={{opacity:0, x:-100}}
                    animate={{opacity:1, x:0}}
                    transition={{type:'spring', stiffness:50, damping:25, delay:0.2, duration:1.2}}
                    className="flex items-center">
                            <a href="/" className='flex items-center justify-center'>
                                <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-red-800 to-rose-400 flex items-center justify-center font-extrabold text-black text-xl mr-3">
                                    B
                                </div>
                                <span className="text-2xl font-bold name pt-1">
                                        BALAMURALI
                                </span>
                            </a>
                    </motion.div>

                    {/*Desktop navigation */}
                    <nav className="lg:flex hidden space-x-8">
                            {navcomp.map((item, index) => (
                                    <motion.a
                                    initial={{opacity:0, y:-20}}
                                    animate={{opacity:1, y:0}}
                                    className="group relative header-ele"
                                    transition={{typr:"spring", stiffness:100, damping:20, delay:0.7+index*0.2}}
                                    key={index}
                                    href={item.ref}>{item.key}
                                    <span className="navul"></span>
                                    </motion.a>
                            ))}
                            <motion.div 
                            className='py-2'
                            initial={{opacity:0,y:-20}}
                            animate={{opacity:1,y:0}}
                            transition={{typr:"spring", stiffness:100, damping:20,delay:2.1}}>
                                <a className='dcv group relative' href={resume} target='blank'>
                                    Download CV
                                    <span className="button-ul"></span>
                                </a>
                            </motion.div>
                    </nav>

                    {/*Mobile menu button*/}
                    <div className="lg:hidden flex items-center">
                        <motion.button
                        whileTap={{scale:0.7}}
                        onClick={toggleMenu} 
                        className='social-icons'>
                            {isOpen? <FiX className='h-6 w-6'/> : <FiMenu className='h-6 w-6'/>}
                        </motion.button>
                    </div>
            </div>
            {/*Mobile navigation*/}
            {isOpen && (
            <motion.div 
            initial={{opacity:0, height:0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity:0, height:0}}
            transition={{duration:0.3}}
            className='lg:hidden overflow-hidden px-4 py-5 space-y-5'>
                <nav className='flex flex-col space-y-3'>
                    {navcomp.map((item,index) => (
                        <a className="header-ele" onClick={toggleMenu} key={index} href={item.ref}>
                            {item.key}
                        </a>
                    ))}
                    <a className='dcv group relative' href={resume} target='blank'>
                        Download CV
                    </a>
                </nav>
                <div className='pt-4 border-t border-violet-300 '>
                    <div className='flex space-x-5'>
                        <a href="https://github.com/BALAMURALI-404" target='_blank'>
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
            )}
    </header>
)
}

export default Header
