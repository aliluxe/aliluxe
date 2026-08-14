import { Outlet, NavLink, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { supportedCurrencies } from '../utils/cart'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/beauty', label: 'Beauty' },
  { to: '/fashion', label: 'Fashion' },
  { to: '/jewelry', label: 'Jewelry' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Layout() {
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`
  const { itemCount, selectedCurrency, setSelectedCurrency } = useCart()

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar__inner container">
          <div className="topbar__meta">Worldwide shipping • Complimentary gift wrapping</div>
          <div className="topbar__actions">
            <a href="/shop">Search</a>
            <a href="/account">Account</a>
            <a href="/wishlist">Wishlist</a>
            <Link to="/cart">Cart ({itemCount})</Link>
          </div>
        </div>
      </header>

      <nav className="main-nav container" aria-label="Main navigation">
        <Link to="/" className="brand-mark" aria-label="ALI LUXE home page">
          <img src={logoSrc} alt="ALI LUXE logo" />
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-tools">
          <button type="button" className="icon-button" aria-label="Search">⌕</button>
          <Link to="/account" className="icon-button" aria-label="Account">◌</Link>
          <Link to="/wishlist" className="icon-button" aria-label="Wishlist">♡</Link>
          <Link to="/cart" className="icon-button cart-pill" aria-label="Cart">Bag ({itemCount})</Link>
          <label className="currency-picker" aria-label="Select currency">
            <select value={selectedCurrency} onChange={(event) => setSelectedCurrency(event.target.value)}>
              {supportedCurrencies.map((currency) => (
                <option key={currency.code} value={currency.code}>{currency.code}</option>
              ))}
            </select>
          </label>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-mark brand-mark--footer">
              <img src={logoSrc} alt="ALI LUXE logo" />
            </div>
            <p className="footer-copy">Luxury beauty, fashion, and statement essentials curated for a modern world.</p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><Link to="/beauty">Beauty</Link></li>
              <li><Link to="/fashion">Fashion</Link></li>
              <li><Link to="/jewelry">Jewelry</Link></li>
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/shop">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h4>Customer Care</h4>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/shipping">Shipping</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4>Newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Email address" aria-label="Email address" />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 ALI LUXE</span>
          <span>Luxury defined differently.</span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
