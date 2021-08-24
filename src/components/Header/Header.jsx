import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      90s shop
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex' }}>
          <li>
            <a href="/">Home</a>
          </li>
          |
          <li>
            <a href="/cart">Cart ()</a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
