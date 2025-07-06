import {useState, useEffect} from 'react';
import Highlight from "../../constants/Highlights.const"
import {motion} from "framer-motion"

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
    <div id="Highlights" className="min-h-screen pt-14 min-w-96 bg-black/10">
      <motion.h2 
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      transition={{type:"spring", stiffness: 100, damping:20, delay:0.8, duration:2}}
      className="heading pb-5">
        HIGHLIGHTS
      </motion.h2>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-8">
        {/* Certificate Preview */}
        <motion.div 
        className="w-full lg:w-[70%] flex justify-center "
        initial={{opacity:0, x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{type:"spring", stiffness:100, daming:20, delay:0.5}}>
          <div
            className="w-[90%] md:w-full lg:max-w-[750px] aspect-[1.414/1] relative shadow-2xl rounded-2xl"
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
        className="w-full lg:w-[30%] min-h-[500px] flex flex-col justify-center pb-5 items-center bg-white/10 rounded-lg lg:mr-16"
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
              className="text-[16px] bg-violet-300 text-black font-semibold rounded-md px-2 underline hover:bg-red-500/70"
            >
              VIEW↗
            </a>
          )}
        </motion.div>
      </section>
    </div>
  )
}

export default Highlights
