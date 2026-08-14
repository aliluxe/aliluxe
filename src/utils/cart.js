export const supportedCurrencies = [
  { code: 'USD', label: 'USD', symbol: '$', rate: 1 },
  { code: 'AED', label: 'AED', symbol: 'د.إ', rate: 3.67 },
  { code: 'EUR', label: 'EUR', symbol: '€', rate: 0.92 },
  { code: 'GBP', label: 'GBP', symbol: '£', rate: 0.79 },
  { code: 'SAR', label: 'SAR', symbol: '﷼', rate: 3.75 },
  { code: 'CAD', label: 'CAD', symbol: 'C$', rate: 1.36 },
  { code: 'AUD', label: 'AUD', symbol: 'A$', rate: 1.52 },
  { code: 'PKR', label: 'PKR', symbol: '₨', rate: 277.5 },
  { code: 'INR', label: 'INR', symbol: '₹', rate: 83.2 },
]

export const shippingMethods = [
  { id: 'standard', label: 'Standard Shipping', description: 'Delivered in 5–7 business days', price: 12 },
  { id: 'express', label: 'Express Shipping', description: 'Delivered in 2–3 business days', price: 28 },
  { id: 'priority', label: 'Priority Shipping', description: 'Next-day dispatch', price: 42 },
]

export const paymentMethodMeta = {
  card: { label: 'Card', brands: ['Visa', 'Mastercard', 'American Express'] },
  google_pay: { label: 'Google Pay', brands: ['Google Pay'] },
  apple_pay: { label: 'Apple Pay', brands: ['Apple Pay'] },
}

export function findCurrency(code = 'USD') {
  return supportedCurrencies.find((currency) => currency.code === code) ?? supportedCurrencies[0]
}

export function convertCurrency(amount, fromCurrency = 'USD', toCurrency = 'USD') {
  if (fromCurrency === toCurrency) return Number(amount)

  const fromRate = findCurrency(fromCurrency).rate
  const toRate = findCurrency(toCurrency).rate

  return (Number(amount) / fromRate) * toRate
}

export function formatCurrency(amount, currency = 'USD') {
  const numericAmount = convertCurrency(Number(amount) || 0, 'USD', currency)
  const resolvedCurrency = findCurrency(currency)

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: resolvedCurrency.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericAmount)
}

export function getCartItemIdentifier(item) {
  const variant = item.variant || 'default'
  const optionString = typeof item.options === 'string' ? item.options : JSON.stringify(item.options || {})
  return `${item.productId}-${variant}-${optionString}`
}

export function addCartItem(cartItems, product, quantity = 1, variant = {}, options = {}) {
  const nextQuantity = Number(quantity) > 0 ? Number(quantity) : 1
  const itemToAdd = {
    productId: product.id,
    id: product.id,
    name: product.name,
    slug: product.slug,
    image: product.image,
    url: product.slug ? `/product/${product.slug}` : '/',
    price: Number(product.price || 0),
    quantity: nextQuantity,
    variant: variant.name || variant.label || 'Default',
    options: options && Object.keys(options).length ? options : { size: 'One size', color: 'Default' },
  }

  const existingItemIndex = cartItems.findIndex((entry) => getCartItemIdentifier(entry) === getCartItemIdentifier(itemToAdd))

  if (existingItemIndex >= 0) {
    const updatedList = [...cartItems]
    updatedList[existingItemIndex] = {
      ...updatedList[existingItemIndex],
      quantity: Number(updatedList[existingItemIndex].quantity || 0) + nextQuantity,
    }
    return updatedList
  }

  return [...cartItems, itemToAdd]
}

export function updateCartItemQuantity(cartItems, itemKey, nextQuantity) {
  const safeQuantity = Math.max(1, Number(nextQuantity) || 1)
  return cartItems.map((item) => (getCartItemIdentifier(item) === itemKey ? { ...item, quantity: safeQuantity } : item))
}

export function removeCartItem(cartItems, itemKey) {
  return cartItems.filter((item) => getCartItemIdentifier(item) !== itemKey)
}

export function calculateCartTotals(cartItems, currency = 'USD', shippingMethodId = 'standard', discountAmount = 0) {
  const subtotal = cartItems.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0), 0)
  const shippingMethod = shippingMethods.find((method) => method.id === shippingMethodId) || shippingMethods[0]
  const shipping = subtotal > 0 ? shippingMethod.price : 0
  const tax = subtotal * 0.08
  const discount = subtotal > 150 ? 25 : discountAmount
  const total = Math.max(subtotal + shipping + tax - discount, 0)

  return {
    subtotal: convertCurrency(subtotal, 'USD', currency),
    shipping: convertCurrency(shipping, 'USD', currency),
    tax: convertCurrency(tax, 'USD', currency),
    discount: convertCurrency(discount, 'USD', currency),
    total: convertCurrency(total, 'USD', currency),
    rawSubtotal: subtotal,
    rawShipping: shipping,
    rawTax: tax,
    rawDiscount: discount,
    rawTotal: total,
    shippingMethod,
  }
}
