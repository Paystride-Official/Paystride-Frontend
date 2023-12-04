/* eslint-disable no-console */

export const clearStorage = (): void => {
  localStorage.clear();
};

export const getItemFromStorage = (key: string): any => {
  if (localStorage) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (err) {
      console.error(`Error getting item ${key} from localStorage`, err);
    }
  }

  return null;
};

export const storeItem = (key: string, item: any): void => {
  if (localStorage) {
    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (err) {
      console.error(`Error storing item ${key} to localStorage`, err);
    }
  }
};

export const removeItemFromStorage = (key: string): void => {
  if (localStorage) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error(`Error removing item ${key} from localStorage`, err);
    }
  }
};
