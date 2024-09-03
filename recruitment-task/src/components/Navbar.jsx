import styles from '../style';
import { logo } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} ${styles.paddingY} w-full  flex justify-between items-center`}
    >
      <div className='w-[300px] flex justify-start items-center'>
        <a href='#'>
          <img
            src={logo}
            alt='logo'
            className='w-[160px] h-[29.58px] object-contain flex-1'
          />
        </a>
      </div>

      <ul className='list-none sm:flex justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-robotoFlex font-normal sm:block hidden cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-secondary hover:opacity-75`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='w-[300px] flex justify-end items-center'>
        <button className={`${styles.button} w-auto h-[47px]  text-primary bg-accent`}>
          Zadzwoń do nas
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
