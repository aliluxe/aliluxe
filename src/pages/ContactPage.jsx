function ContactPage() {
  return (
    <div className="container page-shell contact-page">
      <div className="page-header">
        <p className="eyebrow">Contact</p>
        <h1>We’re here to help.</h1>
      </div>
      <div className="contact-layout">
        <form className="checkout-form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <textarea placeholder="How can we assist?" rows="5" />
          <button type="submit" className="button-primary">Send message</button>
        </form>
        <div className="summary-box">
          <h3>Customer care</h3>
          <p>Email: hello@aliluxe.com</p>
          <p>Phone: +1 (800) 555-0188</p>
          <p>Hours: Monday to Friday, 9am–6pm</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
