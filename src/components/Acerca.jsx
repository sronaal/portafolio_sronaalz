import { useScrollReveal } from '../hook/Scroll'

import iaImage from '../assets/iaImage.jpg'
export const Acerca = () => {

    const isVisible = useScrollReveal(80)
    return (
        <>
            <>
                <aside
                    id="text_tile"
                    className={`min m-8 text-white justify-center md:m-20 transition-opacity duration-500 ${isVisible ? "opacity-100 animate__animated animate__backInLeft" : "opacity-0"}`}
                >
                    <h1 className="text-4xl text-center md:text-5xl">ACERCA DE MI</h1>
                    <br />
                    <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center">
                        <div className="md:w-1/2 p-4">
                            <p className="m-2 text-center text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                                Soy Ronal Sánchez, un profesional apasionado y comprometido con el crecimiento personal y profesional. Mi enfoque principal es el desarrollo continuo y el aprendizaje, ya que creo firmemente en la importancia de mantenerse actualizado y explorar nuevos campos. <br/> Disfruto enfrentar desafíos complejos con un enfoque analítico y creativo, y busco constantemente oportunidades para colaborar en proyectos innovadores.
                                Valoro el trabajo en equipo y la comunicación efectiva, ya que creo que el trabajo colaborativo es esencial para lograr objetivos comunes. Estoy motivado por la oportunidad de marcar una diferencia y contribuir al éxito de proyectos que no solo son funcionales, sino también significativos.
                            </p>
                        </div>
                        <div className="md:w-2/5 p-4">
                            <img src={iaImage} alt="Imagen de Ronal Sánchez" className="  rounded-lg shadow-lg" />
                        </div>
                    </div>
                </aside>

            </>

        </>
    )
}
