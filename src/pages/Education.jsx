import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import EduCard from "../components/EduCard"
import "../styles/education.css"
import Edu from "../../constants/Edu.const"
import "react-vertical-timeline-component/style.min.css";


function Education() {
  return (
    <div className="edu-bg mt-40">
        <h2 className="heading ">EDUCATION</h2>
        <div className="lg:mt-20 mt-10">
            <VerticalTimeline>
                {Edu.map((Edu, index) =>{
                    return (
                      <EduCard 
                      key={index} Edu={Edu}/>
                    )
                })}
            </VerticalTimeline>
        </div>
    </div>
  )
}

export default Education

