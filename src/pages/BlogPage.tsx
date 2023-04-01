import Footer from '../components/Footer';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import PostList from '../components/PostList';

const BlogPage = () => {
  return (
    <main>
      <Header />

      <section className="container py-16 lg:py-20">
        <article>
          <img src="/src/assets/img/icon-blog.png" alt="icon envelope" />
        </article>

        <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
          Blog
        </h1>

        <article className="pt-3 sm:w-3/4">
          <p className="font-body text-xl font-light text-primary dark:text-white">
            Articles, tutorials, snippets, rants, and everything else. Subscribe
            for updates as they happen.
          </p>
        </article>

        <article className="pt-8 lg:pt-12">
          <PostList />
        </article>

        <Pagination />
      </section>
      <Footer />
    </main>
  );
};

export default BlogPage;
