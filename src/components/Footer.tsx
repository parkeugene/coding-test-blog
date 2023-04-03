const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between border-grey-lighter py-10 sm:flex-row sm:py-12">
        <div className="mr-auto flex flex-col items-center sm:flex-row">
          <a href="/" className="mr-auto sm:mr-6">
            <img src="/assets/img/logo.svg" alt="logo" />
          </a>
          <p className="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">©2020 John Doe.</p>
        </div>
        <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
          <a href="https://github.com/ " target="_blank">
            <i className="bx bxl-github pl-5 text-4xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
          </a>

          <a href="https://codepen.io/ " target="_blank">
            <i className="bx bxl-codepen pl-5 text-4xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
          </a>

          <a href="https://www.linkedin.com/ " target="_blank">
            <i className="bx bxl-linkedin pl-5 text-4xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
