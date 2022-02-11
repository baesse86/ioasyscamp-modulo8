const STORAGE_KEY = "@ioasys-books";

export function setToken(token) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(token));
}

export function getToken() {
  const token = localStorage.getItem(STORAGE_KEY);
  return token;
}

export function removeToken() {
  localStorage.removeItem(STORAGE_KEY);
}

export function clearStorage() {
  localStorage.clear();
}
