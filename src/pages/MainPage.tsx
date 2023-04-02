import Footer from '../components/Footer';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import LoadingSpinner from '../components/LoadingSpinner';
import MyStory from '../components/MyStory';
import PostListItem from '../components/PostListItem';
import { useFetch } from '../hooks/useFetch';
import { BlogPostResp } from '../types/types';

export const MainPage = () => {
  const { data: blogList, isLoading, isError } = useFetch({ method: 'getBlogList', pageSize: 3 });

  return (
    <main>
      <Header />
      <div className="container mx-auto">
        <Introduction />
        <MyStory />
        <div className="py-16 lg:py-20">
          <div className="flex items-center pb-6">
            <img src="src/assets/img/icon-story.png" alt="icon story" />
            <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">Blog Posts</h3>
            <a
              href="/blog"
              className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary">
              All posts
              <img src="src/assets/img/long-arrow-right.png" className="ml-3" alt="arrow right" />
            </a>
          </div>

          {isLoading && (
            <div className="pt-8 py-10 min-h-96 flex justify-center items-center">
              <LoadingSpinner />
            </div>
          )}

          {isError && <div className="pt-8 py-10">블로그 데이터 로드에 실패하였습니다.</div>}

          {blogList &&
            blogList.map((blogItem: BlogPostResp) => <PostListItem key={blogItem._id} blogItem={blogItem} />)}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MainPage;
