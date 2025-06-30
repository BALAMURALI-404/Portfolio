import { motion } from 'framer-motion'
import projects from "../../constants/Project.const.js"
import "../styles/project.css"
import { useState } from 'react'
import { clipPath } from 'framer-motion/client';

function Project() {
    const[tab,setTab] = useState('All');
    const handleTabChange = (newTab) =>{
        setTab(newTab);
    }
  return (
    <div id='Projects' className='project'>
      <motion.h2 
        className="heading "
        initial={{ opacity: 0, y:20 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{type:"spring",stiffness: 100, damping:20, delay:0.8,duration:2}}>
        PROJECTS
      </motion.h2>
      {/*Projects filter bar */}
      <div className='sticky top-5 z-10 md:pl-20'>
        <div className='project-filter-bar'>
        {['Software','All','Mechatronics'].map((cat,index)=>(
            <button 
            key={index} onClick={()=>handleTabChange(cat)}
            className={`project-filter-button ${tab===cat?"active":""}`} >
                {cat}
            </button>
        ))}
      </div>
      </div>
      {/*Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-10 gap-y-5 pt-10'>
            {projects.filter(project => tab==='All' || project.category===tab).map((project,index)=>(
              <div 
                key={index} 
                className='h-[250px] w-[300px] relative bg-zinc-700 shadow-2xl  flex items-center justify-center'
                style={{
                  //backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: "path(M 0,10 L 10,0 L 210,0 L 220,10 L 250,40 L 260,50 L 290,50 L 300,60 L 300,240 L 290,250 L 10,250 L 0,240 Z)"
                }}> 
                <button className='text-[20px] h-[20%] w-[20%]   absolute top-0 right-0'>🔗</button>
                <h3 className='font-sans font-bold text-[18px] px-3 py-1 absolute bottom-0 left-0 bg-zinc-700 rounded-tr-3xl rounded-bl-3xl'>
                  {project.title}
                </h3>
              </div>
            ))
            }
        </div>
    </div>
  )
}

export default Project
