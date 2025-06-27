import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Avatar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

const API_KEY =
  "bb68043c14088a49353a041447e309cc39a16111bec30439311931d1692fbe8b";
const API_URL = "https://rest.coincap.io/v3/assets";

const CryptoTable = () => {
  const [coins, setCoins] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (currentOffset, append = false) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${API_URL}?limit=50&offset=${currentOffset}&apiKey=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setCoins((prev) => (append ? [...prev, ...data.data] : data.data));
      console.log(coins);
    } catch (err) {
      console.error("Failed to fetch data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins(0, false);
  }, []);

  const loadMore = () => {
    const newOffset = offset + 50;
    setOffset(newOffset);
    fetchCoins(newOffset, true); // Append next 100 coins
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mb: 4,
        maxWidth:"75vw"
       }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Market Cap</TableCell>
              <TableCell>VWAP (24Hr) </TableCell>

              <TableCell>Supply</TableCell>
              <TableCell>volume USD (24Hr)</TableCell>
              <TableCell>Change (24Hr)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map((coin) => (
              <TableRow key={coin.id}>
                <TableCell>{coin.rank}</TableCell>
                <TableCell>
                  {coin.name}
                  <Avatar
                    src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                    alt={coin.symbol}
                    sx={{ width: 24, height: 24 }}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  {coin.symbol}
                </TableCell>
                <TableCell>${parseFloat(coin.priceUsd).toFixed(2)}</TableCell>
                <TableCell>
                  $
                  {(() => {
                    const value = Number(coin.marketCapUsd);
                    if (value >= 1_000_000_000_000) {
                      return `${(value / 1_000_000_000_000).toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}t`;
                    } else if (value >= 1_000_000_000) {
                      return `${(value / 1_000_000_000).toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}b`;
                    } else if (value >= 1_000_000) {
                      return `${(value / 1_000_000).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}m`;
                    } else if (value >= 1_000) {
                      return `${(value / 1_000).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}k`;
                    } else {
                      return value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      });
                    }
                  })()}
                </TableCell>
                <TableCell>{parseFloat(coin.vwap24Hr).toFixed(2)}</TableCell>
                <TableCell>
                  $
                  {(() => {
                    const value = Number(coin.supply);
                    if (value >= 1_000_000_000_000) {
                      return `${(value / 1_000_000_000_000).toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}t`;
                    } else if (value >= 1_000_000_000) {
                      return `${(value / 1_000_000_000).toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}b`;
                    } else if (value >= 1_000_000) {
                      return `${(value / 1_000_000).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}m`;
                    } else if (value >= 1_000) {
                      return `${(value / 1_000).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}k`;
                    } else {
                      return value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      });
                    }
                  })()}
                </TableCell>
                <TableCell>
                  $
                  {(() => {
                    const value = Number(coin.volumeUsd24Hr);
                    if (value >= 1_000_000_000_000) {
                      return `${(value / 1_000_000_000_000).toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}t`;
                    } else if (value >= 1_000_000_000) {
                      return `${(value / 1_000_000_000).toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}b`;
                    } else if (value >= 1_000_000) {
                      return `${(value / 1_000_000).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}m`;
                    } else if (value >= 1_000) {
                      return `${(value / 1_000).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}k`;
                    } else {
                      return value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      });
                    }
                  })()}
                </TableCell>
                <TableCell>{parseFloat(coin.tokens)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ textAlign: "center" }}>
        <Box
          sx={{ "& > :not(style)": { m: 1 } }}
          onClick={loadMore}
          disabled={loading}
        >
          <Fab variant="extended" size="medium" color="primary">
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              <NavigationIcon sx={{ mr: 0 }} />
            )}
          </Fab>
        </Box>
      </div>
    </>
  );
};

export default CryptoTable;
