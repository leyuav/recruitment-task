import styles from '../style';

const GalleryHeaders = () => (
  <section>
    <div className={`${styles.flexStart} flex-col pt-[80px] sm:px-[88px] px-8`}>
      <p className={`${styles.paragraph} md:text-[21.5px] text-[16px] mb-2 text-accent`}>
        Prezentacja firmy
      </p>

      <h1
        className={`${styles.heading} mb-[24px] md:text-[40px] text-[26px] leading-[48px] tracking-[0.01em]`}
      >
        Zobacz naszą galerię zdjęć
      </h1>

      <div className='flex justify-start items-center'>
        <button className={`${styles.buttonCategory} mr-[48px]`}>Samochody osobowe</button>

        <button className={`${styles.buttonCategory}`}>Samochody dostawcze</button>
      </div>
    </div>
  </section>
);

export default GalleryHeaders;
