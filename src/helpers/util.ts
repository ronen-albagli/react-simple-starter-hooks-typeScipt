export const saveToLocalStorage = (key: string, data: any) => {
  return localStorage.setItem(key, data);
};

export const fetchFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
};
