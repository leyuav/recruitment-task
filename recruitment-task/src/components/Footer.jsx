import styles from '../style';
import { footerLinks } from '../constants';

const Footer = () => (
  <section className='bg-secondary text-primary'>
    <div className='flex justify-between items-center py-[24px] sm:px-[120px] px-[80px] w-full'>
      <a href='#'>
        <p className={`${styles.paragraph} max-w-[310px]`}>Cars Spot</p>
      </a>

      <div className='underline underline-offset-4'>
        <ul>
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.link}
                className={`${styles.paragraph}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Footer;
