const styles = {
  boxWidth: 'xl:max-w-[1440px] w-full',

  heading: 'font-bebas font-normal text-left',
  paragraph: 'font-robotoCondensed font-normal text-left tracking-[-0.01em]',

  button:
    'font-robotoFlex font-semibold text-center text-[15px] tracking-[-0.02em] py-3 px-6 leading-[22.5px] rounded-lg cursor-pointer hover:opacity-90',

  buttonCategory:
    'font-robotoFlex font-normal text-center text-[15px] tracking-[-0.02em] leading-[22.5px] cursor-pointer hover:text-accent  hover:underline hover:underline-offset-4',

  buttonDown:
    'font-robotoCondensed font-normal text-center text-[14px] leading-[21px] text-[#ffffff] cursor-pointer border-b-[1px] pb-1 border-primary flex gap-2 items-center hover:scale-105 transition-all',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-[120px] px-6',
  paddingY: 'sm:py-[16px] py-6',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
};

export default styles;
