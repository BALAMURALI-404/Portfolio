import { motion } from "framer-motion"

function ContactForm() {
    
  return (
    <motion.div 
    initial={{opacity:0,x:20}}
    whileInView={{opacity:1,x:0}}
    transition={{type:"spring",stiffness:80,damping:20,delay:1.5}}
    viewport={{ once: true }}
    className='lg:w-[40%] w-[80%] max-w-[600px] flex flex-col items-center bg-gray-800/20 backdrop-blur-sm p-6 rounded-lg shadow-lg'>
        <h3 className='text-[32px] font-bold font-mono mb-4'>Quick Mail</h3>
        <form action="https://formsubmit.co/bbalamurali2004@gmail.com" method="POST" className='flex flex-col justify-center w-full gap-3'>
            <div className='flex flex-col'>
                <label htmlFor="name" className='text-[18px] font-mono  mb-1'>Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    
                    placeholder='Enter your name...'
                    className='py-1 px-2 font-mono text-black rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500'
                    required
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email" className='text-[18px] font-mono  mb-1'>Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    
                    placeholder='Enter your Email...'
                    className='py-1 px-2 font-mono text-black rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500'
                    required
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="subject" className='text-[18px] font-mono  mb-1'>Subject</label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    
                    placeholder='<Subject>'
                    className='py-1 px-2 font-mono text-black rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500'
                    required
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="message" className='text-[18px] font-mono  mb-1'>Message</label>
                <textarea
                    id="message"
                    name="message"
                    
                    placeholder='Leave your message here...'
                    className='py-1 px-2 font-mono rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[80px] text-black'
                    required
                />
            </div>
            <button
                type="submit"
                className='bg-red-500/50 hover:bg-red-600/70 transition px-4 py-2 rounded-lg font-mono mt-2'
            >
                Send
            </button>
        </form>
    </motion.div>
  )
}

export default ContactForm
