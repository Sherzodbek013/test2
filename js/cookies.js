document.addEventListener('DOMContentLoaded', function() {
  const COOKIE_NAME = 'cookiesAccepted';
  const COOKIE_EXPIRE_DAYS = 90;
  
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

  const cookieNotice = document.getElementById('cookie-notice');
  const cookieAccept = document.getElementById('cookie-accept');
  if (!getCookie(COOKIE_NAME)) {
    setTimeout(() => {
      cookieNotice.classList.add('show');
    }, 1500);
}
  cookieAccept.addEventListener('click', function() {
    setCookie(COOKIE_NAME, 'true', COOKIE_EXPIRE_DAYS);
    cookieNotice.classList.remove('show');
    setTimeout(() => {
      cookieNotice.style.display = 'none';
    }, 300);
  });
});