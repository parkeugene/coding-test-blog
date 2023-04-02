export const useGetMinReadTime = (wordCount: number) => {
  const wordsPerMinute = 300;
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return `${minutes} min read`;
};
