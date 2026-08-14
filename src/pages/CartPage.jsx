import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatCurrency, getCartItemIdentifier } from '../utils/cart'

function CartPage() {
  const { cartItems, updateQuantity, removeItem, selectedCurrency, totals } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="container page-shell cart-page">
        <div className="empty-cart">
          <p className="eyebrow">Your bag</p>
          <h1>Your bag is currently empty.</h1>
          <p>Explore the latest arrivals and add a piece to continue your ALI LUXE shopping experience.</p>
          <Link to="/shop" className="button-primary">Continue shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container page-shell cart-page">
      <div className="page-header">
        <p className="eyebrow">Bag</p>
        <h1>Your shopping bag</h1>
      </div>
      <div className="cart-layout">
        <div className="cart-list">
          {cartItems.map((item) => {
            const itemKey = getCartItemIdentifier(item)
            return (
              <div key={itemKey} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item__details">
                  <h3>{item.name}</h3>
                  <p>{item.variant || 'Default'} • {item.options?.size || 'One size'} • {item.options?.color || 'Default'}</p>
                  <p>{formatCurrency(item.price, selectedCurrency)} each</p>
                  <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                    <button type="button" onClick={() => updateQuantity(itemKey, Number(item.quantity) - 1)} aria-label={`Decrease quantity for ${item.name}`}>−</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(itemKey, Number(item.quantity) + 1)} aria-label={`Increase quantity for ${item.name}`}>+</button>
                  </div>
                  <button type="button" className="remove-link" onClick={() => removeItem(itemKey)}>Remove</button>
                </div>
                <strong>{formatCurrency(Number(item.price) * Number(item.quantity), selectedCurrency)}</strong>
              </div>
            )
          })}
        </div>
        <aside className="summary-box">
          <h3>Order summary</h3>
          <div className="summary-row"><span>Subtotal</span><strong>{formatCurrency(totals.rawSubtotal, selectedCurrency)}</strong></div>
          <div className="summary-row"><span>Shipping</span><strong>{formatCurrency(totals.rawShipping, selectedCurrency)}</strong></div>
          <div className="summary-row"><span>Tax</span><strong>{formatCurrency(totals.rawTax, selectedCurrency)}</strong></div>
          <div className="summary-row"><span>Discount</span><strong>- {formatCurrency(totals.rawDiscount, selectedCurrency)}</strong></div>
          <div className="summary-row total"><span>Total</span><strong>{formatCurrency(totals.rawTotal, selectedCurrency)}</strong></div>
          <Link to="/checkout" className="button-primary button-block">Proceed to checkout</Link>
          <Link to="/shop" className="button-secondary button-block">Continue shopping</Link>
        </aside>
      </div>
    </div>
  )
}

export default CartPage
