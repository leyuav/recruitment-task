import styles from '../style';
import { carHero, waves } from '../assets';

const Hero = () => (
  <section className='flex md:flex-row flex-col relative'>
    <div
      className={`flex-1 ${styles.flexStart} ${styles.paddingX} flex-col md:pt-[120px] pt-[80px] md:pb-[362px] pb-[132px] min-w-[80%]`}
    >
      <h1
        className={`${styles.heading} mb-[16px] md:text-[76.29px] text-[46.29px] md:leading-[83.92px] leading-[53.92px] tracking-[-0.002em]`}
      >
        Sprzedajemy samochody <br /> z Europy
      </h1>

      <p
        className={`${styles.paragraph} text-[16px] leading-6 max-w-[470px] md:mb-[48px] mb-[24px] z-[10]`}
      >
        Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym przeżyciem.
      </p>

      <div className='flex justify-end items-center'>
        <button
          className={`${styles.button} w-auto h-[47px] mr-[24px] text-primary bg-accent z-[10]`}
        >
          Zobacz zdjęcia
        </button>

        <button
          className={`${styles.button} w-auto h-[47px] bg-primary text-accent border-solid border-[1px] border-accent z-[10] transition-all hover:scale-105`}
        >
          Zadzwoń do nas
        </button>
      </div>
    </div>

    <div
      className={`flex-1 flex flex-col ${styles.flexCenter} absolute md:bottom-[92.63px] bottom-[-42.63px] right-0`}
    >
      <img
        src={waves}
        alt='graphic design'
        className='w-[668.05px] md:block hidden h-[659px] absolute top-[-500px] right-[-40px] z-[4]'
      />

      <img
        src={carHero}
        alt='cars'
        className='w-[1064px] h-[404.37] object-contain z-[5]'
      />
    </div>
  </section>
);

export default Hero;
