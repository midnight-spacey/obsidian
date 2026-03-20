/* Apply saved theme, favicon and tab title across pages */
(function(){
  try {
    const theme = localStorage.theme || 'default';
    document.documentElement.setAttribute('data-theme', theme);

    if (localStorage.tabTitle) document.title = localStorage.tabTitle;

    let favicon = document.getElementById('favicon');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.id = 'favicon';
      favicon.rel = 'icon';
      favicon.type = 'image/png';
      favicon.href = '/resources/favicon.png';
      document.head.appendChild(favicon);
    }
    if (localStorage.favicon) favicon.href = localStorage.favicon;
  } catch (e) {
    console.error('themes.js error', e);
  }
})();
