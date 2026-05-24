(function () {
  try {
    var t = localStorage.getItem('qh-theme') || 'library-slate';
    var m = localStorage.getItem('qh-mode') || 'system';
    var r = m === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : m;
    document.documentElement.dataset.theme = t;
    document.documentElement.dataset.mode = r;
  } catch (e) {}
})();
