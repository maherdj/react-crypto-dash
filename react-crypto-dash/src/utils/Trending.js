import { React, useState, useEffect } from "react";

function Trending() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const baseUrl = "https://api.coingecko.com/api/v3";
    const listEndpoint = "/search/trending";
    //   const params = `?limit=${limit}`;
    const apiUrl = `${baseUrl}${listEndpoint}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTrendingCoins(data.coins);
        console.log(data.coins[0].item);
      });
  }, []);

  return (
    <>
      {trendingCoins?.map((coin, index) => {
        return (
          <li key={index} style={{ listStyle: "none" }}>
            <img src={coin.item.thumb} />
            {coin.item.id + " "}
            {coin.item.price_btc} BTC
          </li>
        );
      })}
    </>
  );
}

export default Trending;
