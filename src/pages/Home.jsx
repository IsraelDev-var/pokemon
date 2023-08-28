import Footer from "../components/Footer";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameUser = e.target.name.value;
    console.log(nameUser);
  };
  return (
    <main>
      <section className="main h-screen grid place-items-center p-2 standar-value">
        <section className="home__container min-w-[300px] max-w-[600px]">
          <div className="home__image">
            <img
              src="/images/image11.png"
              alt="img titulo"
              className="home__img bg-cover bg-center md:max-w-[660px]"
            />
          </div>
          <div className="home__info">
            <h2 className="home__title text-red-500">¡Hola entrenador!</h2>
            <p>
              To start, <span className="text-red-500">givr me tor name</span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="home__form container__input "
          >
            <input
              type="text"
              required
              autoComplete="off"
              placeholder="Touy name"
              id="name"
              className="home__input md:w-[300px] p-2 shadow-lg"
            />
            <button className="home__button py-2 px-[.5rem] m bg-red-600">
              start
            </button>
          </form>
        </section>
      </section>
      <Footer />
    </main>
  );
};
export default Home;
