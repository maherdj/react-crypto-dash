import { React, useState, useEffect } from "react";

import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableFooter,
  TablePagination,
  Typography,
} from "@mui/material";

function CoinTable() {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    const baseUrl = "https://api.coingecko.com/api/v3";
    const listEndpoint =
      "/coins/markets?vs_currency=usd&price_change_percentage=1h%2C24h%2C7d";
    // const params = `?limit=${limit}`;
    const apiUrl = `${baseUrl}${listEndpoint}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setAllCoins(data);
        console.log(data[0]);
      });
  }, []);

  return (
    <Table>
      <TableHead>
        <TableCell className="rank-header">
          <Typography sx={{ color: "white" }}>Rank</Typography>
        </TableCell>
        <TableCell className="coin-header" sx={{ textAlign: "left" }}>
          <Typography sx={{ color: "white" }}>Coin</Typography>
        </TableCell>

        <TableCell className="price-header" sx={{ textAlign: "left" }}>
          <Typography sx={{ color: "white", width: "100px" }}>Price</Typography>
        </TableCell>
        <TableCell className="1h-change-header" sx={{ textAlign: "left" }}>
          <Typography sx={{ color: "white", width: "100px" }}>1hr %</Typography>
        </TableCell>
        <TableCell className="24h-change-header" sx={{ textAlign: "left" }}>
          <Typography sx={{ color: "white", width: "100px" }}>
            24hr %
          </Typography>
        </TableCell>
        <TableCell className="7d-change-header" sx={{ textAlign: "left" }}>
          <Typography sx={{ color: "white", width: "100px" }}>7d %</Typography>
        </TableCell>
        <TableCell className="market-cap-header" sx={{ textAlign: "left" }}>
          <Typography sx={{ color: "white", width: "100px" }}>
            Market Cap
          </Typography>
        </TableCell>
      </TableHead>

      <TableBody>
        {allCoins?.map((coin, index) => {
          return (
            <TableRow key={index} className="coin-image">
              <TableCell sx={{ width: "25px", color: "white" }}>
                <Typography>{coin.market_cap_rank}</Typography>
              </TableCell>
              <TableCell
                className="coin-name"
                sx={{ width: "150px", textAlign: "left" }}
              >
                <Typography sx={{ color: "white" }}>
                  <img src={coin.image} style={{ width: 20, height: 20 }} />
                  {" " + " " + coin.name}
                </Typography>
              </TableCell>
              <TableCell className="current-price" sx={{ width: "50px" }}>
                <Typography sx={{ color: "white" }}>
                  {"$" + coin.current_price}
                </Typography>
              </TableCell>
              <TableCell className="1h-change" sx={{ width: "50px" }}>
                <Typography sx={{ color: "white" }}>
                  {coin.price_change_percentage_1h_in_currency + "%"}
                </Typography>
              </TableCell>
              <TableCell className="24h-change" sx={{ width: "50px" }}>
                <Typography sx={{ color: "white" }}>
                  {coin.price_change_percentage_24h_in_currency + "%"}
                </Typography>
              </TableCell>
              <TableCell className="7d-change" sx={{ width: "50px" }}>
                <Typography sx={{ color: "white" }}>
                  {coin.price_change_percentage_7d_in_currency + "%"}
                </Typography>
              </TableCell>
              <TableCell className="market-cap" sx={{ width: "50px" }}>
                <Typography sx={{ color: "white" }}>
                  {"$" + coin.market_cap}
                </Typography>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TablePagination
          rowsPerPageOptions={[10, 50, { value: -1, label: "All" }]}
        />
      </TableFooter>
    </Table>
  );
}

export default CoinTable;
