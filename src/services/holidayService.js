import axios from "axios";

const BASE_URL = `https://api.api-ninjas.com/v1/publicholidays`;

export const fetchPublicHolidays = async (country, apiKey) => {
  const response = await axios.get(BASE_URL, {
    params: {
      country: country,
    },
    headers: {
      "X-Api-Key": apiKey,
    },
  });

  return response.data;
};
