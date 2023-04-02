import PostListItem from './PostListItem';
import { useFetch } from '../hooks/useFetch';
import { BlogPostResp } from '../types/types';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {
  const { data: blogList, isLoading, isError } = useFetch('getBlogList');

  if (isLoading) {
    return (
      <div className="pt-8 py-10">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return <div className="pt-8 py-10">블로그 데이터 로드에 실패하였습니다.</div>;
  }

  return (
    <div className="pt-8">
      {blogList.map((blog: BlogPostResp) => (
        <PostListItem key={blog.date} />
      ))}
    </div>
  );
};

export default PostList;
