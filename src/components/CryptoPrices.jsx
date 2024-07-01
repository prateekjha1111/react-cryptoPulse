import React, { useState } from "react";
import axios from "axios";
import CryptoCard from "./CryptoCard";

const CryptoPrices = () => {
  const [cryptoName, setCryptoName] = useState("");
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPrice = async () => {
    setLoading(true);
    setError(null);
    setCryptoData(null);
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: {
            vs_currency: "usd",
            ids: cryptoName.toLowerCase(),
          },
        }
      );
      if (response.data.length > 0) {
        setCryptoData(response.data[0]);
      } else {
        setError("Cryptocurrency not found");
      }
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="input-bar">
        <input
          type="text"
          value={cryptoName}
          onChange={(e) => setCryptoName(e.target.value)}
          placeholder="Enter cryptocurrency name"
        />
        <button onClick={fetchPrice}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cryptoData && <CryptoCard data={cryptoData} />}
    </div>
  );
};

export default CryptoPrices;
