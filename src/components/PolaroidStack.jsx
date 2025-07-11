import { motion } from "framer-motion";
import quote from "../../images/karuthu.png"
import from from "../../images/from.png"
import me from "../../images/me.jpg"

export default function ScatteredPhotos() {
  return (
    <section className="w-full h-[80vh] flex justify-center items-center">
      {/* Group wrapper with relative positioning */}
      <div className="relative w-[300px] sm:w-[360px] md:w-[420px] h-[320px] sm:h-[360px] md:h-[400px]">
        
        {/* Photo 1 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type:"spring", stiffness:40, damping:25,delay: 0.3,duration:0.3 }}
          className="absolute top-[4%] left-5 -rotate-8 bg-white p-2 rounded-md shadow-xl w-[130px] sm:w-[150px] md:w-[180px]"
        >
          <img src={quote} alt="Quote" className="w-full rounded" />
          <span className="text-black font-kalam text-center block py-1">Quote</span>
        </motion.div>

        {/* Photo 2 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type:"spring", stiffness:40, damping:25,delay: 0.6,duration:0.6 }}
          className="absolute top-[55%] left-[33%] rotate-10 bg-white p-2 rounded-md shadow-xl w-[130px] sm:w-[150px] md:w-[180px]"
        >
          <img src={from} alt="From" className="w-full rounded" />
          <span className="text-black font-kalam text-center block py-1">From</span>
        </motion.div>

        {/* Photo 3 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type:"spring", stiffness:40, damping:25,delay: 0.9,duration:0.9 }}
          className="absolute top-0 right-[5%] rotate-5 bg-white p-2 rounded-md shadow-xl w-[130px] sm:w-[150px] md:w-[180px]"
        >
          <img src={me} alt="Me" className="w-full rounded" />
          <span className="text-black font-kalam text-center block py-1">Me</span>
        </motion.div>
      </div>
    </section>
  );
}
