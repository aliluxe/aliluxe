import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import AccountPage from './pages/AccountPage'
import WishlistPage from './pages/WishlistPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CollectionPage from './pages/CollectionPage'
import CollectionDetailPage from './pages/CollectionDetailPage'
import CategoryPage from './pages/CategoryPage'
import ShippingPage from './pages/ShippingPage'
import ReturnsPage from './pages/ReturnsPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import FaqPage from './pages/FaqPage'
import { products, categories, collections } from './data/products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="collections" element={<CollectionPage />} />
          <Route path="beauty" element={<CategoryPage category="beauty" />} />
          <Route path="fashion" element={<CategoryPage category="fashion" />} />
          <Route path="jewelry" element={<CategoryPage category="jewelry" />} />
          <Route path="watches" element={<CategoryPage category="watches" />} />
          <Route path="perfumes" element={<CategoryPage category="perfumes" />} />
          <Route path="accessories" element={<CategoryPage category="accessories" />} />
          <Route path="collection/:slug" element={<CollectionDetailPage />} />
          <Route path="product/:slug" element={<ProductPage products={products} categories={categories} collections={collections} />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="shipping" element={<ShippingPage />} />
          <Route path="returns" element={<ReturnsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
