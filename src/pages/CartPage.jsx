import { Link } from 'react-router-dom'

const cartItems = [
  { id: 1, name: 'Velvet Rose Serum', price: 64, qty: 1, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80' },
  { id: 2, name: 'Aurelia Ring Set', price: 150, qty: 1, image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
]

function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shipping = 18
  const total = subtotal + shipping

  return (
    <div className="container page-shell cart-page">
      <div className="page-header">
        <p className="eyebrow">Bag</p>
        <h1>Your shopping bag</h1>
      </div>
      <div className="cart-layout">
        <div className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item__details">
                <h3>{item.name}</h3>
                <p>Qty {item.qty}</p>
                <button type="button">Remove</button>
              </div>
              <strong>${item.price}</strong>
            </div>
          ))}
        </div>
        <aside className="summary-box">
          <h3>Order summary</h3>
          <div className="summary-row"><span>Subtotal</span><strong>${subtotal}</strong></div>
          <div className="summary-row"><span>Shipping</span><strong>${shipping}</strong></div>
          <div className="summary-row total"><span>Total</span><strong>${total}</strong></div>
          <Link to="/checkout" className="button-primary button-block">Checkout</Link>
          <Link to="/shop" className="button-secondary button-block">Continue shopping</Link>
        </aside>
      </div>
    </div>
  )
}

export default CartPage
