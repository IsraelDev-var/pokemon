import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <section>
      <header className="mb-6">
        
        <div className="bg-red-600 h-16 "></div>
        <div className="bg-black h-12 relative ">
        <div className="home__image ml-2 p-4 -translate-y-14 sm:w-[350px] w-[250px] ">
          
                
                <Link to={"/pokedex"}>
                <img
                src="/images/image11.png"
                alt="img titulo"
                className="home__img bg-cover bg-center "
                />
                </Link>
            </div>
          <div
            className="h-[3.5rem] bg-white aspect-square rounded-full absolute
          left-[100%] -translate-x-[140%] top-4 border-[8px]  border-black
          "
          >
            <div
              className="h-8 bg-gray-800 aspect-square rounded-full absolute
          left-1/2 -translate-x-1/2 top-1 border-[6px] border-black
          
          "
            ></div>
          </div>
        </div>
      </header>
      {children}
    </section>
  );
};
export default Header;
