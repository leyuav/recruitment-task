import styles from '../style';
import { footerLinks } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} bg-secondary text-primary`}>
    <div className='flex flex-row justify-between items-center py-[24px] px-[120px] w-full'>
      <p className={`${styles.paragraph} leading-[24px] max-w-[310px]`}>Cars Spot</p>

      <div className='underline underline-offset-4 leading-[24px]'>
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
