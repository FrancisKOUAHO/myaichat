import {api} from "@/config/api";

const fetchScrape = async (userId: any) => {
  const response = await api.get(`products/user/${userId}/products`);

  return response;
};

export {
  fetchScrape,
}

