const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <footer className="bg-gray-800 rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://scontent.fmnl4-4.fna.fbcdn.net/v/t31.18172-8/10704367_726907734049464_84741487837409683_o.png?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=U30MZVZLVXgAX_JFWrn&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfDV6ALaIOWBkHm7x6u6gP6rKR8bkvxfNni0RjB1v2CF4A&oe=64FB2E18"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t31.18172-8/10704367_726907734049464_84741487837409683_o.png?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=U30MZVZLVXgAX_JFWrn&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfDV6ALaIOWBkHm7x6u6gP6rKR8bkvxfNni0RjB1v2CF4A&oe=64FB2E18"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Phinma University of Pangasinan
              </span>
            </a>
            <span className="block text-sm text-white sm:text-center dark:text-gray-400">
              College of Information Technology
            </span>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
