import styles from '../style';

const GalleryHeaders = () => (
  <section className='flex md:flex-row flex-col'>
    <div className={`${styles.flexStart} flex-col pt-[80px] px-[88px] w-[100%]`}>
      <p className={`${styles.paragraph} text-[21.5px] leading-[32.25px] text-accent`}>
        Prezentacja firmy
      </p>

      <h1 className={`${styles.heading} mb-[24px] text-[40px] leading-[48px]`}>
        Zobacz naszą galerię zdjęć
      </h1>

      <div className='flex justify-end items-center'>
        <button className={`${styles.buttonCategory} w-[148px] h-[23px] mr-[48px]`}>
          Samochody osobowe
        </button>

        <button className={`${styles.buttonCategory} w-[148px] h-[23px]`}>
          Samochody dostawcze
        </button>
      </div>
    </div>
  </section>
);

export default GalleryHeaders;
