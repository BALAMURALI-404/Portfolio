import { motion } from 'framer-motion'

const ProjectModel = ({project,onClose}) => {
  if(!project) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center" onClick={onClose}>
      <motion.div 
      initial={{opacity:0,scale:0.5}}
      animate={{opacity:1,scale:1}}
      transition={{duration:0.3}}
      exit={{opacity:0,scale:0.5}}
      className="relative bg-gray-900/90 w-[90%] max-w-[500px] p-6 rounded-2xl shadow-2xl" onClick={e => e.stopPropagation()}>
        <button
          className="absolute top-4 right-6 text-xl text-[32px] text-violet-200 hover:text-red-500 hover:scale-90"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-violet-200 mt-3 mb-3 text--500/50">{project.title}</h2>
        <p className="text-sm text-violet-100 mb-4 text-justify">{project.description || 'No description provided.'}</p>

        {/* Optional tags or link */}
        {project.keywords && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.keywords.map((tag, i) => (
              <span key={i} className="px-2 py-1 bg-violet-200 font-black text-gray-900/90 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}

        <img src={project.image} alt="" className="mb-3 rounded-lg"/>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-200 underline text-sm hover:scale-105 hover:text-sky-500 duration-300"
          >
            View Project ↗
          </a>
        )}
      </motion.div>
    </div>
  )
}

export default ProjectModel
