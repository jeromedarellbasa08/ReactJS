const Education = () => {
  return (
    <div className=" pb-[15%] h-screen w-screen flex justify-center items-center">
      <div className="py-54">
        <div className="w-full p-10">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                School
              </h1>
              <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Year Graduated
              </h6>
              <ul className="p-5 mb-3 font-normal text-gray-700 dark:text-gray-400 list-decimal">
                <li>
                  PHINMAUniversity of Pangasinan - UNDERGRADUATE
                </li>
                <li>
                  Mangaldan National Highschool(SHS)-2021
                </li>
                <li>
                Mangaldan National Highschool(JHS)-2019
                </li>
                <li>
                  Baguio Central School(Elementary) -2015
             
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
