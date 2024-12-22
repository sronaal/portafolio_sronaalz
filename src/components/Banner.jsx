import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import yo from '../assets/yo.jpg'


const onClickDownload = () => {

    const linkCV = "https://drive.google.com/file/d/1_5ONixeO8azXtfoWpAtCEfZ5vb0pS-Yl/view?usp=sharing"
    const link = document.createElement('a')
    link.href = linkCV
    link.target = "_blank"
    link.download = "CV-Ronal_Sánchez.pdf"
    link.click();
}

export const Banner = () => {
    return (
        <aside className="flex flex-col md:flex-row min m-10 text-white items-center md:m-40 animate__animated animate__backInLeft">
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl m-5 md:m-10">RONAL SÁNCHEZ</h1>

                <p className="m-5 md:m-10">
                    Estudiante de ingeniería en sistemas de información, <br /> un entusiasta de la programación en busca de oportunidades <br />
                    para crecer y desarrollarme en el mundo de la tecnología.
                </p>

                <ul className="m-5 md:m-10 animate__animated animate__backInUp">
                    <h3 className="mb-3 md:mb-5">Contáctame:</h3>
                    <li className="flex justify-center md:justify-start gap-4 animate-pulse">
                        <a href="https://github.com/sronaal" target="_blank">
                            <FaGithub className="text-2xl size-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/sronaalz/" target="_blank">
                            <FaLinkedin className="text-2xl size-8" />
                        </a>
                        <a href="mailto:ronal.sanx21@gmail.com">
                            <BiLogoGmail className="text-2xl size-8" />
                        </a>

                        <button className="btn bg-gray-400 p-2 rounded-lg" onClick={onClickDownload}>Descargar CV</button>
                    </li>
                </ul>
            </div>

            <div className="flex justify-center md:ml-10">
                <img src={yo} className="w-40 md:w-80 rounded-xl" />
            </div>

            
        </aside>
    )
}
