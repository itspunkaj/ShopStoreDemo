import { useRef, useState } from 'react';
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
  // const [animatedElements, setAnimatedElements] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  const addPrice = usePriceStore((state) => state.addPrice);
  const removePrice = usePriceStore((state) => state.removePrice)
  const boughtItems = useItemsBoughtStore((state) => state.products);
  const updateBoughtItems = useItemsBoughtStore((state) => state.addProduct);
  const removeBoughtItems = useItemsBoughtStore((state) => state.removeProduct);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const updatedAnimatedItems = products.flatMap(page =>
  //       page.sections.flatMap(section =>
  //         section.items
  //           .filter(item => item.newLaunch)
  //           .map(item => item.id)
  //       )
  //     );

  //     setAnimatedElements(updatedAnimatedItems);

  //     setTimeout(() => {
  //       setAnimatedElements([]);
  //     }, 1000);

  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleSelectProduct = (pId) => {
    console.log(`Product with id ${pId} got Selected`);
    setSelectedProduct(pId);
  }
  const popupRef = useRef(null);

  const handleClickOutside = () => {
    setSelectedProduct('');
  };

  const toggleCategoryMenu = () => {
    setCategoryMenuOpen(!categoryMenuOpen);
  }



  return (
    <div className='h-dvh relative'>
      <div className='absolute top-2 lg:top-5 left-2 lg:left-5 z-50 shadow-2xl shadow-black'>
        <img src={EIcon} alt='icon' className='lg:w-16 w-10' />
      </div>
      <div className='absolute top-1 lg:top-5 right-12 lg:right-16 z-50 bg-[#f9e207] rounded-full p-2 shadow-2xl shadow-black'>
        <img src={searchIcon} alt='icon' className='h-5 w-5' />
      </div>
      <div className='absolute top-1 lg:top-5 right-2 lg:right-5 z-50 bg-[#f9e207] rounded-full p-2 shadow-2xl shadow-black'>
        <img src={hamburgerIcon} alt='icon' className='h-5 w-5' onClick={toggleCategoryMenu} />
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Cart />
      </div>


      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-svh" loop={true} >
        {products.map((page, i) => {
          return (
            <SwiperSlide key={i} className='bg-[#2C2C2C] flex flex-col'>
              <Swiper direction='vertical' className="mySwiper h-svh" loop={true} >
                {page.sections.map((verticalSection, j) => {
                  return (
                    <SwiperSlide key={j} className='bg-[#2C2C2C] flex flex-col overflow-hidden' >
                      <div className='w-full grid grid-cols-12' style={{ clear: 'both' }}>
                        {
                          verticalSection.items.map((product, k) => {
                            const HoverComponent = () => {
                              // const [{ isDragging }, drag, preview] = useDrag(() => ({
                              //   type: 'Product',
                              //   item: { name: product.name, price: product.price },
                              //   end: (product, monitor) => {
                              //     const dropResult = monitor.getDropResult()
                              //     if (product && dropResult) {
                              //       alert(`You just added ${product.name}`);
                              //     }
                              //   },
                              //   collect: (monitor) => ({
                              //     isDragging: monitor.isDragging(),
                              //     // handlerId: monitor.getHandlerId(),
                              //   })
                              // }))

                              // const [isHold, setIsHold] = useState(false);
                              // const [holdTimeout, setHoldTimeout] = useState(null);

                              // const handleStartHold = () => {
                              //   console.log("Mouse Down / Touch Start"); // Check if this is called
                              //   // event.preventDefault(); // Prevent default touch/mouse behavior
                              //   const timeout = setTimeout(() => {
                              //     console.log("Hold started.")
                              //     setIsHold(true); // Allow dragging after 500ms hold
                              //   }, 500);
                              //   setHoldTimeout(timeout);
                              // };

                              // const handleEndHold = () => {
                              //   console.log("Mouse Up / Touch End"); // Check if this is called
                              //   clearTimeout(holdTimeout); // Clear the timeout on release
                              //   setIsHold(false); // Cancel the hold
                              // };

                              // useEffect(() => {
                              //   return () => {
                              //     clearTimeout(holdTimeout); // Clean up on component unmount
                              //   };
                              // }, [holdTimeout]);

                              const handleClick = (event, pId) => {
                                const currentTime = new Date().getTime();
                                const tapGap = currentTime - lastTap;
                                setLastTap(currentTime);

                                // Check for double-tap
                                if (tapGap < 300 && tapGap > 0) {
                                  handleSelectProduct(pId);
                                }
                              }

                              return (
                                <>
                                  <div
                                    className={`${product.col === 2 && 'col-span-4 sm:col-span-2'} ${product.col === 3 ? 'col-span-6 sm:col-span-3' : ''} ${product.col === 4 ? 'col-span-8 sm:col-span-4' : ''}`}
                                  >
                                    <div className='h-[90px] lg:h-shelfHeight flex items-end relative overflow-hidden mx-[2px]'
                                      // onDoubleClick={() => {
                                      //   handleSelectProduct(product.id); // Trigger only if not dragging
                                      // }}
                                      // onContextMenu={(e) => e.preventDefault()} // Prevent context menu on this layer too
                                      // onTouchStart={(event) => handleTouchStart(event, product.id)}
                                      // onTouchEnd={handleTouchEnd}
                                      // onTouchMove={(event) => {
                                      //   if (!isLongPress) {
                                      //     event.stopPropagation();
                                      //   }
                                      // }}
                                      onClick={(event) => handleClick(event, product.id)}
                                    >
                                      {
                                        product.discount &&
                                        <div className='discountOverlay absolute top-0 left-0 h-full w-full bg-green-500/20 border-2 flex flex-col justify-center items-center border-green-500 '>
                                          <span className='text-white text-lg'>
                                            {product.discount}% off
                                          </span>
                                        </div>
                                      }
                                      <div
                                        className="absolute inset-0"
                                      // onMouseDown={handleStartHold} // For desktop mouse
                                      // onMouseUp={handleEndHold}
                                      // onTouchStart={handleStartHold} // For touch devices
                                      // onTouchEnd={handleEndHold}
                                      // onMouseLeave={handleEndHold} // Detect moving away from the product area
                                      // onTouchCancel={handleEndHold} // In case of touch cancel
                                      // onContextMenu={(e) => e.preventDefault()} // Prevent context menu on this layer too
                                      />

                                      {Array.from({ length: product.imageCount }, (p, index) => {
                                        return (
                                          <img
                                            data-testid={"product"} key={k + index} src={product.imgUrl} className={`!max-h-[98%] mx-auto ${product.imageCount == 2 ? 'w-1/2' : ''} ${product.imageCount == 3 ? 'w-1/3' : ''} ${product.imageCount == 4 ? 'w-1/4' : ''} ${product.imageCount == 5 ? 'w-1/5' : ''} ${product.imageCount == 6 ? 'w-1/6' : ''} max-mx-[3px] object-bottom ${product.newLaunch ? 'shakeAnimation' : ''}`} alt={product.name}
                                          />
                                        )
                                      })}
                                    </div>
                                    <div className={`max-lg:h-shelfWidth h-[2rem]  w-full bg-[#BAAD94] flex items-center justify-center shadow-3xl`}>

                                      <div className={`bg-slate-50 h-full w-44  border border-slate-400 rounded-md flex items-center justify-center relative`}>
                                        {
                                          product.newLaunch &&
                                          <div className={`h-full absolute left-0 lg:top-1`}>
                                            <img className={`h-shelfWidth w-6 lg:w-8 object-cover`} src={newLaunch} />
                                          </div>
                                        }
                                        <div className={`max-lg:text-[10px] text-xs px-1 h-full w-[80%] flex items-center justify-center flex-col`}>
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
                                        className="bg-white rounded-lg z-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 sm:h-4/5 sm:max-h-[350px] w-[80%] max-w-[800px] flex max-sm:flex-col justify-center items-center shadow-2xl border-[1px] border-gray-400 sm:divide-x-2"
                                      >
                                        <div className='absolute right-2 top-2 cursor-pointer hover:bg-slate-300 duration-300 rounded-full' onClick={(e) => { e.stopPropagation(); handleClickOutside() }}>
                                          <img src='/close.svg' className={`h-6`} />
                                        </div>
                                        <div className='max-sm:w-full w-1/3 px-10 max-sm:mt-10  sm:h-4/5 relative '>
                                          {product.newLaunch &&
                                            <img className='absolute h-14 w-16 top-0 left-2 z-50 object-cover' src={newLaunch} />}
                                          <img className='mx-auto productImage max-sm:h-[200px] h-full' src={product.imgUrl} alt={product.name} />
                                        </div>
                                        <div className='flex-1 h-4/5 flex flex-col items-start max-sm:px-6 max-sm:py-10 px-10'>
                                          <div className='flex flex-col w-full'>
                                            <div className=' w-full text-start font-medium'>{product.name}</div>
                                            <div className='flex text-[10px] py-1'>
                                              <span className='px-2 rounded-full border'>Tag 1</span>
                                              <span className='mx-1 px-2 rounded-full border'>Tag 2</span>
                                            </div>

                                          </div>
                                          <div className='flex-1 text-start text-xs lg:text-sm h-auto flex items-center py-3'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vseniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </div>
                                          <div className='flex items-center w-full'>
                                            <div className='max-lg:text-base'>${product.price}
                                              {product.discount && <>&nbsp;<span className='line-through text-slate-400 text-xs'>${Math.round(((product.price / (100 - product.discount)) * 100) * 100) / 100}</span>
                                                &nbsp;<span className='text-xs'>({product.discount}% off)</span></>}
                                            </div>
                                            {product.productId in boughtItems && boughtItems[product.productId] > 0 ?
                                              <div className='rounded-lg bg-primaryYellow text-primaryBlue   py-1 lg:py-2 text-sm ml-2 sm:mx-5 font-semibold'>
                                                <button className='w-5 h-5 border-r border-primaryBlue mx-1' onClick={() => { removePrice(product.price); removeBoughtItems(product.productId) }}>-</button>
                                                <span className='px-1 text-sm mx-2'>{boughtItems[product.productId] > 1 ? (boughtItems[product.productId] + ' Items') : (boughtItems[product.productId] + ' Item')} </span>
                                                <button className='w-5 h-5 border-l border-primaryBlue mx-1' onClick={() => { addPrice(product.price); updateBoughtItems(product.productId) }}>+</button>
                                              </div>
                                              :
                                              <button className='rounded-lg bg-primaryYellow text-primaryBlue px-5  py-1 lg:py-2 text-sm ml-2 sm:mx-5 font-semibold' onClick={() => { addPrice(product.price); updateBoughtItems(product.productId) }}>Add to cart</button>}
                                          </div>
                                        </div>
                                        {/* <div className='max-lg:text-[10px] text-sm'>{product.name}</div>
                                        <div className='max-lg:text-base'>${product.price}</div> */}
                                        {/* <div>
                                          {product.productId in boughtItems && boughtItems[product.productId] > 0 ?
                                            <div className='rounded-lg bg-slate-300  lg:py-1 max-lg:text-[10px] text-sm'>
                                              <button className='w-5 h-5 border-r' onClick={() => { removePrice(product.price); removeBoughtItems(product.productId) }}>-</button>
                                              <span className='px-1 max-lg:text-[10px] text-sm'>{boughtItems[product.productId]} Items</span>
                                              <button className='w-5 h-5 border-l' onClick={() => { addPrice(product.price); updateBoughtItems(product.productId) }}>+</button>
                                            </div>
                                            :
                                            <button className='rounded-lg bg-slate-300 px-2 lg:py-1 max-lg:text-[10px] text-sm' onClick={() => { addPrice(product.price); updateBoughtItems(product.productId) }}>Add to cart</button>}
                                        </div> */}
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