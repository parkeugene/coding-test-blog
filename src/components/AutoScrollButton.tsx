import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

const AutoScrollButton = () => {
  const classNames =
    'p-3 flex justify-center items-center  bg-green-light opacity-70  hover:opacity-100 transition-all';

  return (
    <div className="fixed bottom-8 right-8 flex flex-col z-10">
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={classNames}>
        <FontAwesomeIcon icon={faArrowUpLong} />
      </button>
      <button onClick={() => window.scrollTo({ top: 99999, behavior: 'smooth' })} className={classNames}>
        <FontAwesomeIcon icon={faArrowDownLong} />
      </button>
    </div>
  );
};

export default AutoScrollButton;
