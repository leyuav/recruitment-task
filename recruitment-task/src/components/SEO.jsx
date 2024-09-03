import styles from '../style';
import { FaArrowDown } from 'react-icons/fa6';

const SEO = () => (
  <section className='flex md:flex-row flex-col bg-secondary'>
    <div className={`${styles.flexCenter} py-[88px] px-[120px] w-[100%] gap-[48px]`}>
      <div className='max-w-[576px] flex flex-col items-start'>
        <h1
          className={`${styles.heading} mb-[16px] text-[25px] leading-[37.5px] tracking-[-0.03em] text-[#ffffff]`}
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
          className={`${styles.heading} mb-[16px] text-[25px] leading-[37.5px] tracking-[-0.03em] text-[#ffffff]`}
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
