import { motion } from 'framer-motion'
import projects from "../../constants/Project.const.js"
import "../styles/project.css"
import { useState } from 'react'

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
      <div className=' md:pl-20'>
        <div className='project-filter-bar'>
        {['Software','All','Mechatronis'].map((cat,index)=>(
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
                <a href="">
                    <div key={index} 
                    className='h-[250px] w-[300px] relative flex flex-col rounded-3xl shadow-2xl  items-center'
                    style={{backgroundImage: `url(${project.image})`,backgroundSize: 'cover',backgroundPosition: 'center'}}>
                        <button className='text-[20px] h-[60px] bg-neutral-800 w-[60px] rounded-tr-3xl rounded-bl-3xl absolute top-0 right-0'>🔗</button>
                        <h3 className='font-sans absolute bottom-0 font-bold text-[20px] pl-3 pb-3'>{project.title}</h3>
                    </div>
                </a>
            ))
            }
        </div>
    </div>
  )
}

export default Project
