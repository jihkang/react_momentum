
export function getLocation(userId) {
  try {
    const data = JSON.parse(window.localStorage.getItem(userId));
    return data;
  } catch {
    return {};
  }
}

export function setLocation(userId, data) {
  window.localStorage.setItem(userId, JSON.parse(data));
}