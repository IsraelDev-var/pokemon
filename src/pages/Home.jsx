import Footer from "../components/Footer"

const Home = () => {
  return (
    <main >
        <section className="main h-screen grid place-items-center p-2 standar-value">
        <seccion className="home__container min-w-[300px] max-w-[600px]">
            <div className="home__image">
                <img src="/images/image11.png" alt="img titulo" className="home__img bg-cover bg-center md:max-w-[660px]" />
            </div>
            <div className="home__info">
                <h2 className="home__title text-red-500">¡Hola entrenador!</h2>
                <p>Para pode comenzar, <span>dame tu nombr</span></p>
            </div>
            <div className="container__input ">
                <input type="text" required placeholder="Tu nombre" id="name" className="home__input md:w-[300px] p-2 shadow-lg" />
                <button className="home__button py-2 px-[.5rem] m bg-red-600">Comenzar</button>
            </div>
        </seccion>

        </section>
        <Footer />

    </main>

  )
}
export default Home