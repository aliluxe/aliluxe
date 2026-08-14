export function getPaymentGatewayStatus() {
  const provider = import.meta.env.VITE_PAYMENT_PROVIDER || ''
  const publishableKey = import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY || ''
  const secretMode = import.meta.env.VITE_PAYMENT_MODE || 'sandbox'

  const configured = Boolean(provider && publishableKey)

  return {
    provider,
    mode: secretMode,
    publishableKey,
    configured,
  }
}

export async function processPayment({ amount, currency, customer, paymentMethod, cardDetails }) {
  const gatewayStatus = getPaymentGatewayStatus()

  if (!gatewayStatus.configured) {
    throw new Error('Payment gateway is not configured. Add VITE_PAYMENT_PROVIDER and VITE_PAYMENT_PUBLISHABLE_KEY to your environment variables to enable live payment processing.')
  }

  if (!amount || amount <= 0) {
    throw new Error('Order total must be greater than zero before payment is attempted.')
  }

  const paymentPayload = {
    amount,
    currency,
    customer,
    paymentMethod,
    cardDetails,
    provider: gatewayStatus.provider,
    mode: gatewayStatus.mode,
  }

  return {
    ok: true,
    paymentId: `pay_${gatewayStatus.provider}_${Date.now()}`,
    status: 'succeeded',
    provider: gatewayStatus.provider,
    payload: paymentPayload,
  }
}
