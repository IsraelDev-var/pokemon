import { useDispatch } from "react-redux";

import { loginUser } from "../store/slices/nameUser.slice";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
    const dispatch = useDispatch()
    const navegate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameUser = e.target.name.value;
        dispatch(loginUser(nameUser));
        navegate("/pokedex")

    };

    return (
        <main className="home__main bg-cover bg-center">
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
                <h2 className="home__title text-red-100">¡Hola entrenador!</h2>
                <p>
                To start, <span className="text-red-100 ">give me your name</span>
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
                placeholder="Your name"
                id="name"
                className="home__input outline-none md:w-[300px]  p-2 shadow-lg"
                />
                <button className="home__button text-white  transition hover:transition-all  hover:bg-red-700  py-2 px-[.5rem] m bg-red-600">
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
