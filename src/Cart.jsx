import cartIcon from './assets/cart.svg';
function Cart() {

  return (
    <div data-testid="cart"  className='absolute  bottom-0 left-[50%] -translate-x-[50%] z-50 rounded-t-full bg-[#f9e207] p-2 shadow-2xl shadow-black'>
      <img src={cartIcon} alt='icon' className='h-14 w-28' />
      <div className='h-12 w-12 rounded-full bg-primaryBlue absolute left-0 bottom-0 -translate-x-1/2 text-white text-xs flex items-center justify-center'> 12 Items</div>
      <div className='h-12 w-12 rounded-full bg-primaryBlue absolute right-0 bottom-0 translate-x-1/2 text-white text-xs flex items-center justify-center'>$15.99</div>
    </div>
  )
}

export default Cart