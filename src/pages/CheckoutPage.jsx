import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { paymentMethodMeta, shippingMethods, formatCurrency, getCartItemIdentifier } from '../utils/cart'
import { getPaymentGatewayStatus, processPayment } from '../services/paymentService'

const initialCustomer = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  country: 'United States',
  address: '',
  apartment: '',
  city: '',
  state: '',
  postalCode: '',
}

function CheckoutPage() {
  const { cartItems, selectedCurrency, shippingMethodId, setShippingMethodId, clearCart, totals } = useCart()
  const [customer, setCustomer] = useState(initialCustomer)
  const [sameAsBilling, setSameAsBilling] = useState(true)
  const [shippingAddress, setShippingAddress] = useState({ ...initialCustomer })
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiry: '', cvc: '', cardholderName: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderStatus, setOrderStatus] = useState({ type: 'idle', message: '', order: null })
  const gatewayStatus = getPaymentGatewayStatus()

  const activeShippingAddress = sameAsBilling ? customer : shippingAddress

  if (cartItems.length === 0 && orderStatus.type !== 'success') {
    return (
      <div className="container page-shell checkout-page">
        <div className="empty-cart">
          <p className="eyebrow">Checkout</p>
          <h1>Your bag is currently empty.</h1>
          <p>Add at least one product before checking out.</p>
          <Link to="/shop" className="button-primary">Continue shopping</Link>
        </div>
      </div>
    )
  }

  const validate = () => {
    const nextErrors = {}

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!customer.firstName.trim()) nextErrors.firstName = 'First name is required.'
    if (!customer.lastName.trim()) nextErrors.lastName = 'Last name is required.'
    if (!customer.phone.trim()) nextErrors.phone = 'Phone is required.'
    if (!customer.country.trim()) nextErrors.country = 'Country is required.'
    if (!customer.address.trim()) nextErrors.address = 'Address is required.'
    if (!customer.city.trim()) nextErrors.city = 'City is required.'
    if (!customer.state.trim()) nextErrors.state = 'State or province is required.'
    if (!customer.postalCode.trim()) nextErrors.postalCode = 'Postal code is required.'

    if (!sameAsBilling) {
      if (!shippingAddress.country.trim()) nextErrors.shippingCountry = 'Shipping country is required.'
      if (!shippingAddress.address.trim()) nextErrors.shippingAddress = 'Shipping address is required.'
      if (!shippingAddress.city.trim()) nextErrors.shippingCity = 'Shipping city is required.'
      if (!shippingAddress.state.trim()) nextErrors.shippingState = 'Shipping state is required.'
      if (!shippingAddress.postalCode.trim()) nextErrors.shippingPostalCode = 'Shipping postal code is required.'
    }

    if (paymentMethod === 'card') {
      if (!cardDetails.cardNumber.replace(/\s+/g, '').trim()) nextErrors.cardNumber = 'Card number is required.'
      if (!/^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/.test(cardDetails.expiry)) nextErrors.expiry = 'Expiry must match MM / YY format.'
      if (!/^\d{3,4}$/.test(cardDetails.cvc)) nextErrors.cvc = 'Valid CVC is required.'
      if (!cardDetails.cardholderName.trim()) nextErrors.cardholderName = 'Cardholder name is required.'
    }

    return nextErrors
  }

  const handleInput = (setter) => (event) => {
    const { name, value } = event.target
    setter((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setIsSubmitting(true)
    setOrderStatus({ type: 'idle', message: '', order: null })

    try {
      const payment = await processPayment({
        amount: totals.rawTotal,
        currency: selectedCurrency,
        customer: {
          email: customer.email,
          firstName: customer.firstName,
          lastName: customer.lastName,
          phone: customer.phone,
        },
        paymentMethod,
        cardDetails: {
          last4: cardDetails.cardNumber.replace(/\s+/g, '').slice(-4),
          expiry: cardDetails.expiry,
        },
      })

      const generatedOrder = {
        orderNumber: `ALI-${Date.now().toString().slice(-8)}`,
        email: customer.email,
        paymentStatus: payment.status,
        total: totals.total,
        items: cartItems,
        shipping: activeShippingAddress,
        paymentMethod,
      }

      setOrderStatus({ type: 'success', message: 'Thank You for Your Order', order: generatedOrder })
      clearCart()
    } catch (error) {
      setOrderStatus({ type: 'failure', message: error.message, order: null })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (orderStatus.type === 'success' && orderStatus.order) {
    return (
      <div className="container page-shell checkout-page">
        <div className="confirmation-box">
          <p className="eyebrow">Order confirmation</p>
          <h1>Thank You for Your Order</h1>
          <p className="confirmation-order">Order #{orderStatus.order.orderNumber}</p>
          <div className="confirmation-grid">
            <div>
              <span>Email</span>
              <strong>{orderStatus.order.email}</strong>
            </div>
            <div>
              <span>Payment status</span>
              <strong>{orderStatus.order.paymentStatus}</strong>
            </div>
            <div>
              <span>Shipping</span>
              <strong>{orderStatus.order.shipping.city}, {orderStatus.order.shipping.country}</strong>
            </div>
            <div>
              <span>Total</span>
              <strong>{formatCurrency(orderStatus.order.total, selectedCurrency)}</strong>
            </div>
          </div>
          <ul className="product-list">
            {orderStatus.order.items.map((item) => (
              <li key={`${item.productId}-${getCartItemIdentifier(item)}`}>
                <span>{item.name} × {item.quantity}</span>
                <strong>{formatCurrency(Number(item.price) * Number(item.quantity), selectedCurrency)}</strong>
              </li>
            ))}
          </ul>
          <Link to="/shop" className="button-primary">Continue shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container page-shell checkout-page">
      <div className="page-header">
        <p className="eyebrow">Checkout</p>
        <h1>Complete your order</h1>
      </div>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <div className="form-block">
            <h3>Customer information</h3>
            <div className="form-grid">
              <input type="email" name="email" placeholder="Email" value={customer.email} onChange={handleInput(setCustomer)} />
              <input type="text" name="firstName" placeholder="First name" value={customer.firstName} onChange={handleInput(setCustomer)} />
              <input type="text" name="lastName" placeholder="Last name" value={customer.lastName} onChange={handleInput(setCustomer)} />
              <input type="tel" name="phone" placeholder="Phone" value={customer.phone} onChange={handleInput(setCustomer)} />
            </div>
            {errors.email && <span className="field-error">{errors.email}</span>}
            {errors.firstName && <span className="field-error">{errors.firstName}</span>}
            {errors.lastName && <span className="field-error">{errors.lastName}</span>}
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>

          <div className="form-block">
            <h3>Billing address</h3>
            <div className="form-grid">
              <input type="text" name="country" placeholder="Country" value={customer.country} onChange={handleInput(setCustomer)} className="full" />
              <input type="text" name="address" placeholder="Address" value={customer.address} onChange={handleInput(setCustomer)} className="full" />
              <input type="text" name="apartment" placeholder="Apartment/Suite" value={customer.apartment} onChange={handleInput(setCustomer)} className="full" />
              <input type="text" name="city" placeholder="City" value={customer.city} onChange={handleInput(setCustomer)} />
              <input type="text" name="state" placeholder="State/Province" value={customer.state} onChange={handleInput(setCustomer)} />
              <input type="text" name="postalCode" placeholder="ZIP / Postal Code" value={customer.postalCode} onChange={handleInput(setCustomer)} />
            </div>
            {errors.country && <span className="field-error">{errors.country}</span>}
            {errors.address && <span className="field-error">{errors.address}</span>}
            {errors.city && <span className="field-error">{errors.city}</span>}
            {errors.state && <span className="field-error">{errors.state}</span>}
            {errors.postalCode && <span className="field-error">{errors.postalCode}</span>}
          </div>

          <div className="form-block">
            <div className="shipping-toggle-row">
              <h3>Shipping address</h3>
              <label className="checkbox-row">
                <input type="checkbox" checked={sameAsBilling} onChange={() => setSameAsBilling((current) => !current)} />
                Same as billing address
              </label>
            </div>
            {!sameAsBilling && (
              <div className="form-grid">
                <input type="text" name="country" placeholder="Country" value={shippingAddress.country} onChange={handleInput(setShippingAddress)} className="full" />
                <input type="text" name="address" placeholder="Address" value={shippingAddress.address} onChange={handleInput(setShippingAddress)} className="full" />
                <input type="text" name="apartment" placeholder="Apartment/Suite" value={shippingAddress.apartment} onChange={handleInput(setShippingAddress)} className="full" />
                <input type="text" name="city" placeholder="City" value={shippingAddress.city} onChange={handleInput(setShippingAddress)} />
                <input type="text" name="state" placeholder="State/Province" value={shippingAddress.state} onChange={handleInput(setShippingAddress)} />
                <input type="text" name="postalCode" placeholder="ZIP / Postal Code" value={shippingAddress.postalCode} onChange={handleInput(setShippingAddress)} />
              </div>
            )}
          </div>

          <div className="form-block">
            <h3>Shipping method</h3>
            <div className="shipping-methods">
              {shippingMethods.map((method) => (
                <label key={method.id} className={`shipping-method ${shippingMethodId === method.id ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="shippingMethod"
                    checked={shippingMethodId === method.id}
                    onChange={() => setShippingMethodId(method.id)}
                  />
                  <span>
                    <strong>{method.label}</strong>
                    <small>{method.description}</small>
                  </span>
                  <em>{formatCurrency(method.price, selectedCurrency)}</em>
                </label>
              ))}
            </div>
          </div>

          <div className="form-block">
            <h3>Payment</h3>
            <div className="payment-options">
              {Object.entries(paymentMethodMeta).map(([key, meta]) => (
                <label key={key} className={`payment-option ${paymentMethod === key ? 'selected' : ''}`}>
                  <input type="radio" name="paymentMethod" checked={paymentMethod === key} onChange={() => setPaymentMethod(key)} />
                  <span>{meta.label}</span>
                </label>
              ))}
            </div>

            {paymentMethod === 'card' && (
              <div className="card-entry">
                <div className="payment-row">
                  {['Visa', 'Mastercard', 'American Express'].map((brand) => (
                    <span key={brand}>{brand}</span>
                  ))}
                </div>
                <div className="secure-badge">Secure payment powered by your configured gateway</div>
                <div className="form-grid">
                  <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" value={cardDetails.cardNumber} onChange={(event) => setCardDetails((current) => ({ ...current, cardNumber: event.target.value }))} className="full" />
                  <input type="text" name="expiry" placeholder="MM / YY" value={cardDetails.expiry} onChange={(event) => setCardDetails((current) => ({ ...current, expiry: event.target.value }))} />
                  <input type="text" name="cvc" placeholder="CVC" value={cardDetails.cvc} onChange={(event) => setCardDetails((current) => ({ ...current, cvc: event.target.value }))} />
                  <input type="text" name="cardholderName" placeholder="Name on Card" value={cardDetails.cardholderName} onChange={(event) => setCardDetails((current) => ({ ...current, cardholderName: event.target.value }))} className="full" />
                </div>
                {errors.cardNumber && <span className="field-error">{errors.cardNumber}</span>}
                {errors.expiry && <span className="field-error">{errors.expiry}</span>}
                {errors.cvc && <span className="field-error">{errors.cvc}</span>}
                {errors.cardholderName && <span className="field-error">{errors.cardholderName}</span>}
              </div>
            )}

            {paymentMethod !== 'card' && (
              <div className="wallet-notice">
                {gatewayStatus.configured
                  ? `${paymentMethodMeta[paymentMethod].label} is enabled for this storefront.`
                  : 'Gateway-ready wallet flow is configured for production; add your live gateway credentials to activate it.'}
              </div>
            )}
          </div>

          {orderStatus.type === 'failure' && <div className="error-banner">{orderStatus.message}</div>}
          {!gatewayStatus.configured && (
            <div className="gateway-banner">
              Payment gateway is not active yet. Add VITE_PAYMENT_PROVIDER and VITE_PAYMENT_PUBLISHABLE_KEY to enable production payments.
            </div>
          )}

          <button type="submit" className="button-primary button-block" disabled={isSubmitting}>
            {isSubmitting ? 'Processing Payment...' : 'Pay Now'}
          </button>
        </form>

        <aside className="summary-box">
          <h3>Order summary</h3>
          {cartItems.map((item) => (
            <div key={`${item.productId}-${getCartItemIdentifier(item)}`} className="summary-line">
              <div className="summary-line__details">
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <span>Qty {item.quantity}</span>
                </div>
              </div>
              <span>{formatCurrency(Number(item.price) * Number(item.quantity), selectedCurrency)}</span>
            </div>
          ))}
          <div className="summary-row"><span>Subtotal</span><strong>{formatCurrency(totals.rawSubtotal, selectedCurrency)}</strong></div>
          <div className="summary-row"><span>Shipping</span><strong>{formatCurrency(totals.rawShipping, selectedCurrency)}</strong></div>
          <div className="summary-row"><span>Tax</span><strong>{formatCurrency(totals.rawTax, selectedCurrency)}</strong></div>
          <div className="summary-row"><span>Discount</span><strong>- {formatCurrency(totals.rawDiscount, selectedCurrency)}</strong></div>
          <div className="summary-row total"><span>Total</span><strong>{formatCurrency(totals.rawTotal, selectedCurrency)}</strong></div>
          <Link to="/cart" className="button-secondary button-block">Return to cart</Link>
        </aside>
      </div>
    </div>
  )
}

export default CheckoutPage
