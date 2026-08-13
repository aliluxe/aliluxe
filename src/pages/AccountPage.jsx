function AccountPage() {
  return (
    <div className="container page-shell">
      <div className="page-header">
        <p className="eyebrow">Account</p>
        <h1>My account</h1>
      </div>
      <div className="account-grid">
        <div className="summary-box">
          <h3>Orders</h3>
          <p>2 recent orders</p>
        </div>
        <div className="summary-box">
          <h3>Addresses</h3>
          <p>Default billing and shipping saved</p>
        </div>
        <div className="summary-box">
          <h3>Details</h3>
          <p>Profile settings and personal information</p>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
