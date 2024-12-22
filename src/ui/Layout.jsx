import { Acerca } from "../components/Acerca"
import { Banner } from "../components/Banner"
import { Tecnologias } from "../components/Tecnologias"


export const Layout = () => {
  return (
    <>

      <Banner/>
      <hr/>
      <Acerca/>
      <hr/>
      <Tecnologias/>

      <div className="text-white text-center text-gray-400">
        <p>&copy; 2024 Diseñado y programado por  <a href="https://linktr.ee/sronaalz" target="_blank">Ronal Sánchez</a></p>
      </div>
    </>
  )
}

