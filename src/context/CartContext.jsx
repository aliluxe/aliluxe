import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { addCartItem, calculateCartTotals, removeCartItem, updateCartItemQuantity } from '../utils/cart'

const CART_STORAGE_KEY = 'aliluxe-cart-v1'
const CartContext = createContext(null)

const readStoredCart = () => {
  if (typeof window === 'undefined') return []

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY)
    return storedCart ? JSON.parse(storedCart) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(readStoredCart)
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [shippingMethodId, setShippingMethodId] = useState('standard')

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, quantity = 1, variant = {}, options = {}) => {
    if (!product || !product.id) return

    setCartItems((currentItems) => addCartItem(currentItems, product, quantity, variant, options))
  }

  const updateQuantity = (itemKey, nextQuantity) => {
    if (!itemKey) return
    setCartItems((currentItems) => updateCartItemQuantity(currentItems, itemKey, nextQuantity))
  }

  const removeItem = (itemKey) => {
    if (!itemKey) return
    setCartItems((currentItems) => removeCartItem(currentItems, itemKey))
  }

  const clearCart = () => setCartItems([])

  const itemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + Number(item.quantity || 0), 0),
    [cartItems],
  )

  const totals = useMemo(
    () => calculateCartTotals(cartItems, selectedCurrency, shippingMethodId),
    [cartItems, selectedCurrency, shippingMethodId],
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemCount,
        selectedCurrency,
        setSelectedCurrency,
        shippingMethodId,
        setShippingMethodId,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        totals,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
