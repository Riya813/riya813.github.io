// Krazic shared scripts. Edit this file once, every game picks it up.
(function () {
  // Google Analytics 4
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-SSG3487R8L';
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', 'G-SSG3487R8L');

  // Add any future shared scripts below (ads, error tracking, etc.)
})();