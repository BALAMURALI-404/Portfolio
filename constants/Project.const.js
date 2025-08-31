import apds from "../public/apds.png"
import pccms from "../public/pccms.png"
import pf from "../public/pf.png"
import sasd from "../public/sasd.png"
import textrovert from "../public/textrovert.png"

const projects = [
    {
        title: "Product Catalog CMS",
        image: pccms,
        description:"A full-stack Content Management System (CMS) developed to manage a product catalog dynamically. The backend was built using Node.js, Express, and MongoDB, while the frontend used React for rendering dynamic interfaces. Admins can add, edit, or delete product listings, upload images, and manage categories.",
        keywords: ["React", "Node.js", "MongoDB","Express","MERN","crud","Chakra-UI"],
        link: "https://github.com/BALAMURALI-404/Product-Catalog-CMS",
        category: "Software",
    },
    {
        title: "Smart Agro Storage",
        image: sasd,
        description:
            "A compact refrigeration system tailored for small roadside vendors and rural farmers. It utilizes a Peltier module-based thermoelectric cooling system to preserve fruits, vegetables, or dairy in small quantities. It is designed to be low-cost, portable, and energy-efficient, ideal for small-scale use cases. The device runs on DC supply and uses a temperature control mechanism using microcontrollers and sensors.",
        keywords: ["Peltier", "DHT11", "ESP32", "AdaFruit IoT","Refrigirator"],
        category: "Mechatronics",
    },
    {
        title: "Automated Product Dispensing System",
        image: apds,
        description:
            "An automated ration dispensing system designed to eliminate manual errors, fraud, and inefficiencies in public distribution. It uses RFID authentication and IoT-based automation to validate users and dispense commodities (like rice or wheat) through a microcontroller-based setup. Precised measurement is ensured through quad load cell configuration. The system ensures transparency and reduces human interference.",
        keywords: ["ESP32", "Load cell","HX711","Nema 17","DRV8825","RFID-PN532","LCD"],
        category: "Mechatronics",
    },
    {
        title: "Personal Portfolio Website",
        image: pf,
        description:
            "A personal portfolio website built to showcase my skills, background, and projects in a structured and visually appealing format. The site is responsive and interactive, designed to give a clear overview of my capabilities. It is developed using React for component-based structure, styled with Tailwind CSS for utility-first responsive design, animated with Framer Motion for smooth transitions, and bundled using Vite for fast development performance.",
        keywords: ["React", "TailwindCSS", "Framer Motion","Spline"],
        link: "https://github.com/BALAMURALI-404/portfolio",
        category: "Software",
        demo:"https://balamurali-404-portfolio.netlify.app/",
    },
    {
        title: "Textrovert",
        image: textrovert,
        description: "A real-time chat application enabling users to communicate instantly. Built with Node.js, Express, and Socket.io for the backend, and React for the frontend. Features include user authentication, private messaging, and dynamic chat rooms with responsive UI design using Daisy-UI.",
        keywords: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Chat App", "Daisy-UI", "JWT"],
        link: "https://github.com/BALAMURALI-404/Textrovert/",
        category: "Software",
        demo: "https://textrovert.vercel.app/",
    }
];

export default projects;
