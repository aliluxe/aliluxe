import { Outlet, NavLink, Link } from 'react-router-dom'

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
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar__inner container">
          <div className="topbar__meta">Worldwide shipping • Complimentary gift wrapping</div>
          <div className="topbar__actions">
            <a href="/shop">Search</a>
            <a href="/account">Account</a>
            <a href="/wishlist">Wishlist</a>
            <a href="/cart">Cart (0)</a>
          </div>
        </div>
      </header>

      <nav className="main-nav container" aria-label="Main navigation">
        <Link to="/" className="brand-mark" aria-label="ALI LUXE home page">
          <img src="/logo.png" alt="ALI LUXE logo" />
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
          <Link to="/cart" className="icon-button cart-pill" aria-label="Cart">Bag (0)</Link>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-mark brand-mark--footer">
              <img src="/logo.png" alt="ALI LUXE logo" />
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
