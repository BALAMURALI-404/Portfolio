import { motion, AnimatePresence } from 'framer-motion'
import projects from "../../constants/Project.const.js"
import "../styles/project.css"
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModel from '../components/ProjectModel.jsx'

function Project() {
    const[tab,setTab] = useState('All');
    const handleTabChange = (newTab) =>{
        setTab(newTab);
    }
    const [selectedProject,setSelectedProject] = useState(null);

  return (
    <section id='Projects' className='project min-w-96'>
      <motion.h2 
        className="heading "
        initial={{ opacity: 0, y:20 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{type:"spring",stiffness: 100, damping:20, delay:0.5,duration:1}}>
        PROJECTS
      </motion.h2>
      {/*Projects filter bar */}
      <div className='sticky top-5 z-10 md:pl-20'>
        <div className='project-filter-bar'>
        {['Software','All','Mechatronics'].map((cat,index)=>(
            <motion.button 
            initial = {{opacity:0, y:-20}}
            whileInView={{opacity:1, y:0}}
            transition={{type:"spring",stiffness:100,damping:25,delay:index*0.4,duration:1.2 }}
            key={index} onClick={()=>handleTabChange(cat)}
            className={`project-filter-button ${tab===cat?"active":""}`} >
                {cat}
            </motion.button>
        ))}
      </div>
      </div>
      {/*Projects Grid */}
        <div className='project-body'>
            {projects.filter(project => tab==='All' || project.category===tab).map((project,index)=>(
                <ProjectCard key = {index} onClick={()=>setSelectedProject(project)} project={project} index={index}/>
            ))
            }
        </div>
      {/*Project Detail PopUp */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModel project={selectedProject} onClose={()=>setSelectedProject(null)}/>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Project
