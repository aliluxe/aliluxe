import { Link } from 'react-router-dom'

function CheckoutPage() {
  return (
    <div className="container page-shell checkout-page">
      <div className="page-header">
        <p className="eyebrow">Checkout</p>
        <h1>Complete your order</h1>
      </div>
      <div className="checkout-layout">
        <form className="checkout-form">
          <div className="form-block">
            <h3>Contact</h3>
            <input type="email" placeholder="Email address" />
          </div>
          <div className="form-block">
            <h3>Shipping address</h3>
            <div className="form-grid">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
              <input type="text" placeholder="Address" className="full" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="Postal code" />
            </div>
          </div>
          <div className="form-block">
            <h3>Payment</h3>
            <div className="payment-row">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Amex</span>
              <span>Apple Pay</span>
            </div>
            <input type="text" placeholder="Card number" />
          </div>
          <button type="submit" className="button-primary button-block">Place order</button>
        </form>

        <aside className="summary-box">
          <h3>Order summary</h3>
          <div className="summary-row"><span>Velvet Rose Serum</span><strong>$64</strong></div>
          <div className="summary-row"><span>Aurelia Ring Set</span><strong>$150</strong></div>
          <div className="summary-row"><span>Shipping</span><strong>$18</strong></div>
          <div className="summary-row"><span>Discount</span><strong>-$20</strong></div>
          <div className="summary-row total"><span>Total</span><strong>$212</strong></div>
          <Link to="/cart" className="button-secondary button-block">Return to cart</Link>
        </aside>
      </div>
    </div>
  )
}

export default CheckoutPage
