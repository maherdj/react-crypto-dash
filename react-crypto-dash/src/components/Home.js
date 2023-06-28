import { React, useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Container, Button, Typography } from "@mui/material";
import getCoinList from "../utils/CoinList";
import Trending from "../utils/Trending";
import adaMinPrice from "../utils/MinswapDEXData";

function Home() {
  const [gainers, setGainers] = useState({
    currency1: {
      name: "",
      price: 0.0,
    },
    currency2: {
      name: "",
      price: 0.0,
    },
    currency3: {
      name: "",
      price: 0.0,
    },
  });

  // useEffect(() => {
  //   let topGainers = getGainersLosers();
  // });

  return (
    // <div>
    //   <h1>Home</h1>
    //   <p>Home page body content</p>
    // </div>
    <div>
      <Grid container rowSpacing={2} columnSpacing={4} sx={{}}>
        <Grid xs={6}>
          <Container
            fixed
            sx={{
              backgroundColor: "#62fcaf",
            }}
          >
            Trending
            <Container sx={{ textAlign: "left" }}>
              <Trending />
            </Container>
          </Container>
        </Grid>
        <Grid xs={6}>
          <Container fixed sx={{ backgroundColor: "red" }}>
            Top Losers
          </Container>
        </Grid>
        <Grid xs={12}>
          <Container fixed>Chart</Container>
        </Grid>
        <Grid xs={12}>
          <Container fixed>test</Container>
        </Grid>
      </Grid>

      <Container>
        <Button variant="contained">Contained</Button>
      </Container>
    </div>
  );
}

export default Home;
