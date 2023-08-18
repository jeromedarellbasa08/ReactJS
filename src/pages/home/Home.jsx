const Home = () => {
  return (
    <div className="pb-[15%] h-screen w-screen flex justify-center items-center">
      <div className=" mx-auto max-w-2xl">
        <div className="sm:mb-8 flex justify-center items-center">
          <div className="">
            <img
              width="250px"
              height="auto"
              src="./src/assets/jerome.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Jerome Darell Basa
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Web Developer</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              target="_blank"
              href="https://github.com/jeromedarellbasa08"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              rel="noreferrer"
            >
              My Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
