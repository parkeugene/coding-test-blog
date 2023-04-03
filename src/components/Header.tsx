import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="container mx-auto">
      <div className="flex items-center justify-between py-6 lg:py-10">
        <Link to="/" className="flex items-center">
          <span className="mr-2">
            <img src="/assets/img/logo.svg" alt="logo" />
          </span>
          <p className="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">John Doe</p>
        </Link>

        {/* category button */}
        <div>
          <ul className="flex items-center">
            {['Intro', 'Blog'].map((menuItem) => (
              <li className="group relative mr-6 mb-1" key={menuItem}>
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <Link
                  to={menuItem === 'Intro' ? '/' : `/${menuItem.toLowerCase()}`}
                  className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                  {menuItem}
                </Link>
              </li>
            ))}
            <li>
              <i
                className={`bx cursor-pointer text-3xl text-primary dark:text-white ${
                  isDarkMode ? 'bxs-sun' : 'bxs-moon'
                }`}
                onClick={() => setIsDarkMode((prev) => !prev)}></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
