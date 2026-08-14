import { useCart } from '../context/CartContext'

function AddToCartButton({ product, quantity = 1, className = 'mini-button', variant = {}, options = {}, children = 'Add to cart' }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product, quantity, variant, options)
  }

  return (
    <button type="button" className={className} onClick={handleAddToCart}>
      {children}
    </button>
  )
}

export default AddToCartButton
