import { Link } from 'react-router-dom';

const PostListItem = () => {
  return (
    <section className="border-b border-grey-lighter py-8">
      <span className="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green">
        category
      </span>

      <Link
        to="/post"
        className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary">
        Quis hendrerit dolor magna eget est lorem ipsum dolor sit
      </Link>

      <div className="flex items-center pt-4">
        <p className="pr-2 font-body font-light text-primary dark:text-white">July 19, 2020</p>
        <span className="font-body text-grey dark:text-white">//</span>
        <p className="pl-2 font-body font-light text-primary dark:text-white">4 min read</p>
      </div>
    </section>
  );
};

export default PostListItem;
