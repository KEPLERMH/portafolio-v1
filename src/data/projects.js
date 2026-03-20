import p1 from "../assets/img/projects/weather-img.png"
import p2 from "../assets/img/projects/techStore-img.png"
import p3 from "../assets/img/projects/taskFlow-img.png"

export const projects = [
    {
        id: 1,
        title: "Weather App",
        description: "Aplicación web que permite consultar el clima actual de cualquier ciudad usando una API externa.",
        image: p1,
        techs: ["React", "TypeSript", "Tailwind"],
        github: "https://github.com/KEPLERMH/Weather-App",
        demo: "https://weatherapp-pearl-five.vercel.app",
    },
    {
        id: 2,
        title: "Tech Store",
        description: "Aplicación de carrito de compras desarrollada con React + TypeScript, utilizando Context API + useReducer.",
        image: p2,
        techs: ["React", "Tailwind", "Javascript", "TypeScript"],
        github: "https://github.com/KEPLERMH/tech-store",
        demo: "https://tech-store-lyart-three.vercel.app/",
    },
    {
        id: 3,
        title: "TaskFlow – Fullstack Task Manager",
        description: "Aplicación fullstack en desarrollo para la gestión de tareas con autenticación segura y arquitectura escalable.",
        image: p3,
        techs: ["React", "Tailwind", "Node.js", "Express", "PostgreSQL"],
        github: "https://github.com/KEPLERMH/task-flow",
        demo: "",
    },

];