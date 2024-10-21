import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css'

import { autoPlacement, useClick, useFloating, useInteractions } from '@floating-ui/react';

// import required modules
import { Navigation } from 'swiper/modules';

import AxeBlue from './assets/AxeBlue.svg';
import Loreal from './assets/Loreal.svg';
import NiveaWhite from './assets/NiveaWhite.svg';
import NiveaBlue from './assets/NiveaBlue.svg';
import LorealShamp from './assets/LorealShamp.svg';
import TresemmeBlack from './assets/TresemmeBlack.svg';
import AxeBlack from './assets/AxeBlack.svg';
import searchIcon from './assets/searchIcon.svg';

import EIcon from './assets/Screenshot 2024-10-18 123257.png';
import newLaunch from './assets/2.svg'
import Cart from './Cart';

const products = [
  {
    page: 1,
    sections: [
      {
        id: 1,
        items: [
          { productId: 1, name: 'Loreal', price: 1.99, imgUrl: Loreal, col: 3, discount: '50%', newLaunch: false },
          { productId: 2, name: 'Axe Blue', price: 1.99, imgUrl: AxeBlue, col: 3, discount: null, newLaunch: true },
          { productId: 3, name: 'Nivea White', price: 1.49, imgUrl: NiveaWhite, col: 2, discount: null, newLaunch: false },
          { productId: 4, name: 'Nivea Blue', price: 1.69, imgUrl: NiveaBlue, col: 2, discount: null, newLaunch: false },
          { productId: 5, name: 'Loreal Shampoo', price: 1.69, imgUrl: LorealShamp, col: 2, discount: null, newLaunch: false },
          { productId: 6, name: 'Axe Black', price: 1.99, imgUrl: AxeBlack, col: 4, discount: null, newLaunch: false },
          { productId: 7, name: 'Tresemme Black', price: 2.19, imgUrl: TresemmeBlack, col: 2, discount: '20%', newLaunch: false },
          { productId: 8, name: 'Axe Black', price: 1.99, imgUrl: AxeBlack, col: 3, discount: null, newLaunch: false },
          { productId: 9, name: 'Loreal', price: 1.99, imgUrl: Loreal, col: 3, discount: null, newLaunch: false },
        ]
      },
      {
        id: 2,
        items: [
          { productId: 10, name: 'Loreal', price: 1.99, imgUrl: Loreal, col: 3, discount: '50%', newLaunch: false },
          { productId: 11, name: 'Axe Blue', price: 1.99, imgUrl: AxeBlue, col: 3, discount: null, newLaunch: true },
          { productId: 12, name: 'Nivea White', price: 1.49, imgUrl: NiveaWhite, col: 2, discount: null, newLaunch: false },
          { productId: 13, name: 'Nivea Blue', price: 1.69, imgUrl: NiveaBlue, col: 2, discount: null, newLaunch: false },
          { productId: 14, name: 'Loreal Shampoo', price: 1.69, imgUrl: LorealShamp, col: 2, discount: null, newLaunch: false },
          { productId: 15, name: 'Axe Black', price: 1.99, imgUrl: AxeBlack, col: 4, discount: null, newLaunch: false },
          { productId: 16, name: 'Tresemme Black', price: 2.19, imgUrl: TresemmeBlack, col: 2, discount: '20%', newLaunch: false },
          { productId: 17, name: 'Axe Black', price: 1.99, imgUrl: AxeBlack, col: 3, discount: null, newLaunch: false },
          { productId: 18, name: 'Loreal', price: 1.99, imgUrl: Loreal, col: 3, discount: null, newLaunch: false },
        ]
      }
    ]
  },
  {
    page: 2,
    sections: [
      {
        id: 1,
        items: [
          { productId: 19, name: 'Loreal', price: 1.99, imgUrl: Loreal, col: 3, discount: '50%', newLaunch: false },
          { productId: 20, name: 'Axe Blue', price: 1.99, imgUrl: AxeBlue, col: 3, discount: null, newLaunch: true },
          { productId: 21, name: 'Nivea White', price: 1.49, imgUrl: NiveaWhite, col: 2, discount: null, newLaunch: false },
          { productId: 22, name: 'Nivea Blue', price: 1.69, imgUrl: NiveaBlue, col: 2, discount: null, newLaunch: false },
          { productId: 23, name: 'Loreal Shampoo', price: 1.69, imgUrl: LorealShamp, col: 2, discount: null, newLaunch: false },
          { productId: 24, name: 'Axe Black', price: 1.99, imgUrl: AxeBlack, col: 4, discount: null, newLaunch: false },
          { productId: 25, name: 'Tresemme Black', price: 2.19, imgUrl: TresemmeBlack, col: 2, discount: '20%', newLaunch: false },
          { productId: 26, name: 'Axe Black', price: 1.99, imgUrl: AxeBlack, col: 3, discount: null, newLaunch: false },
          { productId: 27, name: 'Loreal', price: 1.99, imgUrl: Loreal, col: 3, discount: null, newLaunch: false },
        ]
      },
      {
        id: 2,
        items: [
          { productId: 28, name: 'Loreal', price: 1.99, imgUrl: Loreal, col: 3, discount: '50%', newLaunch: false },
          { productId: 29, name: 'Axe Blue', price: 1.99, imgUrl: AxeBlue, col: 3, discount: null, newLaunch: true },
          { productId: 30, name: 'Nivea White', price: 1.49, imgUrl: NiveaWhite, col: 2, discount: null, newLaunch: false },
          { productId: 31, name: 'Nivea Blue', price: 1.69, imgUrl: NiveaBlue, col: 2, discount: null, newLaunch: false },
          { productId: 32, name: 'Loreal Shampoo', price: 1.69, imgUrl: LorealShamp, col: 2, discount: null, newLaunch: false },
          { productId: 33, name: 'Axe Black', price: 1.99, imgUrl: AxeBlack, col: 4, discount: null, newLaunch: false },
          { productId: 34, name: 'Tresemme Black', price: 2.19, imgUrl: TresemmeBlack, col: 2, discount: '20%', newLaunch: false },
          { productId: 35, name: 'Axe Black', price: 1.99, imgUrl: AxeBlack, col: 3, discount: null, newLaunch: false },
          { productId: 36, name: 'Loreal', price: 1.99, imgUrl: Loreal, col: 3, discount: null, newLaunch: false },
        ]
      }
    ]
  }
];


