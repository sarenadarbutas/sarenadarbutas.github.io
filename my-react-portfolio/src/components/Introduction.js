import picMe from "../img/picMe.jpeg";

const Introduction = () => {

  return (
    <div className="bg-orange-100 flex flex-col justify-start items-center py-20">
      <section className="flex flex-col items-center justify-center mb-0 pb-0">
        <div className="rounded-full overflow-hidden w-80 h-80 mb-16 ring-4 ring-black ring-opacity-50">
          <img className="shadow object-cover w-full h-full" src={picMe} alt="selfie" />
        </div>

        <div className="content-me inline-block rounded bg-orange-200 shadow-2xl px-10 py-10">
          <h1 className="Menlo text-orange-500 text-3xl mb-2 ml-6 text-center lg:text-6xl md:text-4xl">
            Sarena Darbutas
          </h1>
          <h1 className="Menlo text-orange-500 text-2xl mb-2 ml-6 text-center lg:text-3xl md:text-2xl">
            Entry Level Software Engineer
          </h1>
          <p className="Helvetica Neue text-orange-400 text-xl mt-2  ml-6 text-center lg:text-2xl">
            Seeking a <span className="text-orange-700 italic">rewarding</span> opportunity to apply my{" "}
            <span className="text-orange-700 italic">knowledge</span> and{" "}
            <span className="text-orange-700 italic">skills.</span>
          </p>
        </div>

        <div className="horizontal-line bg-orange-500 h-1 sm:bottom-72 lg:bottom-50 md:h-2 md:bottom-72 lg:h-3 absolute left-0 right-0 bottom-60 shadow-lg xl:bottom-88"></div>
      </section>
    </div>
  );
};

export default Introduction;