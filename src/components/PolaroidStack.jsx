import { motion } from "framer-motion";
import me from "../../images/me.jpg"

export default function ScatteredPhotos() {
  return (
    <section className="w-full h-[80vh] flex justify-center items-center">
      {/* Group wrapper with relative positioning */}
      <div className="relative w-[300px] md:w-[420px] lg:w-[350px] h-[320px] lg:h-[360px] md:h-[400px]">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type:"spring", stiffness:40, damping:25,delay: 0.9,duration:0.9 }}
          className=" bg-white p-2 rounded-md shadow-xl w-full"
        >
          <img src={me} alt="Me" className="w-full rounded" />
          <span className="text-black font-kalam text-center block py-1">Me</span>
        </motion.div>
      </div>
    </section>
  );
}
