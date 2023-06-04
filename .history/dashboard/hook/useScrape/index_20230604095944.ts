import { useQuery } from '@tanstack/react-query';
import {api} from "@/config/api";

const fetchScrape = async () => {
  const response = await api.get(`/activities/get_activities`);

  return response;
};

export {
  fetchScrape,
}

