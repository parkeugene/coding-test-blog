import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import BlogPage from '../pages/BlogPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
