let menu_items = [];
export const listMenuItems = () => {
  return fetch("https://gorest.co.in/public-api/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const finalData = data.data.map((element) => {
        const item = {
          title: element.name,
          description: element.description,
        };
        return item;
      });
      menu_items = finalData;
      return finalData;
    });
};

export const createNewItem = (newItem) => {
  menu_items.push(newItem);
  return createPromise(menu_items);
};

function createPromise(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), 1000));
}
