import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

function Contact() {
    const contact_details = [
        {
            medium: "Mail",
            logo: <IoIosMail />,
            link: "mailto:bbalamurali2004@gmail.com",
            username: "bbalamurali2004@gmail.com"
        },
        {
            medium: "LinkedIn",
            logo: <FaLinkedin />,
            link: "https://www.linkedin.com/in/balamurali12/",
            username: "balamurali12"
        },
        {
            medium: "Github",
            logo: <FaGithub />,
            link: "https://github.com/BALAMURALI-404",
            username: "BALAMURALI-404"
        },
        {
            medium: "Telegram",
            logo: <FaTelegram />,
            link: "https://t.me/Balamurali_12",
            username: "Balamurali_12"
        },
    ]
return (
    <section id='Contact' className='min-h-screen pt-14'>
        <motion.h2 
        className="heading lg:mr-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}>
          Contact
        </motion.h2>
        <div className='flex flex-col lg:flex-row items-center p-4 gap-7'>
            {/* left part */}
            <div className='w-full lg:w-[50%] flex flex-col mt-10 items-center gap-y-5 '>
            {
                contact_details.map((detail,index) => (
                    <motion.a className=" w-[80%] border group flex bg-gray-800/20 backdrop-blur-sm p-4 gap-10 items-center rounded-lg shadow-md hover:border-red-500 transition-all duration-300"
                     key={index} href={detail.link} target="blank"
                     initial={{opacity:0,x:-15}}
                     whileInView={{opacity:1,x:0}}
                     transition={{type:"spring",stiffness:100,damping:20,delay:index*0.2,duration:0.8}}>
                        <h2 className="text-[40px] group-hover:text-red-500 duration-300">{detail.logo}</h2>
                        <div className=" flex flex-col ">
                            <h2 className="text-[20px] font-mono group-hover:text-red-500 duration-300">{detail.medium}</h2>
                            <h2 className="text-[15px] font-mono group-hover:text-red-500 duration-300">{detail.username}</h2>

                        </div>
                    </motion.a>
                ))
            }
            </div>
            {/* right part */}
            <ContactForm/>
        </div>
    </section>
)
}

export default Contact
