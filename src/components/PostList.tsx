import PostListItem from './PostListItem';
import { useFetch } from '../hooks/useFetch';
import { BlogPostResp } from '../types/types';
import LoadingSpinner from './LoadingSpinner';
import { useRecoilValue } from 'recoil';
import { pageIndexAtom } from '../atoms/atoms';

const PostList = () => {
  const pageIndex = useRecoilValue(pageIndexAtom);

  const { data: blogList, isLoading, isError } = useFetch('getBlogList', pageIndex);

  if (isLoading) {
    return (
      <div className="pt-8 py-10 min-h-96 flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return <div className="pt-8 py-10">블로그 데이터 로드에 실패하였습니다.</div>;
  }

  return (
    <div className="pt-8">
      {blogList.map((blogItem: BlogPostResp) => (
        <PostListItem key={blogItem.date} blogItem={blogItem} />
      ))}
    </div>
  );
};

export default PostList;
