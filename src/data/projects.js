import p1 from "../assets/img/projects/weather-img.png"
import p2 from "../assets/img/projects/techStore-img.png"
import p3 from "../assets/img/projects/p-3.jfif"

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
    // {
    //     id: 3,
    //     title: "Social Media Dashboard",
    //     description: "Dashboard analytics para gestión de múltiples redes sociales con métricas en tiempo real.",
    //     image: p3,
    //     techs: ["React", "Tailwind", "Javascript"],
    //     github: "https://github.com/tuusuario/ecommerce",
    //     demo: "https://ecommerce-demo.com",
    // },

];