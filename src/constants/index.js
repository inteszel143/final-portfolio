import citizenOne from "../assets/projects/citizenOne.png";
import project1 from "../assets/projects/iweft.png";
import project2 from "../assets/projects/car-rental.png";
import project3 from "../assets/projects/trends.png";
import project4 from "../assets/projects/DavcuMobile.png";

export const HERO_CONTENT = `I am a dedicated Full Stack Mobile Developer with a passion for creating innovative and efficient mobile applications. With extensive experience in both front-end and back-end development, I have a comprehensive understanding of the full mobile development lifecycle, from concept to deployment.`;

export const FRONTEND = `Frontend: React, React Native, HTML, CSS, Bootstrap, Javascript, Tailwind CSS, React Query and Zustand.`;
export const BACKEND = `Backend: Node JS, Express JS, MongoDB, Firebase, Laravel, PHP, SQL or MySQL.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "August 2024 - October 2024",
    role: "Front-end Mobile Developer",
    company: "Awork Company Denmark",
    description: `I developed a comprehensive mobile application for a citizen record system in Denmark. This app provides a complete digital solution for electronic registration, secure data storage, and easy access to relevant information for authorized users. The system eliminates the need for physical documents or scattered digital files, ensuring that all necessary data is available when needed. The app was built using React Native, TypeScript, and Expo. Implemented RESTful APIs with a Laravel backend and integrated with MySQL databases.`,
    technologies: [
      "Typescript",
      "React Native",
      "Expo",
      "Expo Router",
      "Mysql Database",
      "Postman",
      "Laravel",
    ],
  },
  {
    year: "May 2024 - August 2024",
    role: "Front-end Mobile Developer",
    company: "PH Virtual Team.",
    description: `I developed a comprehensive mobile application for booking laundry services in Dubai. This app streamlines the process of scheduling, managing, and tracking laundry services for users, providing a convenient solution for both customers and laundry service providers using JavaScript, React Native, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.`,
    technologies: [
      "Javascript",
      "React Native",
      "Tailwind CSS",
      "MongoDB",
      "Postman",
      "Expo",
    ],
  },
  {
    year: "December 2023 - May 2024",
    role: "Front-end Mobile Developer",
    company: "PH Virtual Team.",
    description: `I developed a versatile mobile application for listing and exploring various vehicles, including cars, motorcycles, trucks, and boats, all based in Dubai. This app provides a user-friendly platform for both buyers and sellers to interact and conduct transactions seamlessly.`,
    technologies: [
      "Javascript",
      "React Native",
      "Tailwind CSS",
      "Python",
      "Postman",
      "Expo",
    ],
  },
  {
    year: "July 2023 - September 2023",
    role: "Front-end Mobile Developer",
    company: "On Job Training",
    description: `Developed a social media app where I've taken inspiration from Twitter, featuring a user-friendly design reminiscent of your favorite short-form blogging platform.`,
    technologies: ["Javascript", "React Native", "Tailwind CSS", "Expo"],
  },
  {
    year: "May 2023 - Last Update",
    role: "Full Stack Mobile Developer",
    company: "Capstone Project",
    description: `A mobile e-commerce app for native handicrafts in Davao City that allows users to purchase native products and promote our handmade, local products. This app caters to three types of users: buyers, sellers, and riders, and it also provides an interface for searching, comparing, and tracking orders.`,
    technologies: [
      "Javascript",
      "React Native",
      "Tailwind CSS",
      "Expo",
      "Firebase",
    ],
  },
];

export const PROJECTS = [
  {
    title:
      "CitizenOne™ - Mobile Application for Citizen Record System - (Denmark)",
    image: citizenOne,
    description:
      "Developed a fully functional mobile application for a citizen record system in Denmark. This digital solution allows for electronic registration and secure storage of all relevant data on a user-friendly platform. The system features a central database, enabling authorized users to access critical information quickly and easily without dealing with physical documents or scattered digital files.",
    technologies: [
      "React Native",
      "Typescript",
      "Mysql",
      "Laravel",
      "Expo",
      "Expo Router",
    ],
    // apple:
    //   "https://apps.apple.com/us/app/iweft-laundry-dry-cleaning/id6578443052?platform=iphone",
    apple: "",
    google: "",
    github: "https://github.com/AWORK-AS/citizenone-mobile",
  },
  {
    title: "iWeft - Booking Laundry Mobile Application - (Dubai)",
    image: project1,
    description:
      "A fully functional mobile application for booking laundry services in Dubai. This app streamlines the process of scheduling, managing, and tracking laundry services for users, providing a convenient solution for both customers and laundry service providers using JavaScript, React Native, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.",
    technologies: [
      "Javascript",
      "React Native",
      "Tailwind CSS",
      "MongoDB",
      "Postman",
      "Expo",
    ],
    apple:
      "https://apps.apple.com/us/app/iweft-laundry-dry-cleaning/id6578443052?platform=iphone",
    google: "https://github.com/inteszel143/iweft",
    github: "https://github.com/inteszel143/iweft",
  },
  {
    title: "iMotor.app - Car Listing Mobile Application - (Dubai)",
    image: project2,
    description:
      "A fully functional mobile application for listing and exploring various vehicles, including cars, motorcycles, trucks, and boats, all based in Dubai. This app provides a user-friendly platform for both buyers and sellers to interact and conduct transactions seamlessly.",
    technologies: [
      "Javascript",
      "React Native",
      "Tailwind CSS",
      "Python",
      "Postman",
      "Expo",
    ],
    apple:
      "https://apps.apple.com/us/app/imotor-app/id6474266743?platform=iphone",
    google:
      "https://play.google.com/store/apps/details?id=com.paras23.iMotor.app&hl=en-PH",
    github: "https://github.com/inteszel143/iMotor",
  },
  {
    title: "TrendingCast - Social Media Clone Mobile Application (Ojt project)",
    image: project3,
    description:
      "A social media app where I've taken inspiration from Twitter, featuring a user-friendly design reminiscent of your favorite short-form blogging platform.",
    technologies: ["Javascript", "React Native", "Tailwind CSS", "Expo"],
    apple: "https://github.com/inteszel143/Trending-cast",
    google: "https://github.com/inteszel143/Trending-cast",
    github: "https://github.com/inteszel143/Trending-cast",
  },
  {
    title: "Davcu - E-commerce Mobile Application - (Capstone Project)",
    image: project4,
    description:
      "A mobile e-commerce app for native handicrafts in Davao City that allows users to purchase native products and promote our handmade, local products. This app caters to three types of users: buyers, sellers, and riders, and it also provides an interface for searching, comparing, and tracking orders.",
    technologies: ["Javascript", "React Native", "NodeJS", "Firebase", "Expo"],
    apple: "https://apps.apple.com/us/app/davcu/id6451493793?platform=iphone",
    google:
      "https://play.google.com/store/apps/details?id=com.paras23.DavCuApp&hl=en-PH",
    github: "https://github.com/inteszel143/davcu",
  },
];

export const CONTACT = {
  address:
    "Purok Katilingbanon Lower Katingawan, Midsayap, North Cotabato, 9410 ",
  phoneNo: "+639 2848 56233",
  email: "intesedzel@gmail.com",
};
