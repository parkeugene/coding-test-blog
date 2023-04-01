const PostList = () => {
  return (
    <div className="pt-8">
      <div className="border-b border-grey-lighter pb-8">
        <span className="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green">
          category
        </span>
        <a
          href="/post"
          className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
        >
          Quis hendrerit dolor magna eget est lorem ipsum dolor sit
        </a>
        <div className="flex items-center pt-4">
          <p className="pr-2 font-body font-light text-primary dark:text-white">
            July 19, 2020
          </p>
          <span className="font-body text-grey dark:text-white">//</span>
          <p className="pl-2 font-body font-light text-primary dark:text-white">
            4 min read
          </p>
        </div>
      </div>
      <div className="border-b border-grey-lighter pt-10 pb-8">
        <div className="flex items-center">
          <span className="mb-4 inline-block rounded-full bg-grey-light px-2 py-1 font-body text-sm text-blue-dark">
            category
          </span>
          <span className="mb-4 ml-4 inline-block rounded-full bg-yellow-light px-2 py-1 font-body text-sm text-yellow-dark">
            category
          </span>
        </div>
        <a
          href="/post"
          className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
        >
          Senectus et netus et malesuada fames ac turpis egestas integer
        </a>
        <div className="flex items-center pt-4">
          <p className="pr-2 font-body font-light text-primary dark:text-white">
            June 30, 2020
          </p>
          <span className="font-body text-grey dark:text-white">//</span>
          <p className="pl-2 font-body font-light text-primary dark:text-white">
            5 min read
          </p>
        </div>
      </div>
      <div className="border-b border-grey-lighter pt-10 pb-8">
        <span className="mb-4 inline-block rounded-full bg-blue-light px-2 py-1 font-body text-sm text-blue">
          category
        </span>
        <a
          href="/post"
          className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
        >
          Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies
        </a>
        <div className="flex items-center pt-4">
          <p className="pr-2 font-body font-light text-primary dark:text-white">
            June 26, 2020
          </p>
          <span className="font-body text-grey dark:text-white">//</span>
          <p className="pl-2 font-body font-light text-primary dark:text-white">
            3 min read
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostList;
