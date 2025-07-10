import { motion } from "framer-motion";

export default function ScatteredPhotos() {
  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Photo 1 - Left Top */}
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.5 }} 
      className="absolute top-[1%] lg:top-[10%] left-[5%] lg:left-[15%] rotate-[-10deg] bg-white p-2 rounded-md shadow-xl w-[180px] md:w-[220px]">
        <img
          src="/images/karuthu.png"
          alt="photo1"
          className="w-full h-auto object-cover rounded"
        />
        <span className='text-black font-kalam flex justify-center py-2'>Quote</span>
      </motion.div>

      {/* Photo 2 - Right Top */}
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, delay: 1 }} 
      className="absolute bottom-[1%] right-[0%] lg:right-[20%] rotate-[5deg] bg-white p-2 rounded-md shadow-xl w-[180px] md:w-[220px]">
        <img
          src="/images/from.png"
          alt="photo2"
          className="w-full h-auto object-cover rounded"
        />
        <span className='text-black font-kalam flex justify-center py-2'>From</span>
      </motion.div>

      {/* Photo 3 - Bottom Center */}
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, delay: 1.5 }} 
      className="absolute top-[1%] lg:top-[6%]  right-[5%] rotate-[8deg] bg-white p-2 rounded-md shadow-xl w-[180px] md:w-[220px]">
        <img
          src="/images/me.jpg"
          alt="photo3"
          className="w-full h-auto object-cover rounded"
        />
        <span className='text-black font-kalam flex justify-center py-2'>Me</span>
      </motion.div>
    </section>
  );
}
