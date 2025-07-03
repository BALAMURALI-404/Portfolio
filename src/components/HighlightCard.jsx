import { useEffect, useState } from "react"
import Highlights from "../../constants/Highlights.const.js";
import "../styles/highlight.css";
import { motion } from "framer-motion";


function HighlightCard() {
    const [index,setIndex] = useState(0);
    const [flipping,setFlipping] = useState(false);

    const nextIndex = () => {
        setFlipping(true);
        setTimeout(()=>{
            setIndex((prev)=>(prev+1)%Highlights.length);
            setFlipping(false);
        },600);
    };

    useEffect(()=>{
        const interval = setInterval(()=>{
            nextIndex();
        },3000);
        return () => clearInterval(interval);
    });

  return (
    <div className="w-[70%] h-96 perspective">
        <motion.div 
        style={{transformStyle:"preserve-3d"}}
        animate={{rotateY:flipping?180:0}}
        transition={{duration:0.6}}
        className="w-full h-full rounded-xl bg-gray-300 shadow-lg">
            <div className="front face absolute w-full h-full backface-hidden">
                <img src={Highlights[index].image} alt="" 
                className="w-full h-full object-cover rounded-xl"/>
            </div>
            <div className="back face absolute w-full h-full rotate-y-180 frontface-hidden">
                <img src={Highlights[(index+1)%Highlights.length].image} alt="" 
                className="w-full h-full object-cover rounded-xl"/>
            </div>

        </motion.div>
      
    </div>
  )
}

export default HighlightCard
