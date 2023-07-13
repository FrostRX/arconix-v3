import { API_URI } from "./variables";

export const getCategories = async () => {
  const response = await fetch(
    `${API_URI}/api/collections/shopCategories/records`
  );
  const data = await response.json();
  const cat = data.items;
  return cat;
};

export const getProduct = async ({ categoryId, categoryLink }: any) => {
  if (!categoryId && !categoryLink) {
    return { products: [], category: null };
  }
  const catResponse = await fetch(
    `${API_URI}/api/collections/shopCategories/records`
  );
  const catData = await catResponse.json();
  const cat = catData.items.find((item: any) => {
    return item.id === categoryId || item.url === categoryLink;
  });

  const response = await fetch(`${API_URI}/api/collections/shop/records`);
  const data = await response.json();
  const products = data.items.filter((item: any) => {
    return item.category === cat.id;
  });

  return {
    products,
    category: cat,
  };
};
