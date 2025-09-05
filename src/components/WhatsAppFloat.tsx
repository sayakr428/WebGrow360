import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const message = "Hi! I'm interested in learning more about your digital marketing services."

    try {
      const url = new URL(window.location.href)
      const utm = {
        source: url.searchParams.get('utm_source'),
        medium: url.searchParams.get('utm_medium'),
        campaign: url.searchParams.get('utm_campaign'),
      }

      // --- Use sendBeacon to avoid losing the request on navigation ---
      const payload = JSON.stringify({
        message,
        pageUrl: window.location.href,
        utm,
      })
      const blob = new Blob([payload], { type: 'application/json' })
      // Vite proxy will forward /api to http://localhost:4000
      navigator.sendBeacon('/api/leads', blob)
    } catch {
      // ignore
    } finally {
      const wa = `https://wa.me/919830022167?text=${encodeURIComponent(message)}`
      window.open(wa, '_blank')
    }
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}

export default WhatsAppFloat
