import "../styles/projectCard.css"
import { motion } from "framer-motion"

const ProjectCard = ({project,index,onClick}) => {
  return (
    <motion.div 
    initial={{opacity:0,x:10,y:10}}
    whileInView={{opacity:1,x:0,y:0}}
    transition={{type:"spring",stiffness:100,damping:20,delay:index*0.3}}
    className='outer-box'>
        <div  
            className='image-container'
            style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: "path('M 0 20 A 20 20 0 0 1 20 0 H 195 Q 210 0 225 20 L 250 45 Q 255 50 265 50 H 280 A 20 20 0 0 1 300 70 V 170 A 20 20 0 0 1 280 190 H 20 A 20 20 0 0 1 0 170 Z')"
            }}> 
        </div>
        <div className='project-name-bg cursor-pointer hover:bg-red-500/80  transition-colors duration-300' onClick={onClick}>
            <h3 className='project-name'>
            {project.title}
            </h3>
        </div>
        <a href={project.link} target="blank" className="project-link">↗</a>
    </motion.div>
  )
}

export default ProjectCard;
