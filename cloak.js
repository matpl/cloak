let css = document.createElement('style');
css.type = 'text/css';
css.appendChild(document.createTextNode("[cloak] { visibility:hidden; }"));
document.head.appendChild(css);
window.addEventListener("load", 
  function removeCloak() {
    css.removeChild(css.firstChild);
  }
);
