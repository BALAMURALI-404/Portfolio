import {useState, useEffect} from 'react';
import Highlight from "../../constants/Highlights.const"
import {motion} from "framer-motion"
import "../styles/highlight.css"

function Highlights() {
    const [index,setIndex] = useState(0);

    const nextIndex = () => {
        setIndex((prev)=>(prev+1)%Highlight.length);
    };

    const prevIndex = () => {
        setIndex((prev) => (prev-1+Highlight.length)%Highlight.length);
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            nextIndex();
        },3000);
        return () => clearInterval(interval);
    });
  return (
    <section id="Highlights" className="highlight">
      <motion.h2 
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{type:"spring", stiffness: 100, damping:20, delay:0.8, duration:2}}
      className="heading pb-5">
        HIGHLIGHTS
      </motion.h2>
      <div className="highlight-body">
        {/* Certificate Preview */}
        <motion.div 
        className="cert-preview"
        initial={{opacity:0, x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{type:"spring", stiffness:100, daming:20, delay:0.5}}>
          <div
            className="cert"
            style={{
              backgroundImage: `url(${Highlight[index].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <button
              className="h-full absolute w-[30%] left-0"
              onClick={() => prevIndex()}
            ></button>
            <button
              className="h-full absolute w-[30%] right-0"
              onClick={() => nextIndex()}
            ></button>
          </div>
        </motion.div>
        {/* Description */}
        <motion.div 
        className="highlight-description"
        initial={{opacity:0, x:50}}
        whileInView={{opacity:1,x:0}}
        transition={{type:"spring", stiffness:100, daming:20, delay:0.5}}>
          <p className="p-5 text-violet-200 text-justify">{Highlight[index].description}</p>
          <div className="flex flex-wrap gap-2 p-4">
            {Highlight[index].topics.map((topic, idx) => (
              <span
                key={idx}
                className="bg-violet-200 text-black text-sm rounded-full px-2"
              >
                {topic}
              </span>
            ))}
          </div>
          {Highlight[index].link && (
            <a
              href={Highlight[index].link}
              target="blank"
              className="view-cert-button"
            >
              VIEW↗
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights
