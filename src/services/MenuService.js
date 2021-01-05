import MenuMock from "./../mocks/menu-info";

const MENU_ITEMS = MenuMock;

export const listMenuItems = () => {
  return createPromise(MENU_ITEMS);
};

export const createNewItem = (newItem) => {
  MENU_ITEMS.push(newItem);
  return createPromise(MENU_ITEMS);
};

function createPromise(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), 1000));
}
