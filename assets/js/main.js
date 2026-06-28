/* עידו מסיבות בריכה — interactions */
(function () {
  'use strict';

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav
  var toggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  if (toggle && mobileNav) {
    var setNav = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'סגירת תפריט' : 'פתיחת תפריט');
      mobileNav.hidden = !open;
    };
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
    mobileNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setNav(false);
    });
  }

  // Lightbox gallery
  var items = Array.prototype.slice.call(document.querySelectorAll('.g-item'));
  var lb = document.getElementById('lightbox');
  if (items.length && lb) {
    var lbImg = document.getElementById('lbImg');
    var current = 0;
    var lastFocus = null;

    var imgFor = function (i) {
      return items[i].getAttribute('data-full') || items[i].querySelector('img').src;
    };
    var altFor = function (i) {
      var im = items[i].querySelector('img');
      return im ? im.alt : '';
    };
    var show = function (i) {
      current = (i + items.length) % items.length;
      lbImg.src = imgFor(current);
      lbImg.alt = altFor(current);
    };
    var open = function (i) {
      lastFocus = document.activeElement;
      show(i);
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
      document.getElementById('lbClose').focus();
    };
    var close = function () {
      lb.hidden = true;
      lbImg.src = '';
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    };

    items.forEach(function (it, i) {
      it.addEventListener('click', function () { open(i); });
    });
    document.getElementById('lbClose').addEventListener('click', close);
    document.getElementById('lbNext').addEventListener('click', function () { show(current + 1); });
    document.getElementById('lbPrev').addEventListener('click', function () { show(current - 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(current + 1); // RTL: left = next
      else if (e.key === 'ArrowRight') show(current - 1);
    });
  }
})();
