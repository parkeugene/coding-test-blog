import { useState } from 'react';

// 전체 페이지 갯수 토대로 1 ~ n 까지 페이지 번호 배열 생성
const getTotalPagesArr = (totalPageNum: number) => {
  const totalPagesArr = [];
  const totalPages = Array.from({ length: totalPageNum }, (_, idx: number) => idx + 1);
  for (let i = 0; i < totalPages.length; i += 5) {
    totalPagesArr.push(totalPages.slice(i, i + 5));
  }
  return totalPagesArr;
};

export const usePagination = (totalPageNum: number) => {
  // 현재 페이지 버튼 그룹
  const [currPagesIndex, setCurrPagesIndex] = useState(0);
  const totalPagesGroup = getTotalPagesArr(totalPageNum);
  const currPagesGroup = totalPagesGroup[currPagesIndex];

  return { currPagesIndex, currPagesGroup, setCurrPagesIndex, totalPagesGroup };
};
