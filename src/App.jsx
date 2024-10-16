import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { shift, useFloating, useHover, useInteractions } from "@floating-ui/react";
import { offset } from '@floating-ui/react';
import { autoPlacement } from '@floating-ui/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css'

// import required modules
import { Navigation } from 'swiper/modules';

import AxeBlue from './assets/AxeBlue.svg';
import Loreal from './assets/Loreal.svg';
import NiveaWhite from './assets/NiveaWhite.svg';
import NiveaBlue from './assets/NiveaBlue.svg';
import LorealShamp from './assets/LorealShamp.svg';
import DoveWhite from './assets/DoveWhite.svg';
import TresemmeBlack from './assets/TresemmeBlack.svg';
import AxeBlack from './assets/AxeBlack.svg';
import searchIcon from './assets/searchIcon.svg';
import cartIcon from './assets/cart.svg';
import EIcon from './assets/E.svg';

const products = [
  {
    name: 'Axe Blue',
    price: 1.99,
    imgUrl: AxeBlue,
    col: 3
  },
  {
    name: 'Loreal',
    price: 1.99,
    imgUrl: Loreal,
    col: 3
  },
  {
    name: 'Nivea White',
    price: 1.49,
    imgUrl: NiveaWhite,
    col: 2
  },
  {
    name: 'Nivea Blue',
    price: 1.69,
    imgUrl: NiveaBlue,
    col: 2
  },
  {
    name: 'Loreal Shampoo',
    price: 1.69,
    imgUrl: LorealShamp,
    col: 2
  },
  {
    name: 'Dove White',
    price: 1.79,
    imgUrl: DoveWhite,
    col: 4
  },
  {
    name: 'Tresemme Black',
    price: 2.19,
    imgUrl: TresemmeBlack,
    col: 2
  },
  {
    name: 'Axe Black',
    price: 1.99,
    imgUrl: AxeBlack,
    col: 3
  },
  {
    name: 'Loreal',
    price: 1.99,
    imgUrl: Loreal,
    col: 3
  },

]

export default function App() {
  return (
    <div className='h-dvh'>
      <div className='absolute top-5 left-5 z-50 bg-yellow-400 rounded-full p-2 shadow-2xl shadow-black'>
        <img src={EIcon} alt='icon' className='lg:h-16 lg:w-16 h-8 w-8' />
      </div>
      <div className='absolute top-5 right-5 z-50 bg-yellow-400 rounded-full p-2 shadow-2xl shadow-black'>
        <img src={searchIcon} alt='icon' className='h-5 w-5' />
      </div>
      <div className='absolute bottom-0 left-[50%] -translate-x-[50%] z-50 rounded-t-full bg-yellow-400 p-2 shadow-2xl shadow-black'>
        <img src={cartIcon} alt='icon' className='h-8 w-16' />
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-dvh" loop={true} slidesPerView={1} >
        <SwiperSlide className='bg-[#2C2C2C] flex flex-col'>
          <div className='w-full grid grid-cols-12'>
            {products.map((product, index) => {
              const HoverComponent = () => {
                const [isOpen, setIsOpen] = useState(false);

                // Floating and hover logic for each product
                const { refs, floatingStyles, context } = useFloating({
                  open: isOpen,
                  onOpenChange: setIsOpen,
                  middleware: [
                    shift(),
                    offset(8),
                    autoPlacement(),
                  ],
                });

                const hover = useHover(context, {
                  delay: { open: 200, close: 200 },
                });

                const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

                return (
                  <>
                    <div
                      className={`${product.col === 2 && 'col-span-4 sm:col-span-2'} ${product.col === 3 && 'col-span-6 sm:col-span-3'} ${product.col === 4 && 'col-span-8 sm:col-span-4'}`}
                      ref={refs.setReference}
                      {...getReferenceProps({
                        onMouseEnter: () => setIsOpen(true),
                        onMouseLeave: () => setIsOpen(false),
                      })}
                    >
                      <div className='h-[125px] lg:h-[250px] flex items-end'>
                        {Array.from({ length: product.col }, (p, i) => (
                          <img key={i} src={product.imgUrl} className={`${product.col === 2 && '!w-1/2'} ${product.col === 3 && '!w-1/3'} ${product.col === 4 && '!w-1/4'} image-${product.col} max-h-[100%]`} alt={product} />
                        ))}
                      </div>
                      <div className={`h-shelfWidth w-full bg-[#BAAD94] flex items-center justify-center shadow-3xl text-xs md:text-lg`}>
                        {product.name} <br className='md:hidden' /> ${product.price}
                      </div>
                    </div>
                    {isOpen && (
                      <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                        className="bg-white p-4 shadow-lg rounded-lg"
                      >
                        <p>{product.name}</p>
                        <p>Price: ${product.price}</p>
                      </div>
                    )}
                  </>
                );
              };

              return <HoverComponent key={index} />;
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-[#2C2C2C] flex flex-col'>
          <div className='w-full grid grid-cols-12'>
            {products.map((product, index) => {
              const HoverComponent = () => {
                const [isOpen, setIsOpen] = useState(false);

                // Floating and hover logic for each product
                const { refs, floatingStyles, context } = useFloating({
                  open: isOpen,
                  onOpenChange: setIsOpen,
                  middleware: [
                    shift(),
                    offset(8),
                    autoPlacement(),
                  ],
                });

                const hover = useHover(context, {
                  delay: { open: 200, close: 200 },
                });

                const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

                return (
                  <>
                    <div
                      className={`${product.col === 2 && 'col-span-4 sm:col-span-2'} ${product.col === 3 && 'col-span-6 sm:col-span-3'} ${product.col === 4 && 'col-span-8 sm:col-span-4'}`}
                      ref={refs.setReference}
                      {...getReferenceProps({
                        onMouseEnter: () => setIsOpen(true),
                        onMouseLeave: () => setIsOpen(false),
                      })}
                    >
                      <div className='h-[125px] lg:h-[250px] flex items-end'>
                        {Array.from({ length: product.col }, (p, i) => (
                          <img key={i} src={product.imgUrl} className={`${product.col === 2 && '!w-1/2'} ${product.col === 3 && '!w-1/3'} ${product.col === 4 && '!w-1/4'} image-${product.col} max-h-[100%]`} alt={product} />
                        ))}
                      </div>
                      <div className={`h-shelfWidth w-full bg-[#BAAD94] flex items-center justify-center shadow-3xl text-xs md:text-lg`}>
                        {product.name} <br className='md:hidden' /> ${product.price}
                      </div>
                    </div>
                    {isOpen && (
                      <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                        className="bg-white p-4 shadow-lg rounded-lg"
                      >
                        <p>{product.name}</p>
                        <p>Price: ${product.price}</p>
                      </div>
                    )}
                  </>
                );
              };

              return <HoverComponent key={index} />;
            })}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
