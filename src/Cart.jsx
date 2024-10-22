import cartIcon from './assets/cart.svg';
import {useItemsBoughtStore, usePriceStore} from './store/store';
function Cart() {
  const totalCost = usePriceStore((state) => state.totalPrice);
  const itemsBought = useItemsBoughtStore((state) => state.products);
  return (
    <div data-testid="cart"  className='absolute  bottom-0 left-[50%] -translate-x-[50%] z-50 rounded-t-full bg-[#f9e207] p-2 shadow-2xl shadow-black'>
      <img src={cartIcon} alt='icon' className='h-8 w-16 lg:h-14 lg:w-28' />
      <div className='h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-primaryBlue absolute left-0 bottom-0 -translate-x-1/2 text-white text-xs flex items-center justify-center'>{itemsBought.length} Items</div>
      <div className='h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-primaryBlue absolute right-0 bottom-0 translate-x-1/2 text-white text-xs flex items-center justify-center'>${totalCost}</div>
    </div>
  )
}

export default Cart