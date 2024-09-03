import styles from '../style';

const SEO = () => (
  <section className='flex md:flex-row flex-col bg-secondary'>
    <div className={`${styles.flexCenter} py-[88px] px-[120px] w-[100%]`}>
      <div>
        <h1 className={`${styles.heading} mb-[24px] text-[40px] leading-[48px]`}>
          Zobacz naszą galerię zdjęć
        </h1>

        <p className={`${styles.paragraph} text-[21.5px] leading-[32.25px] text-accent`}>
          Prezentacja firmy
        </p>

        <button className={`${styles.buttonCategory} w-[148px] h-[23px] mr-[48px]`}>
          Samochody osobowe
        </button>
      </div>

      <div>
        <h1 className={`${styles.heading} mb-[24px] text-[40px] leading-[48px]`}>
          Zobacz naszą galerię zdjęć
        </h1>

        <p className={`${styles.paragraph} text-[21.5px] leading-[32.25px] text-accent`}>
          Prezentacja firmy
        </p>

        <button className={`${styles.buttonCategory} w-[148px] h-[23px] mr-[48px]`}>
          Samochody osobowe
        </button>
      </div>
    </div>
  </section>
);

export default SEO;
