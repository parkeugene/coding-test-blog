import Footer from '../components/Footer';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import MyStory from '../components/MyStory';
import PostList from '../components/PostList';

export const MainPage = () => {
  return (
    <main>
      <Header />
      <div className="container mx-auto">
        <Introduction />
        <MyStory />
        <div className="py-16 lg:py-20">
          <div className="flex items-center pb-6">
            <img src="src/assets/img/icon-story.png" alt="icon story" />
            <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
              Blog Posts
            </h3>
            <a
              href="/blog"
              className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
            >
              All posts
              <img
                src="src/assets/img/long-arrow-right.png"
                className="ml-3"
                alt="arrow right"
              />
            </a>
          </div>
          <PostList />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MainPage;
