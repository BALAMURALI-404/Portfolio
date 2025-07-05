import {useState, useEffect} from 'react';
import Highlight from "../../constants/Highlights.const"

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
    <div id="Highlights" className="min-h-screen pt-14 min-w-96 flex flex-col items center  bg-gradient-to-b from-gray-800 to-red-500">
        <h2 className="heading">HIGHLIGHTS</h2>
        <div className="w-full h-[80vh]  flex flex-col justify-center items-center">
          <div className="w-[80%] max-w-[750px] aspect-[16/10.5] relative shadow-2xl rounded-2xl"
            style={{backgroundImage:`url(${Highlight[index].image})`,backgroundSize:'cover',backgroundPosition:'center'}}>
              <button className="h-full absolute w-[30%] left-0" onClick={()=>prevIndex() }></button>
              <button className="h-full absolute w-[30%] right-0" onClick={()=>nextIndex()}></button>
          </div>
          <a href="" className='text-[20px] underline'>view↗</a>
      </div>
    </div>
  )
}

export default Highlights
