import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFloating, useHover, useInteractions } from "@floating-ui/react";
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
import searchIcon from './assets/searchIcon.svg'
import cartIcon from './assets/cart.svg';
import EIcon from './assets/E.svg'

const products = [
  {
    name: 'Axe Blue',
    price: 2.00,
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
    price: 2.00,
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
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      autoPlacement()
    ],
  });

  const hover = useHover(context, {
    delay: {
      open: 200,
      close: 0,
    },
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  return (
    <div className='h-[100lvh]'>
      <div className='absolute top-5 left-10 z-50 bg-yellow-400 rounded-full p-2 shadow-2xl shadow-black'>
        <img src={EIcon} alt='icon' className='md:h-16 md:w-16 h-8 w-8' />
      </div>
      <div className='absolute top-5 right-10 z-50 bg-yellow-400 rounded-full p-2 shadow-2xl shadow-black'>
        <img src={searchIcon} alt='icon' className='h-5 w-5' />
      </div>
      <div className='absolute bottom-0 left-[50%] -translate-x-[50%] z-50 rounded-t-full bg-yellow-400 p-2 shadow-2xl shadow-black'>
        <img src={cartIcon} alt='icon' className='h-14 w-28' />
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[100lvh]" loop={true} slidesPerView={1} >
        <SwiperSlide className='bg-[#2C2C2C] flex flex-col'>
          <div className='w-full grid grid-cols-12'>
            {products.map((product, index) => {
              return (
                <div key={index} className={`col-span-${product.col * 2} md:col-span-${product.col} `} style={{ zIndex: 999 }}>
                  <div className='h-shelfHeight flex items-end'>
                    {Array.from({ length: product.col }, (p, i) => (
                      <img key={i} src={product.imgUrl} className={`!w-1/${product.col} image-${product.col} max-h-[100%] `} />))}
                  </div>
                  <div className={`h-shelfWidth w-full bg-[#BAAD94] flex items-center justify-center shadow-3xl shadow-slate-900`} >
                    {product.name} ${product.price}
                  </div>
                </div>
              )
            })}
          </div>

          {/* <div className='w-full grid grid-cols-12 h-shelf'>
            <div className='col-span-6 md:col-span-3  flex items-end border-b-[20px] border-[#BAAD94] border-solid' ref={refs.setReference} {...getReferenceProps()}>
              <img src={AxeBlue} className=' !w-1/3 !h-auto' />
              <img src={AxeBlue} className=' !w-1/3  !h-auto' />
              <img src={AxeBlue} className='!w-1/3  !h-auto' />
            </div>
            {isOpen && (
              <div
                className="bg-white rounded-md p-8"
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps()}
              >
                <h6>Axe Blue</h6>
                <p>$2.00</p>
              </div>
            )}
            <div className='col-span-6 md:col-span-3 flex items-end border-b-[20px] border-[#BAAD94] border-solid' >
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-4 md:col-span-2 flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={NiveaWhite} className='!object-contain !h-3/4 !w-1/2' />
              <img src={NiveaWhite} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-4 md:col-span-2  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={NiveaBlue} className='!object-contain !h-3/4 !w-1/2' />
              <img src={NiveaBlue} className='!object-contain !h-3/4 !w-1/2' />

            </div>
            <div className='col-span-4 md:col-span-2  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={LorealShamp} className='!object-contain !h-3/4 !w-1/2' />
              <img src={LorealShamp} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-8 md:col-span-4 h-2/3 flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={DoveWhite} className='!object-contain !h-3/4 !w-1/2' />
              <img src={DoveWhite} className='!object-contain !h-3/4 !w-1/2' />
              <img src={DoveWhite} className='!object-contain !h-3/4 !w-1/2' />
              <img src={DoveWhite} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-4 md:col-span-2 h-2/3 flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={TresemmeBlack} className='!object-contain !h-3/4 !w-1/2' />
              <img src={TresemmeBlack} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-6 md:col-span-3 h-2/3  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={AxeBlack} className='!object-contain !h-3/4 !w-1/2' />
              <img src={AxeBlack} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-6 md:col-span-3 h-2/3  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
            </div>
          </div> */}
        </SwiperSlide>
        <SwiperSlide className='bg-[#2C2C2C] flex flex-col'>
          <div className='w-full grid grid-cols-12'>
            {products.map((product, index) => {
              return (
                <div key={index} className={`col-span-${product.col * 2} md:col-span-${product.col} `} style={{ zIndex: 999 }}>
                  <div className='h-shelfHeight flex items-end'>
                    {Array.from({ length: product.col }, (p, i) => (
                      <img key={i} src={product.imgUrl} className={`!w-1/${product.col} image-${product.col} max-h-[100%] `} />))}
                  </div>
                  <div className={`h-shelfWidth w-full bg-[#BAAD94] flex items-center justify-center shadow-3xl`} >
                    {product.name} ${product.price}
                  </div>
                </div>
              )
            })}
          </div>
          {/* <div className='w-full h-auto grid grid-cols-12'>
            <div className='col-span-6 md:col-span-3  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={AxeBlue} className='!object-contain !h-3/4 !w-1/2' />
              <img src={AxeBlue} className='!object-contain !h-3/4 !w-1/2' />
              <img src={AxeBlue} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-6 md:col-span-3 flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-4 md:col-span-2 flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={NiveaWhite} className='!object-contain !h-3/4 !w-1/2' />
              <img src={NiveaWhite} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-4 md:col-span-2  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={NiveaBlue} className='!object-contain !h-3/4 !w-1/2' />
              <img src={NiveaBlue} className='!object-contain !h-3/4 !w-1/2' />

            </div>
            <div className='col-span-4 md:col-span-2  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={LorealShamp} className='!object-contain !h-3/4 !w-1/2' />
              <img src={LorealShamp} className='!object-contain !h-3/4 !w-1/2' />
            </div>
          </div>
          <div className='w-full h-auto grid grid-cols-12 '>
            <div className='col-span-8 md:col-span-4 h-2/3 flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={DoveWhite} className='!object-contain !h-3/4 !w-1/2' />
              <img src={DoveWhite} className='!object-contain !h-3/4 !w-1/2' />
              <img src={DoveWhite} className='!object-contain !h-3/4 !w-1/2' />
              <img src={DoveWhite} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-4 md:col-span-2 h-2/3 flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={TresemmeBlack} className='!object-contain !h-3/4 !w-1/2' />
              <img src={TresemmeBlack} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-6 md:col-span-3 h-2/3  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={AxeBlack} className='!object-contain !h-3/4 !w-1/2' />
              <img src={AxeBlack} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-6 md:col-span-3 h-2/3  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
              <img src={Loreal} className='!object-contain !h-3/4 !w-1/2' />
            </div>
          </div> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
