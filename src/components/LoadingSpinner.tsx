import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingSpinner = () => {
  return <FontAwesomeIcon className="animate-spin text-3xl dark:text-white" icon={faCircleNotch} />;
};

export default LoadingSpinner;
