const Navbar = () => {
  return (
    <nav
      className="absolute flex w-full items-center justify-between bg-slate-900 py-2 shadow-sm shadow-neutral-700/10 dark:bg-slate-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <div className="flex items-center">
          <a
            className="text-primary dark:text-primary-400 flex items-center"
            href="#!"
          >
            <span className="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </span>
            <span
              className="font-hero text-lg font-normal"
              id="navbarSupportedContentY"
              data-te-collapse-item
            >
              ActuaryDB
            </span>
          </a>
        </div>

        <div className="flex items-center">
          <ul
            className="mr-auto flex flex-row space-x-2 lg:space-x-4"
            data-te-navbar-nav-ref
          >
            <li data-te-nav-item-ref className="flex items-center">
              <a
                className="block py-2 pr-2 text-slate-300 transition duration-150 ease-in-out hover:text-primary-400 focus:text-slate-400 disabled:text-black/30 dark:text-slate-200 dark:hover:text-slate-300 dark:focus:text-slate-300 dark:disabled:text-slate-300/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-slate-300/80"
                href="#about"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                About
              </a>
            </li>
            <li className="flex items-center" data-te-nav-item-ref>
              <a
                className="block py-2 pr-2 text-slate-300 transition duration-150 ease-in-out hover:text-primary-400 focus:text-slate-400 disabled:text-black/30 dark:text-slate-200 dark:hover:text-slate-300 dark:focus:text-slate-300 dark:disabled:text-slate-300/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-slate-300/80"
                href="#contact"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
