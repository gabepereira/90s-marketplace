import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { headerLinks, isPageActive } from '../../../utils/sitemap';
import './styles.scss';

const Header = () => {
  return (
    <header data-testid="Header" className="header">
      <Logo />
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex' }}>
          {headerLinks.map(({ path, name }) => (
            <Link
              key={path}
              className={isPageActive(path) ? 'active' : ''}
              to={path}
            >
              {name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
