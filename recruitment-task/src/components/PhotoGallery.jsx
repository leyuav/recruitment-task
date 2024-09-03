import styles from '../style';
import { photoCarousel } from '../constants/index.js';
import { Carousel, IconButton, ChevronLeftIcon, ChevronRightIcon } from '@material-tailwind/react';
import { ThemeProvider } from '@material-tailwind/react';

export function PhotoGallery() {
  const theme = {
    carousel: {
      defaultProps: {
        prevArrow: ({ loop, handlePrev, firstIndex }) => {
          return (
            <button
              onClick={handlePrev}
              disabled={!loop && firstIndex}
              className='!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center'
            >
              <ChevronLeftIcon
                strokeWidth={3}
                className='-ml-1 h-7 w-7'
              />
            </button>
          );
        },
        nextArrow: ({ loop, handleNext, lastIndex }) => (
          <button
            onClick={handleNext}
            disabled={!loop && lastIndex}
            className='!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center'
          >
            <ChevronRightIcon
              strokeWidth={3}
              className='ml-1 h-7 w-7'
            />
          </button>
        ),
        navigation: ({ setActiveIndex, activeIndex, length }) => (
          <div className='absolute bottom-[-48px] left-2/4 z-50 flex -translate-x-2/4 gap-2'>
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                  activeIndex === i ? 'bg-accent' : 'bg-[#f1f1f1]'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        ),
        autoplay: false,
        autoplayDelay: 4000,
        transition: {
          type: 'tween',
          duration: 0.75,
        },
        loop: true,
        className: '',
      },
      styles: {
        base: {
          carousel: {
            position: 'relative',
            width: 'w-full',
            height: 'h-full',
            overflowX: 'overflow-x-clip',
            display: 'flex',
          },

          slide: {
            width: 'w-full',
            height: 'h-full',
            display: 'inline-block',
            flex: 'flex-none',
          },
        },
      },
    },
  };

  return (
    <ThemeProvider value={theme}>
      <section className='flex md:flex-row flex-col mb-[152px] '>
        <div className={`${styles.flexStart} flex-col pt-[80px] px-[88px] w-[100%]`}>
          <Carousel
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant='text'
                color='white'
                size='lg'
                onClick={handlePrev}
                className='!absolute top-2/4 left-4 -translate-y-2/4'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant='text'
                color='white'
                size='lg'
                onClick={handleNext}
                className='!absolute top-2/4 !right-4 -translate-y-2/4'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                  />
                </svg>
              </IconButton>
            )}
          >
            {photoCarousel.map((image) => (
              <div key={image.id}>
                <img
                  src={image.img}
                  alt={image.id}
                  width={1264}
                  height={446}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default PhotoGallery;
