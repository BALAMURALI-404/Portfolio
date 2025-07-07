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
    <section id='Contact' className='min-h-screen pt-10'>
        <h2 className='heading'>Contact</h2>
        <div className='flex flex-col lg:flex-row items-center p-4 gap-7'>
            {/* left part */}
            <div className='w-full lg:w-[50%] flex flex-col mt-10 items-center gap-y-5 '>
            {
                contact_details.map((detail,index) => (
                    <a className=" w-[80%] max-w-[450px] border group flex bg-gray-800/20 backdrop-blur-sm p-4 gap-10 items-center rounded-lg shadow-md hover:border-red-500 transition-all duration-300" key={index} href={detail.link} target="blank">
                        <h2 className="text-[40px] group-hover:text-red-500 duration-300">{detail.logo}</h2>
                        <div className=" flex flex-col ">
                            <h2 className="text-[20px] font-mono group-hover:text-red-500 duration-300">{detail.medium}</h2>
                            <h2 className="text-[15px] font-mono group-hover:text-red-500 duration-300">{detail.username}</h2>

                        </div>
                    </a>
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
