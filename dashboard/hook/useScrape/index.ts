import {api} from "@/config/api";

const postScrape = async (url: string) => {
	const response = await api.post(`shopify/scrape`, {url});

	return response;
};

export {
	postScrape,
}
