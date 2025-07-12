import { useState } from "react";
import "../styles/skill.css";
import skills from "../../constants/Skill.const.js";
import { motion } from "framer-motion";

function Skill() {
const [category, setCategory] = useState('All');
const handleCategoryChange = (newCategory) => {
  setCategory(newCategory);
}
return (
    <section id='Skills' className="skills min-w-96">
      <motion.h2 
        className="heading "
        initial={{ opacity: 0, y:20 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{type:"spring",stiffness: 100, damping:20, delay:0.5,duration:1}}
        viewport={{ once: true }}>
        SKILLS
      </motion.h2>
      {/*Skill Filter Bar*/}
      <div className="sticky z-20 top-5 md:pl-20">
        <div className="skill-catagory">
        {['Software','All','Mechatronics'].map((tab,index) =>(
            <motion.button 
            key={index} onClick={()=>handleCategoryChange(tab)} 
            className={`skill-cat-button ${category===tab?'active':''}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.4, duration:1.2 }}>
              {tab}
            </motion.button>
        ))}
      </div>
      </div>
      <br /><br />
      {/*Skills grid*/}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-[70%] ">
        {skills
          .filter(skill => category === "All" || skill.type === category)
          .map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, x:20,y:20}}
              whileInView={{ opacity: 1, x:0,y: 0}}
              transition={{type:"spring",stiffness: 100, damping:20, delay:index*0.1, duration:0.5}}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col items-center p-4 bg-violet-300/10 backdrop-blur-sm hover:shadow-red-500 rounded-xl shadow-md text-white"
            >
              <img src={skill.icon} loading="lazy" alt={"..."}  className="w-20 h-20 object-contain"/>
              <p className="mt-2 text-xs">{skill.name}</p>
            </motion.div>
          ))}
      </div>

    </section>
)
}

export default Skill;
