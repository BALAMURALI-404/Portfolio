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
    <div id='Skills' className="pt-16 min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-900 to-black">
      <motion.h2 
        className="heading md:mr-20 "
        initial={{ opacity: 0, y:20 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{type:"spring",stiffness: 100, damping:20, delay:0.2,duration:2}}>
        SKILLS
      </motion.h2>
      {/*Skill Filter Bar*/}
      <div className="skill-catagory">
        {['Software','All','Mechatronics'].map((tab,index) =>(
            <motion.button 
            key={index} onClick={()=>handleCategoryChange(tab)} 
            className={`skill-cat-button ${category===tab?'active':''}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.5, duration:1 }}>
              {tab}
            </motion.button>
        ))}
      </div>
      <br /><br />
      {/*Skills grid*/}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills
          .filter(skill => category === "All" || skill.type === category)
          .map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, x:20,y:20}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{type:"spring",stiffness: 100, damping:20, delay:index *0.2,duration:0.5}}
              key={index}
              className="flex flex-col items-center p-4 bg-black/20 rounded-xl shadow-md text-white"
            >
              <span className="text-4xl">{skill.icon}</span>
              <p className="mt-2 text-sm">{skill.name}</p>
            </motion.div>
          ))}
      </div>

    </div>
)
}

export default Skill;
