import { useEffect, useState } from 'react';
import { CommentResp } from '../types/types';
import CommentItem from './CommentItem';
import Pagination from './Pagination';

type CommentListProp = {
  comments: CommentResp[];
};

const CommentList = ({ comments }: CommentListProp) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [paginationArray, setPaginationArray] = useState([]);

  useEffect(() => {
    const newPaginationArray = [];

    for (let i = 0; i < comments.length; i += 5) {
      newPaginationArray.push(comments.slice(i, i + 5));
    }

    setPaginationArray(newPaginationArray);
  }, [comments]);

  return (
    <article className="py-10 border-b border-grey-lighter space-y-6 ">
      <h2 className="text-xl font-bold text-green">Comments</h2>
      {paginationArray[pageIndex - 1]?.map((comment: CommentResp) => (
        <CommentItem key={comment.email} />
      ))}

      <Pagination totalPage={Math.floor(comments.length / 5)} pageIndex={pageIndex} setPageIndex={setPageIndex} />
    </article>
  );
};

export default CommentList;
