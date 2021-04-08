import { dev } from '$app/env';

type EventArgs = { category: string; label: string; value?: number };

export default function trackEvent(
  action: string,
  { category: event_category, label: event_label, value }: EventArgs
) {
  if (!window.gtag) return;

  const payload = {
    event_category,
    event_label,
    value,
  };

  window.gtag('event', action, payload);

  if (dev) {
    console.log('Track:', action, payload);
  }
}
