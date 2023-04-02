import { useRecoilState } from 'recoil';
import { pageIndexAtom } from '../atoms/atoms';
import { useState } from 'react';

// 전체 페이지 갯수 토대로 1 ~ n 까지 페이지 번호 배열 생성
const getTotalPagesArr = (totlaPageNum: number) => {
  const totalPagesArr = [];
  const totalPages = Array.from({ length: totlaPageNum }, (_, idx: number) => idx + 1);
  for (let i = 0; i < totalPages.length; i += 5) {
    totalPagesArr.push(totalPages.slice(i, i + 5));
  }
  return totalPagesArr;
};

const Pagination = () => {
  // 현재 페이지 인덱스
  const [pageIndex, setPageIndex] = useRecoilState(pageIndexAtom);

  // 현재 페이지 버튼 그룹
  const [currPagesIndex, setCurrPagesIndex] = useState(0);
  const totalPagesGroup = getTotalPagesArr(50);
  const currPagesGroup = totalPagesGroup[currPagesIndex];

  return (
    <div className="flex pt-8 lg:pt-16">
      {currPagesIndex > 0 && (
        <span
          className="group ml-3 flex cursor-pointer items-center border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary"
          onClick={() => {
            setCurrPagesIndex(currPagesIndex - 1);
          }}>
          <i className="bx bx-left-arrow-alt ml-1 text-primary transition-colors group-hover:text-secondary dark:text-white"></i>
          Prev
        </span>
      )}

      {currPagesGroup.map((index: number) => (
        <span
          className={`ml-3 cursor-pointer border-2  px-3 py-1 font-body font-medium  transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary ${
            index === pageIndex ? 'border-secondary text-secondary' : 'border-primary text-primary'
          }`}
          onClick={() => setPageIndex(index)}
          key={index}>
          {index}
        </span>
      ))}

      {currPagesIndex < totalPagesGroup.length - 1 && (
        <span
          className="group ml-3 flex cursor-pointer items-center border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary"
          onClick={() => {
            setCurrPagesIndex(currPagesIndex + 1);
          }}>
          Next
          <i className="bx bx-right-arrow-alt ml-1 text-primary transition-colors group-hover:text-secondary dark:text-white"></i>
        </span>
      )}
    </div>
  );
};

export default Pagination;
