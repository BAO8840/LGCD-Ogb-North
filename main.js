/* Ogbomoso North Local Government - site behaviour
   1 mobile menu, 2 footer year, 3 site search, 4 data tables, 5 forms, 6 ward lists */
(function () {
  'use strict';
  var D = window.SITE_DATA || {};
  var C = D.contact || {};

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* 1. Mobile menu */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* 2. Footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* 3. Site search (matches page titles and keywords from data.js) */
  var form = document.querySelector('[data-search]');
  if (form && D.search) {
    var input = form.querySelector('input');
    var list = form.querySelector('.results');
    var find = function (q) {
      q = q.trim().toLowerCase();
      if (q.length < 2) return [];
      return D.search.filter(function (p) {
        return (p.t + ' ' + p.k).toLowerCase().indexOf(q) !== -1;
      }).slice(0, 6);
    };
    var show = function () {
      var r = find(input.value);
      list.innerHTML = r.map(function (p) {
        return '<li><a href="' + esc(p.u) + '">' + esc(p.t) + '</a></li>';
      }).join('');
      list.hidden = r.length === 0;
    };
    input.addEventListener('input', show);
    input.addEventListener('keydown', function (e) { if (e.key === 'Escape') list.hidden = true; });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var r = find(input.value);
      if (r.length) window.location.href = r[0].u;
    });
    document.addEventListener('click', function (e) { if (!form.contains(e.target)) list.hidden = true; });
  }

  /* 4. Data tables: <div data-table="key" data-cols="Label:field|Label:field" data-empty="message"> */
  document.querySelectorAll('[data-table]').forEach(function (box) {
    var rows = D[box.getAttribute('data-table')] || [];
    if (!rows.length) {
      box.innerHTML = '<p class="empty">' + esc(box.getAttribute('data-empty')) + '</p>';
      return;
    }
    var cols = box.getAttribute('data-cols').split('|').map(function (c) {
      var p = c.split(':');
      return { label: p[0], key: p[1] };
    });
    var html = '<table><thead><tr>' + cols.map(function (c) {
      return '<th scope="col">' + esc(c.label) + '</th>';
    }).join('') + '</tr></thead><tbody>';
    rows.forEach(function (r) {
      html += '<tr>' + cols.map(function (c) {
        var v = r[c.key];
        if (c.key === 'link') return '<td>' + (v ? '<a href="' + esc(v) + '">Download</a>' : '') + '</td>';
        return '<td>' + esc(v) + '</td>';
      }).join('') + '</tr>';
    });
    box.innerHTML = html + '</tbody></table>';
  });

  /* 5. Forms: no server needed. Builds a message and opens WhatsApp or the email app. */
  function message(f) {
    var lines = [f.getAttribute('data-subject')];
    new FormData(f).forEach(function (v, k) { if (String(v).trim()) lines.push(k + ': ' + v); });
    return lines.join('\n');
  }
  document.querySelectorAll('form[data-form]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      window.open('https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(message(f)), '_blank', 'noopener');
    });
    var mail = f.querySelector('[data-send-email]');
    if (mail) {
      mail.addEventListener('click', function () {
        if (!f.reportValidity()) return;
        window.location.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent(f.getAttribute('data-subject')) +
          '&body=' + encodeURIComponent(message(f));
      });
    }
  });

  /* 6. Ward lists (edit wards in data.js) */
  document.querySelectorAll('select[data-wards]').forEach(function (s) {
    (D.wards || []).forEach(function (w) {
      var o = document.createElement('option');
      o.value = o.textContent = w;
      s.appendChild(o);
    });
  });
})();