export default function App() {
  const [animatedElements, setAnimatedElements] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const popupRef = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      const updatedAnimatedItems = products.flatMap(page =>
        page.sections.flatMap(section =>
          section.items
            .filter(item => item.newLaunch)
            .map(item => item.productId)
        )
      );

      setAnimatedElements(updatedAnimatedItems);

      setTimeout(() => {
        setAnimatedElements([]);
      }, 1000);

    }, 3000);

    return () => clearInterval(interval);
  }, [products]);

  const handleClickOutside = (event) => {
    // Check if the click is outside the popup
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setSelectedProduct(null); // Hide the popup
    }
  };
  useEffect(() => {
    if (selectedProduct !== null) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [])

  const handleSelectProduct = (pId) => {
    setSelectedProduct(pId);
  }

  return (
    <div className='h-dvh relative'>
      <div className='absolute top-1 lg:top-5 left-1 lg:left-5 z-50 shadow-2xl shadow-black'>
        <img src={EIcon} alt='icon' className='lg:w-16 w-8' />
      </div>
      <div className='absolute top-5 right-5 z-50 bg-[#f9e207] rounded-full p-2 shadow-2xl shadow-black'>
        <img src={searchIcon} alt='icon' className='h-5 w-5' />
      </div>
      <Cart />


      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-svh" loop={true} >
        {products.map((page, i) => {
          return (
            <SwiperSlide key={i} className='bg-[#2C2C2C] flex flex-col'>
              <Swiper direction='vertical' className="mySwiper h-svh" loop={true} >
                {page.sections.map((verticalSection, j) => {
                  return (
                    <SwiperSlide key={j} className='bg-[#2C2C2C] flex flex-col' >
                      <div className='w-full grid grid-cols-12'>
                        {
                          verticalSection.items.map((product, k) => {
                            const HoverComponent = () => {


                              return (
                                <>
                                  <div
                                    className={`${product.col === 2 && 'col-span-4 sm:col-span-2'} ${product.col === 3 ? 'col-span-6 sm:col-span-3' : ''} ${product.col === 4 ? 'col-span-8 sm:col-span-4' : ''} relative`}
                                    onClick={() => { handleSelectProduct(product.productId) }}
                                  >
                                    <div className='h-[125px] lg:h-shelfHeight flex items-end relative'>
                                      {
                                        product.discount &&
                                        <div className='discountOverlay absolute top-0 left-0 h-full w-full bg-green-500/20 border-2 flex flex-col justify-center items-center border-green-500 '>
                                          <span className='text-white text-lg'>
                                            {product.discount} Discount
                                          </span>
                                        </div>
                                      }
                                      {Array.from({ length: product.col }, (p, index) => {
                                        return (
                                          <img data-testid={"product"} key={k + index} src={product.imgUrl} className={`${product.col === 2 ? '!w-1/2' : ''} ${product.col === 3 ? '!w-1/3' : ''} ${product.col === 4 ? '!w-1/4' : ''} image-${product.col} !max-h-[100%] object-bottom ${animatedElements.includes(product.productId) ? 'shakeAnimation' : ''}`} alt={product.name} />
                                        )
                                      })}
                                    </div>
                                    <div className={`h-shelfWidth w-full bg-[#BAAD94] flex items-center justify-center shadow-3xl relative`}>
                                      {
                                        product.newLaunch &&
                                        <div className={`h-full absolute left-0 lg:left-2`}>
                                          <img className={`h-shelfWidth w-6 lg:w-10 object-cover`} src={newLaunch} />
                                        </div>
                                      }
                                      <div className={`bg-slate-50 w-36 border border-slate-400 rounded-md flex flex-col items-center justify-center`}>
                                        <span className={`text-[10px]`}>{product.name}</span>
                                        <span className={`text-xs`}>${product.price}</span>
                                      </div>
                                    </div>
                                    {selectedProduct == product.productId && (
                                      <div
                                        ref={popupRef}
                                        className="bg-white p-4 rounded-lg z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-1/2 w-3/4 flex justify-center items-center flex-col shadow-2xl"
                                      >
                                        <div className='text-sm'>{product.name}</div>
                                        <div className='sm'>${product.price}</div>
                                        <div><button className='rounded-lg bg-slate-400 px-2 py-1 text-sm'>Add to cart</button></div>
                                      </div>
                                    )}
                                  </div>
                                </>
                              )
                            }

                            return <HoverComponent key={k} />
                          })}
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}