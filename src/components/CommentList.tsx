import { useEffect, useState } from 'react';
import { CommentResp } from '../types/types';
import CommentItem from './CommentItem';
import Pagination from './Pagination';
import LoadingSpinner from './LoadingSpinner';

type CommentListProp = {
  comments: CommentResp[];
};

const CommentList = ({ comments }: CommentListProp) => {
  // 페이지네이션 관련 상태
  const [pageIndex, setPageIndex] = useState(1);
  const [paginationArray, setPaginationArray] = useState([]);

  // 로딩 관련 상태
  const [loading, setLoading] = useState(true);

  // comment 를 5개씩 분할
  useEffect(() => {
    const newPaginationArray = [];

    for (let i = 0; i < comments.length; i += 5) {
      newPaginationArray.push(comments.slice(i, i + 5));
    }

    setPaginationArray(newPaginationArray);
  }, [comments]);

  // 페이지 이동 후 0.5초 동안 로딩 스피너 동작
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [pageIndex]);

  return (
    <article className="py-10 border-b border-grey-lighter space-y-6 ">
      <h2 className="text-xl font-bold text-green dark:text-white">Comments</h2>

      {paginationArray[pageIndex - 1] && !loading ? (
        paginationArray[pageIndex - 1].map((comment: CommentResp) => <CommentItem key={comment.email} />)
      ) : (
        <div className="h-96 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}

      <Pagination totalPage={Math.floor(comments.length / 5)} pageIndex={pageIndex} setPageIndex={setPageIndex} />
    </article>
  );
};

export default CommentList;
