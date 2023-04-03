const Share = () => {
  return (
    <div className="flex items-center py-10 border-b border-grey-lighter">
      <span className="pr-5 font-body font-medium text-primary dark:text-white">Share</span>
      <a href="/">
        <i className="bx bxl-facebook text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
      </a>
      <a href="/">
        <i className="bx bxl-twitter pl-2 text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
      </a>
      <a href="/">
        <i className="bx bxl-linkedin pl-2 text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
      </a>
      <a href="/">
        <i className="bx bxl-reddit pl-2 text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
      </a>
    </div>
  );
};

export default Share;
