import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { SiNestjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";




import { useScrollReveal } from "../hook/Scroll";




export const Tecnologias = () => {

    const isVisible = useScrollReveal(100)
    return (

        <>
            <aside className={`text-white text-center m-20 ${isVisible ? "opacity-100 animate__animated animate__backInLeft" : "opacity-0"}`}>
                <h1 className="text-4xl text-center md:text-5xl">TECNOLOGIAS</h1>
                <h2 className="desarrollo text-2xl mt-20">DESARROLLO FULLSTACK</h2>
                <ul className="m-5 md:m-10">
                    <li className="flex flex-wrap justify-center md:justify-center  gap-4  text-black animate__animated animate__backInUp">
                        <span className="flex items-center justify-center px-2 py-1 gap-1 bg-[#F6F6F6] rounded-md">
                            <IoLogoJavascript className="text-white" />
                            Javascript
                        </span>
                        <span className="flex items-center justify-center px-2 py-1 gap-1 bg-[#F6F6F6] rounded-md">
                            <SiTypescript className="text-white" />
                            Typescript
                        </span>
                        <span className="flex items-center justify-center px-2 py-1 gap-1 bg-[#F6F6F6] rounded-md">
                            <IoLogoReact className="text-white" />
                            React
                        </span>
                        <span className="flex items-center justify-center px-2 py-1 gap-1 bg-[#F6F6F6] rounded-md">
                            <SiNestjs className="text-white" />
                            NestJS
                        </span>

                        <span className="flex items-center justify-center px-2 py-1 gap-1 bg-[#F6F6F6] rounded-md">
                            <FaNodeJs className="text-white" />
                            NodeJS
                        </span>

                        <span className="flex items-center justify-center px-2 py-1 gap-1 bg-[#F6F6F6] rounded-md">
                            <FaJava className="text-white" />
                            Java
                        </span>

                        <span className="flex items-center justify-center px-2 py-1 gap-1 bg-[#F6F6F6] rounded-md">
                            <SiSpring className="text-white" />
                            Spring
                        </span>


                    </li>



                </ul>
                <h2 className="desarrollo text-2xl mt-10">BASE DE DATOS Y CLOUD</h2>
                <ul className="m-5 md:m-10">
                    

                    <li className="flex flex-wrap justify-center md:justify-center  gap-4  text-black animate__animated animate__backInUp">
                        <span className="flex items-center justify-center px-2 py-1 gap-1 bg-[#F6F6F6] rounded-md">
                            <SiMysql className="text-white" />
                            MySQL
                        </span>

                        <span className="flex items-center justify-center px-2 py-1 gap-1 bg-[#F6F6F6] rounded-md">
                            <SiPostgresql className="text-white" />
                            Postgresql
                        </span>
                        <span className="flex items-center justify-center px-2 py-1 gap-1 bg-[#F6F6F6] rounded-md">
                            <FaDocker className="text-white" />
                            Docker
                        </span>
                        <span className="flex items-center justify-center px-2 py-1 gap-1 bg-[#F6F6F6] rounded-md">
                            <SiGooglecloud className="text-white" />
                            Google Cloud
                        </span>
                    </li>

                </ul>

            </aside>
        </>
    )
}