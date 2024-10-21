import cartIcon from './assets/cart.svg';
function Cart() {

  return (
    <div data-testid="cart"  className='absolute bottom-0 left-[50%] -translate-x-[50%] z-50 rounded-t-full bg-[#f9e207] p-2 shadow-2xl shadow-black'>
      <img src={cartIcon} alt='icon' className='h-8 w-16' />
    </div>
  )
}

export default Cart