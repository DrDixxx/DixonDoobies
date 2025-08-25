(() => {
  function trapFocus(modal) {
    const focusable = modal.querySelectorAll('button, [href], input');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    modal.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  function initAgeGate() {
    const modal = document.getElementById('age-modal');
    if (!modal) return;
    const ok = localStorage.getItem('dd_age_ok');
    const exp = parseInt(localStorage.getItem('dd_age_expires') || '0', 10);
    const now = Date.now();
    if (ok !== 'true' || now > exp) showModal();

    function showModal() {
      modal.classList.remove('hidden');
      const yes = modal.querySelector('[data-age-yes]');
      const no = modal.querySelector('[data-age-no]');
      const msg = modal.querySelector('[data-age-message]');
      trapFocus(modal);
      yes.focus();
      yes.addEventListener('click', () => {
        const expire = now + 30 * 24 * 60 * 60 * 1000;
        localStorage.setItem('dd_age_ok', 'true');
        localStorage.setItem('dd_age_expires', expire);
        modal.classList.add('hidden');
      });
      no.addEventListener('click', () => {
        localStorage.setItem('dd_age_ok', 'false');
        msg.classList.remove('hidden');
      });
    }
  }

  function initNav() {
    const btn = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  function setActiveNav() {
    const path = location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('nav a').forEach(link => {
      if (link.getAttribute('href') === path) {
        link.classList.add('underline', 'text-green-700');
      }
    });
  }

  function initFAQ() {
    document.querySelectorAll('[data-accordion]').forEach(item => {
      const btn = item.querySelector('button');
      const panel = item.querySelector('[data-accordion-panel]');
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        panel.classList.toggle('hidden', expanded);
      });
    });
  }

  function initComingSoon() {
    document.querySelectorAll('[data-coming-soon]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        showToast('Available at launch.');
      });
    });
  }

  function showToast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }

  function initForms() {
    const news = document.getElementById('newsletter-form');
    if (news) {
      news.addEventListener('submit', e => {
        e.preventDefault();
        news.querySelector('[data-success]').classList.remove('hidden');
      });
    }
    const contact = document.getElementById('contact-form');
    if (contact) {
      contact.addEventListener('submit', e => {
        e.preventDefault();
        contact.querySelector('[data-success]').classList.remove('hidden');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initAgeGate();
    initNav();
    setActiveNav();
    initFAQ();
    initComingSoon();
    initForms();
  });
})();
