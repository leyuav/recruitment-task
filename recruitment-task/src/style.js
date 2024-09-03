const styles = {
  boxWidth: 'xl:max-w-[1440px] w-full',

  heading: 'font-bebas font-normal text-left',
  misc: 'font-robotoFlex font-normal text-[16px] leading-6 text-left',
  paragraph: 'font-robotoCondensed font-normal text-left tracking-[-0.01em]',

  button:
    'font-robotoFlex font-semibold text-center text-[15px] tracking-[-0.02em] py-3 px-6 leading-[22.5px] rounded-lg cursor-pointer hover:font-medium',

  buttonCategory:
    'font-robotoFlex font-normal text-center text-[15px] tracking-[-0.02em] leading-[22.5px] cursor-pointer hover:text-accent  hover:underline hover:underline-offset-4',

  buttonAcc:
    'font-robotoCondensed font-normal text-center text-[14px] leading-[21px] text-[#ffffff] cursor-pointer hover:font-medium  border-b-[1px] pb-1 border-primary flex gap-2 items-center',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-[120px] px-6',
  paddingY: 'sm:py-[16px] py-6',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
