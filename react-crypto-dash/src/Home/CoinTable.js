import { React, useState, useEffect } from "react";

import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableFooter,
  Typography,
  TablePagination,
  IconButton,
  useTheme,
  Box,
} from "@mui/material";

import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import PropTypes from "prop-types";

/********************************************************************************/

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5, color: "white" }}>
      <IconButton
        sx={{ color: "white" }}
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        sx={{ color: "white" }}
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        sx={{ color: "white" }}
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        sx={{ color: "white" }}
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

/********************************************************************************/

function CoinTable() {
  const [allCoins, setAllCoins] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const coins = [];
    const baseUrl = "https://api.coingecko.com/api/v3";
    const listEndpoint = `/coins/markets?vs_currency=usd&price_change_percentage=1h%2C24h%2C7d&page=1&per_page=${rowsPerPage}&precision=2`;
    // const params = `?limit=${limit}`;
    const apiUrl = `${baseUrl}${listEndpoint}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        for (var i in data) {
          coins.push(data[i]);
        }
        setAllCoins(data);
      });
    console.log(coins);
  }, [rowsPerPage]);

  const rowLength = allCoins.length;

  return (
    <Table>
      <TableHead sx={{ backgroundColor: "darkslategrey" }}>
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
          sx={{ color: "white" }}
          rowsPerPageOptions={[
            50,
            100,
            150,
            { label: "ALL", value: -1, color: "white" },
          ]}
          colSpan={8}
          count={rowLength}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableFooter>
    </Table>
  );
}

export default CoinTable;
