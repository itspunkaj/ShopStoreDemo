import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css'
import { Navigation } from 'swiper/modules';

import searchIcon from './assets/searchIcon.svg';
import hamburgerIcon from '/hamburger.svg'
import EIcon from './assets/Screenshot 2024-10-18 123257.png';
import newLaunch from './assets/2.svg'
import Cart from './Cart';
import { useItemsBoughtStore, usePriceStore } from './store/store';

import { products } from './Products';
import barCode from '/barcode.png';


export default function Store() {
  const [animatedElements, setAnimatedElements] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addPrice = usePriceStore((state) => state.addPrice);
  const removePrice = usePriceStore((state) => state.removePrice)
  const boughtItems = useItemsBoughtStore((state) => state.products);
  const updateBoughtItems = useItemsBoughtStore((state) => state.addProduct);
  const removeBoughtItems = useItemsBoughtStore((state) => state.removeProduct);


  useEffect(() => {
    const interval = setInterval(() => {
      const updatedAnimatedItems = products.flatMap(page =>
        page.sections.flatMap(section =>
          section.items
            .filter(item => item.newLaunch)
            .map(item => item.id)
        )
      );

      setAnimatedElements(updatedAnimatedItems);

      setTimeout(() => {
        setAnimatedElements([]);
      }, 1000);

    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSelectProduct = (pId) => {
    setSelectedProduct(pId);
  }
  const popupRef = useRef(null);

  const handleClickOutside = () => {
    // Check if the click is outside the popup
    setSelectedProduct(null); // Hide the popup
  };
  useEffect(() => {
    if (selectedProduct !== null) {
      console.log("Unslected Product.")
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [])


  return (
    <div className='h-dvh relative'>
      <div className='absolute top-1 lg:top-5 left-1 lg:left-5 z-50 shadow-2xl shadow-black'>
        <img src={EIcon} alt='icon' className='lg:w-16 w-8' />
      </div>
      <div className='absolute max-lg:bottom-1 lg:top-5 right-16 z-50 bg-[#f9e207] rounded-full p-2 shadow-2xl shadow-black'>
        <img src={searchIcon} alt='icon' className='h-5 w-5' />
      </div>
      <div className='absolute max-lg:bottom-1 lg:top-5 right-5 z-50 bg-[#f9e207] rounded-full p-2 shadow-2xl shadow-black'>
        <img src={hamburgerIcon} alt='icon' className='h-5 w-5' />
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
                                    onClick={() => { handleSelectProduct(product.id) }}
                                  >
                                    <div className='h-[130px] lg:h-shelfHeight flex items-end relative overflow-hidden mx-[2px]'>
                                      {
                                        product.discount &&
                                        <div className='discountOverlay absolute top-0 left-0 h-full w-full bg-green-500/20 border-2 flex flex-col justify-center items-center border-green-500 '>
                                          <span className='text-white text-lg'>
                                            {product.discount} Discount
                                          </span>
                                        </div>
                                      }
                                      {Array.from({ length: product.imageCount }, (p, index) => {
                                        return (
                                          <img data-testid={"product"} key={k + index} src={product.imgUrl} className={`!max-h-[98%] mx-auto ${product.imageCount == 2 ? 'w-1/2' : ''} ${product.imageCount == 3 ? 'w-1/3' : ''} ${product.imageCount == 4 ? 'w-1/4' : ''} ${product.imageCount == 5 ? 'w-1/5' : ''} ${product.imageCount == 6 ? 'w-1/6' : ''} max-mx-[3px] object-bottom ${animatedElements.includes(product.id) ? 'shakeAnimation' : ''}`} alt={product.name} />
                                        )
                                      })}
                                    </div>
                                    <div className={`max-lg:h-shelfWidth h-[2rem]  w-full bg-[#BAAD94] flex items-center justify-center shadow-3xl relative`}>

                                      <div className={`bg-slate-50 h-full w-44 z-50 border border-slate-400 rounded-md flex items-center justify-center relative`}>
                                        {
                                          product.newLaunch &&
                                          <div className={`h-full absolute left-0 lg:top-1`}>
                                            <img className={`h-shelfWidth w-6 lg:w-8 object-cover`} src={newLaunch} />
                                          </div>
                                        }
                                        <div className={`max-lg:text-[8px] text-xs px-1 h-full w-[80%]`}>
                                          <span>
                                            {product.name}
                                          </span>
                                          <div className='flex justify-center'>

                                            <img src={barCode} className={`object-cover h-3 w-16 max-lg:hidden`} />
                                          </div>


                                        </div>
                                        <span className={`max-lg:text-sm px-1`}>${product.price}</span>
                                      </div>
                                    </div>
                                    {selectedProduct == product.id && (
                                      <div
                                        ref={popupRef}
                                        className="bg-white px-0 rounded-lg z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-1/2 w-[90%] flex justify-center items-center flex-col shadow-2xl border-[1px] border-gray-400"
                                      >
                                        <div className='max-lg:text-[10px] text-sm'>{product.name}</div>
                                        <div className='max-lg:text-base'>${product.price}</div>
                                        <div>
                                          {product.productId in boughtItems && boughtItems[product.productId] > 0 ?
                                            <div className='rounded-lg bg-slate-300  lg:py-1 max-lg:text-[10px] text-sm'>
                                              <button className='w-5 h-5 border-r' onClick={() => { removePrice(product.price); removeBoughtItems(product.productId) }}>-</button>
                                              <span className='px-1 max-lg:text-[10px] text-sm'>{boughtItems[product.productId]} Items</span>
                                              <button className='w-5 h-5 border-l' onClick={() => { addPrice(product.price); updateBoughtItems(product.productId) }}>+</button>
                                            </div>
                                            :
                                            <button className='rounded-lg bg-slate-300 px-2 lg:py-1 max-lg:text-[10px] text-sm' onClick={() => { addPrice(product.price); updateBoughtItems(product.productId) }}>Add to cart</button>}
                                        </div>
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