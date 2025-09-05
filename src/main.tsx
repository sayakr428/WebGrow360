import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function setupWhatsAppInterceptor() {
  function extractWaMessage(href: string) {
    try {
      const u = new URL(href, location.origin);
      const text = u.searchParams.get('text');
      return text ? decodeURIComponent(text) : "Hi! I'm interested in your services.";
    } catch {
      return "Hi! I'm interested in your services.";
    }
  }

  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.('a') as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute('href') || '';
      const isWhatsApp =
        href.includes('wa.me/') || href.includes('api.whatsapp.com/send');

      if (!isWhatsApp) return;

      try {
        const url = new URL(window.location.href);
        const utm = {
          source: url.searchParams.get('utm_source'),
          medium: url.searchParams.get('utm_medium'),
          campaign: url.searchParams.get('utm_campaign'),
        };

        const payload = JSON.stringify({
          message: extractWaMessage(href),
          pageUrl: window.location.href,
          utm,
        });
        const blob = new Blob([payload], { type: 'application/json' });

        navigator.sendBeacon('/api/leads', blob);
      } catch {
        // ignore
      }
    },
    { capture: true }
  );
}

// 🔥 setup interceptor at startup
setupWhatsAppInterceptor();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
