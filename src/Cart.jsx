import { useDrop } from 'react-dnd';
import cartIcon from './assets/cart.svg';
import { useItemsBoughtStore, usePriceStore } from './store/store';
function Cart() {
  const totalCost = usePriceStore((state) => state.totalPrice);
  const itemsCount = useItemsBoughtStore((state) => state.totItems);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'Product',
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  }))

  const handleDrop = (product) => {
    // Handle adding the dropped product to the cart
    console.log("Dropped Product:", product.name);
    // You can also add logic to add this product to your cart store
  };

  const isActive = canDrop && isOver;

  return (
    <div ref={drop} className={`absolute  bottom-0 left-[50%] -translate-x-[50%] z-50 rounded-t-full ${isActive ? 'bg-yellow-500' : 'bg-[#f9e207]'}  p-2 shadow-2xl shadow-black`}>
      <img src={cartIcon} alt='icon' className='h-8 w-16 lg:h-14 lg:w-28' />
      <div className='h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-primaryBlue absolute left-0 bottom-0 -translate-x-1/2 text-white text-xs flex items-center justify-center'>{itemsCount > 1 ? (itemsCount + " Items") : (itemsCount + " Item")}</div>
      <div className='h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-primaryBlue absolute right-0 bottom-0 translate-x-1/2 text-white text-xs flex items-center justify-center'>€ {totalCost}</div>
    </div>
  )
}

export default Cart;