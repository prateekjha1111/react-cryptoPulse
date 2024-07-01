import React from "react";
import "./CryptoCard.css";

const CryptoCard = ({ data }) => {
  return (
    <div className="crypto-card">
      <table>
        <tbody>
          <tr>
            <td className="label">Name:</td>
            <td className="value">{data.name}</td>
          </tr>
          <tr>
            <td className="label">Symbol:</td>
            <td className="value">{data.symbol.toUpperCase()}</td>
          </tr>
          <tr>
            <td className="label">Current Price:</td>
            <td className="value">${data.current_price}</td>
          </tr>
          <tr>
            <td className="label">Market Cap:</td>
            <td className="value">${data.market_cap.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="label">24h Volume:</td>
            <td className="value">${data.total_volume.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="label">24h Price Change:</td>
            <td className="value">{data.price_change_percentage_24h}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CryptoCard;
