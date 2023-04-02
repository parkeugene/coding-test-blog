type TagsProp = {
  tags: string[];
};

// TODO: 태그 별 컬러 설정
const colors = [
  'bg-green-light text-green',
  'bg-yellow-light text-yellow-dark',
  'bg-grey text-primary',
  'bg-blue-light text-blue',
  'bg-yellow-dark text-white',
  'bg-grey-lighter text-primary',
];

const Tags = ({ tags }: TagsProp) => {
  return (
    <article className="flex items-center space-x-2">
      {tags.slice(0, 3).map((tag, idx) => (
        <span className={`mb-5 inline-block rounded-full px-2 py-1 font-body text-smsm:mb-8 ${colors[idx]}`} key={tag}>
          {tag}
        </span>
      ))}
    </article>
  );
};

export default Tags;
