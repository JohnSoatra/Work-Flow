function setCookie(name, value, minutes = 0.1) {
  const date = new Date();
  // date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  date.setTime(date.getTime() + (minutes * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const nameIn = name + "=";
  const slice = document.cookie.split(';');
  for(let part of slice) {
    while (part.charAt(0) === ' ') {
      part = part.substring(1);
    }
    if (part.indexOf(nameIn) === 0) {
      return part.substring(nameIn.length, part.length);
    }
  }
  return "";
}

function checkCookie(name) {
  return getCookie(name) !== "";
}

export { setCookie, getCookie, checkCookie };