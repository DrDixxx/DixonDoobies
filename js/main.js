function initNav() {
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => nav.classList.toggle('hidden'));
  }
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('#nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (href === 'index.html' && path === '')) {
      a.classList.add('font-semibold', 'text-green-700');
      a.setAttribute('aria-current', 'page');
    }
  });
}

function initAgeGate() {
  const modal = document.getElementById('age-modal');
  if (!modal) return;
  const key = 'dd_age_ok';
  const tsKey = 'dd_age_ts';
  const thirtyDays = 1000 * 60 * 60 * 24 * 30;
  const ok = localStorage.getItem(key);
  const ts = parseInt(localStorage.getItem(tsKey) || 0, 10);
  if (ok === 'true' && Date.now() - ts < thirtyDays) return;
  modal.classList.remove('hidden');
  const yesBtn = modal.querySelector('#age-yes');
  const noBtn = modal.querySelector('#age-no');
  const msg = modal.querySelector('#age-msg');
  const focusable = [yesBtn, noBtn];
  function close() {
    modal.classList.add('hidden');
    localStorage.setItem(key, 'true');
    localStorage.setItem(tsKey, Date.now().toString());
  }
  yesBtn.addEventListener('click', close);
  noBtn.addEventListener('click', () => {
    msg.classList.remove('hidden');
    localStorage.setItem(key, 'false');
  });
  modal.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const current = focusable.indexOf(document.activeElement);
      const next = e.shiftKey ? (current <= 0 ? focusable.length - 1 : current - 1) : (current === focusable.length - 1 ? 0 : current + 1);
      focusable[next].focus();
    }
  });
  yesBtn.focus();
}

function initFAQ() {
  document.querySelectorAll('.faq-item button').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      const panel = btn.nextElementSibling;
      panel.classList.toggle('hidden');
    });
  });
}

function initComingSoon() {
  const toast = document.getElementById('toast');
  document.querySelectorAll('.coming-soon').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      if (!toast) {
        alert('Available at launch.');
        return;
      }
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 2000);
    });
  });
}

function initForms() {
  document.querySelectorAll('form[data-message]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = document.getElementById(form.dataset.message);
      if (msg) {
        msg.classList.remove('hidden');
        form.reset();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAgeGate();
  initFAQ();
  initComingSoon();
  initForms();
});
