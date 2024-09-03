import styles from '../style';

const GalleryHeaders = () => (
  <section className='flex md:flex-row flex-col'>
    <div
      className={`${styles.flexStart} flex-col sm:pt-[80px] pt-[60px] sm:px-[88px] px-8 w-[100%]`}
    >
      <p
        className={`${styles.paragraph} md:text-[21.5px] text-[16px] leading-[32.25px] text-accent`}
      >
        Prezentacja firmy
      </p>

      <h1
        className={`${styles.heading} mb-[24px] md:text-[40px] text-[26px] leading-[48px] tracking-[-0.002em]`}
      >
        Zobacz naszą galerię zdjęć
      </h1>

      <div className='flex justify-start items-center'>
        <button className={`${styles.buttonCategory} w-auto h-[23px] mr-[48px]`}>
          Samochody osobowe
        </button>

        <button className={`${styles.buttonCategory} w-auto h-[23px]`}>Samochody dostawcze</button>
      </div>
    </div>
  </section>
);

export default GalleryHeaders;
