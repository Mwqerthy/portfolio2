import {
    mobile,
    backend,
    business,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs
} from "../assets";

import { come } from '../assets';

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Node.js Developer",
        icon: backend,
    },
    {
        title: "React  Developer",
        icon: mobile,
    },
    {
        title: "Three.js Developer",
        icon: web,
    },
    {
        title: "Solopreneur",
        icon: business,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },

    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Node.js Developer Intern",
        company_name: "Khalifa University",
        icon: starbucks,
        iconBg: "#383E56",
        date: "June 2024 - Present",
        points: [
            [
                "Developing and maintaining server-side applications using Node.js and related technologies.",
                "Collaborating with cross-functional teams, including designers, product managers, and frontend developers, to deliver high-quality products.",
                "Designing and implementing RESTful APIs and ensuring efficient database interactions.",
                "Ensuring optimal performance and scalability of backend services.",
                "Participating in code reviews and providing constructive feedback to fellow developers."
            ]
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Lexi Pdf Reader",
        description:
            "A Web-based Pdf Reader that has Ai word look up feature in to it.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "openai",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Google Doc Chatting Extnesion",
        description:
            "Chat with your freinds while working on a shared google doc!",
        tags: [
            {
                name: "",
                color: "blue-text-gradient",
            },
            {
                name: "",
                color: "green-text-gradient",
            },
            {
                name: "",
                color: "pink-text-gradient",
            },
        ],
        image: come,
        source_code_link: "https://github.com/",
    }
];

export { services, technologies, experiences, testimonials, projects };