import {RecoilRoot} from 'recoil';
import Router from './router/router';

const App = () => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};

export default App;
