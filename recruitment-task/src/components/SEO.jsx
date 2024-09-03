import styles from '../style';
import { FaArrowDown } from 'react-icons/fa6';

const SEO = () => (
  <section
    id='faq'
    className='flex md:flex-row flex-col bg-secondary'
  >
    <div
      className={`${styles.flexCenter} sm:py-[88px] py-[58px] sm:px-[120px] px-[60px] w-[100%] md:flex-row flex-col gap-[48px]`}
    >
      <div className='max-w-[576px] flex flex-col items-start'>
        <h1
          className={`${styles.heading} mb-[16px] text-[25px] leading-[37.5px] md:tracking-[-0.03em] tracking-[0.03em] text-[#ffffff]`}
        >
          Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
        </h1>

        <p className={`${styles.paragraph} text-[14px] leading-[21px] mb-[24px] text-[#ffffff]`}>
          Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl
          vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu.
          Vestibulum et […]
        </p>

        <button className={`${styles.buttonDown}`}>
          Rozwiń <FaArrowDown />
        </button>
      </div>

      <div className='max-w-[576px] flex flex-col items-start'>
        <h1
          className={`${styles.heading} mb-[16px] text-[25px] leading-[37.5px] md:tracking-[-0.03em] tracking-[0.03em]  text-[#ffffff]`}
        >
          Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
        </h1>

        <p className={`${styles.paragraph} text-[14px] leading-[21px] mb-[24px] text-[#ffffff]`}>
          Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl
          vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu.
          Vestibulum et […]
        </p>

        <button className={`${styles.buttonDown}`}>
          Rozwiń <FaArrowDown />
        </button>
      </div>
    </div>
  </section>
);

export default SEO;
