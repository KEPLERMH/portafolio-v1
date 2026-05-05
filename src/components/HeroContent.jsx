import React from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="m-3 flex flex-col justify-center items-center mt-20">
      <h5 className="text-center text-acentocyan bg-border-btns rounded-full px-3 py-2 text-sm mb-6">
        🙌<span> Hola, soy</span>
      </h5>

      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl font-semibold text-center text-gradient-custom md:text-[80px]">
          Kepler Matos
        </h1>
        <h3 className="text-xl text-center text-secondarytext md:text-[22px]">
          Desarrollador Full Stack | Bachiller en Ingeniería de Sistemas
        </h3>
        <p className="text-center text-lg  text-trirdtext md:text-xl">
          Especializado en React, Node.js, C#, ASP.NET Core y soluciones escalables
        </p>
      </div>
      <div className="">
        <div className="flex gap-3 mt-11">
          <button
            type="button"
            className="px-8 py-3 rounded-full btn-custom transition duration-400 ease-in-out hover:shadow-xl
                            hover:shadow-cyan-500/50 hover:scale-105"
          >
            <a href="#contact" className="text-sm">
              Contactame
            </a>
          </button>
          <button
            type="button"
            className="px-8 py-3 rounded-full bg-border-btns hover:bg-white/30 transition duration-400 ease-in-out"
          >
            <a href="#projects" className="text-sm">
              Ver Proyectos
            </a>
          </button>
        </div>
        <ul className="flex mt-12 justify-center gap-6">
          <li className="btns-cta bg-border-btns ">
            <a href="https://github.com/KEPLERMH" target="_blank">
              <Github className="w-4 h-4 md:w-6 md:h-6" />
            </a>
          </li>
          <li className="btns-cta bg-border-btns">
            <a
              href="https://www.linkedin.com/in/kepler-matoshuerta-93b7b4256/"
              target="_blank"
            >
              <Linkedin className="w-4 h-4 md:w-6 md:h-6" />
            </a>
          </li>
          <li className="btns-cta bg-border-btns">
            <a href="#" target="_blank">
              <Mail className="w-4 h-4 md:w-6 md:h-6" />
            </a>
          </li>
        </ul>
        <div className=" mt-16 flex justify-center animate-float">
          <ArrowDown size={25} color="#9CA3AF" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
