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
    <div className='relative'>
      <div className='absolute top-5 right-10 z-50 bg-yellow-400 rounded-full p-2'>
        <img src={searchIcon} alt='icon' className='h-5 w-5' />
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop={true} slidesPerView={1} >
        <SwiperSlide className='bg-[#2C2C2C] flex flex-col'>
          <div className='w-full h-auto grid grid-cols-12'>
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
              <img src={Loreal} className='!h-auto' />
              <img src={Loreal} className='!h-auto' />
              <img src={Loreal} className='!h-auto' />
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
              <img src={TresemmeBlack} className='!h-auto' />
              <img src={TresemmeBlack} className='!h-auto' />
            </div>
            <div className='col-span-6 md:col-span-3 h-4/6  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={AxeBlack} className='!object-contain !h-3/4 !w-1/2' />
              <img src={AxeBlack} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-6 md:col-span-3 h-2/3  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={Loreal} className='!h-auto' />
              <img src={Loreal} className='!h-auto' />
              <img src={Loreal} className='!h-auto' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-[#2C2C2C] flex flex-col'>
          <div className='w-full h-auto grid grid-cols-12'>
            <div className='col-span-6 md:col-span-3  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={AxeBlue} className=' !w-1/3 !h-auto' />
              <img src={AxeBlue} className=' !w-1/3  !h-auto' />
              <img src={AxeBlue} className='!w-1/3  !h-auto' />
            </div>
            <div className='col-span-6 md:col-span-3 flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={Loreal} className='!h-auto' />
              <img src={Loreal} className='!h-auto' />
              <img src={Loreal} className='!h-auto' />
              {/* <img src={Loreal} className='!w-[!h-auto -translate-x-[90%]' /> */}
              {/* <img src={Loreal} className=' !h-auto -translate-x-[120%]' /> */}
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
              <img src={TresemmeBlack} className='!h-auto' />
              <img src={TresemmeBlack} className='!h-auto' />
            </div>
            <div className='col-span-6 md:col-span-3 h-4/6  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={AxeBlack} className='!object-contain !h-3/4 !w-1/2' />
              <img src={AxeBlack} className='!object-contain !h-3/4 !w-1/2' />
            </div>
            <div className='col-span-6 md:col-span-3 h-2/3  flex items-end border-b-[20px] border-[#BAAD94] border-solid'>
              <img src={Loreal} className='!h-auto' />
              <img src={Loreal} className='!h-auto' />
              <img src={Loreal} className='!h-auto' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
