const API_KEY = "e149dc3f-7b17-4082-8647-d546b18f5020";
const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com";
const listEndpoint = "/v1/cryptocurrency/listings/latest";
const apiUrl = `${baseUrl}${listEndpoint}`;

const getCoinList = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getCoinList;
