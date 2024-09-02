import styles from '../style';
import { carHero, waves } from '../assets';

const Hero = () => (
  <section
    id='home'
    className='flex md:flex-row flex-col'
  >
    <div className={`flex-1 ${styles.flexStart} ${styles.paddingX} flex-col pt-[120px] pb-[362px]`}>
      <h1 className={`${styles.heading} mb-[32px]`}>
        Sprzedajemy samochody <br /> z Europy
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym przeżyciem.
      </p>
      <div className='w-[300px] flex justify-end items-center'>
        <button className={`${styles.button} w-[158px] h-[47px]`}>Zobacz zdjęcia</button>
        <button className={`${styles.button} w-[158px] h-[47px]`}>Zadzwoń do nas</button>
      </div>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={carHero}
        alt='cars'
        className='w-[100%] h-[100%] relative z-[5] object-contain'
      />
    </div>

    <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
      <img
        src={waves}
        alt='discount'
        className='w-[750px] md:block hidden h-[750px] absolute top-[-10%] right-[10%] z-9'
      />
    </div>
  </section>
);

export default Hero;
