const CookieService = {

  setCookie(name, value, days) {
    let expires = '';

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }

    document.cookie = name + '=' + (value || '') + expires + ';';
  },
  
  deleteCookie(name) {
    let expires = '';
    const date = new Date();
    date.setTime(0);
    expires = '; expires=' + date.toUTCString();

    document.cookie = name + '=' + ('') + expires + ';';
  },

  getCookie(name) {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
      if (cookie.indexOf(name + '=') > -1) {
        return cookie.split('=')[1];
      }
    }

    return null;
  }
}