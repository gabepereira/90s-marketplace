import Logo from '../Logo';
import { headerLinks, isPageActive } from '../../../utils/sitemap';
import './styles.scss';

const Header = () => {
  return (
    <header data-testid="Header" className="header">
      <Logo />
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex' }}>
          {headerLinks.map(({ path, name }) => (
            <a
              key={path}
              className={isPageActive(path) ? 'active' : ''}
              href={path}
            >
              {name}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
