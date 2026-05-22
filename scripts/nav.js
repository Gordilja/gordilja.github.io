// ============================================================
// nav.js — runs on every page.
// Currently: live status-bar clock (Belgrade timezone, CET label).
// Tabs are plain <a href> links so no nav-toggle logic is needed.
// ============================================================

function tickClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  el.textContent = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Belgrade',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());
}

tickClock();
setInterval(tickClock, 30000);
