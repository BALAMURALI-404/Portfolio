import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import EduCard from "../components/EduCard"
import "../styles/education.css"
import Edu from "../../constants/Edu.const"
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";


function Education() {
  return (
    <section id="Education" className="edu-bg min-w-96 pt-16 ">
        <motion.h2 
        className="heading lg:mr-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}>
          EDUCATION
        </motion.h2>
          <div className="lg:mt-10 mt-10">
              <VerticalTimeline >
                  {Edu.map((Edu, index) =>{
                      return (
                        <EduCard 
                        key={index} Edu={Edu}/>
                      )
                  })}
              </VerticalTimeline>
          </div>
    </section>
  )
}

export default Education

