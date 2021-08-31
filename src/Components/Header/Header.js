import FormInput from '../Form-Input';

import styles from './Header.module.css';

import header from './header.png';

const Header = () => (
  <header className={styles.banner}>
    <img className={styles.img} src={header} alt='banner' />
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>TO-DO</h1>
      <FormInput />
    </div>
  </header>
);

export default Header;
