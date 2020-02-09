export const saveToLocalStorage = (key: string, data: any) => {
  return localStorage.setItem(key, data);
};

export const fetchFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
