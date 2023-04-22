import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material"
import port1 from "../../assets/images/port/port1.jpg"
import port2 from "../../assets/images/port/port2.jpg"
import port3 from "../../assets/images/port/port3.jpg"
import port4 from "../../assets/images/port/port4.jpg"
import port5 from "../../assets/images/port/port5.jpg"
import port6 from "../../assets/images/port/port6.jpg"

import team1 from "../../assets/images/testimonials/team-1.png"
import team2 from "../../assets/images/testimonials/team-2.png"
import team3 from "../../assets/images/testimonials/team-3.png"

import b1 from "../../assets/images/blog/b1.png"
import b2 from "../../assets/images/blog/b2.png"
import b3 from "../../assets/images/blog/b3.jpg"

import man from "../../assets/images/man.png"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "GREGORY",
    post: "WEB DEVELOPER",
    design: "UI / UX DEVELOPER",
    desc: "Hi all, I am a frontend developer with an active lifestyle. I like to create something new and unusual all the time. If you are looking for an active and professional developer, you came to the right place.",
  },
]
export const about = [
  {
    desc: "As a frontend developer, I have specialized skills and knowledge in website and web application development, including HTML, CSS and JavaScript. I am involved in creating user interfaces that provide a user-friendly application for clients and users.",
    desc1: "In addition, I have experience with various libraries and frameworks such as React and Vue.js. I am also familiar with design principles and can do UI and UX related tasks. Overall, I can create high quality web applications that fully meet the needs of users and businesses.",
    cover: man,
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Creative design refers to the process of developing new ideas, concepts, and solutions that are both innovative and visually appealing.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: '"Clean Code" is a term used to describe well-organized and readable code that is easy to understand, modify, and maintain.',
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Responsive design is a web design approach that aims to create websites that adapt and respond to the size and behavior of a user's screen.",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Material UI is a popular library of React components that follows Google's material design guidelines.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Material UI Icons are a collection of stylized icons that can be used in web and app design.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: '"Awesome Support" is a phrase commonly used to describe exceptional customer service.',
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "16",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "92",
    title: "COMPLETED PROJECTS",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: port1,
    name: "The helmet",
    category: "marketing",
    title: "Grey Logo",
  },
  {
    id: 2,
    cover: port2,
    name: "Watch",
    category: "design",
    title: "Grey Logo",
  },
  {
    id: 3,
    cover: port3,
    name: "Business cards",
    category: "development",
    title: "Grey Logo",
  },
  {
    id: 4,
    cover: port4,
    name: "The Bottle",
    category: "marketing",
    title: "Grey Logo",
  },
  {
    id: 5,
    cover: port5,
    name: "The jug",
    category: "design",
    title: "Grey Logo",
  },
  {
    id: 6,
    cover: port6,
    name: "Snacks",
    category: "development",
    title: "Grey Logo",
  },
]
export const testimonials = [
  {
    id: 1,
    text: "Front End Developer is a term used to refer to a professional who develops the user-facing part of a website or application. The role of a Front End Developer involves the creation of visually appealing and interactive interfaces using a combination of HTML, CSS, and JavaScript.",
    image: team1,
    name: "Thomas Shelby",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Back-end developer - a specialist who deals with the software and administrative part of the web application, the internal content of the system, the server technologies - database, architecture, software logic.",
    image: team2,
    name: "Ragnar Lothbrok",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "What is a React developer? A React developer designs and creates JavaScript-based applications for web or mobile environments. They typically specialize in front-end development.",
    image: team3,
    name: "Thor Odinson",
    post: "React Developer",
  },
]
export const blog = [
  {
    id: 1,
    title: "Learn Programming Skills",
    date: "Jun 27, 2022",
    author: "Eddie Brock",
    desc: "Programming skills are essential in today's technology-driven world. From building software applications to designing websites and maintaining databases, programming skills are in high demand across industries.",
    cover: b1,
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Bruce Wayne",
    desc: "Use of Color: Color can evoke emotion and set the tone of a design. Use of colors that are harmonious and in-line with the brand can help create a cohesive and visually appealing design.",
    cover: b2,
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Steve Rogers",
    desc: "Lightroom presets are an efficient way to edit and enhance your photos. There are thousands of presets available online, but the best ones offer a unique style and look.",
    cover: b3,
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "My Country",
  },
  {
    icon: <PhoneIphone />,
    text1: "+7(900)000 00-00",
  },
  {
    icon: <EmailOutlined />,
    text1: "hello@thetheme.io",
  },
]

export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
