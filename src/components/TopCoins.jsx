import React, { useState, useEffect } from 'react';

const TopCoins = () => {
 const [input, setInput] = useState('');
 const [cryptos, setCryptos] = useState([]);
 const [data, setData] = useState([]);

 useEffect(() => {
    fetch('https://api.coincap.io/v2/assets')
      .then((response) => response.json())
      .then((data) => {
        const cryptoData = Object.values(data.data);  
        setCryptos(cryptoData);
        setData(cryptoData.sort( (a, b) => b.marketCapUsd - a.marketCapUsd ));
      });
 }, []);

 const handleChange = (e) => {
    setInput(e.target.value);
    if (!e.target.value) {
      setData(cryptos);
      return;
    }
    const filtered = cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(e.target.value.toLowerCase()) || crypto.symbol.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filtered);
 };

 return (
    <div className='flex flex-col w-full'>
        <div>
            <input
                type="text" 
                placeholder="Search Coin" 
                className="btn_light_rounded" 
                value={input} 
                onChange={handleChange} 
        />
        
    </div>
    {data.length === 0 ? (
  <h2>No data found</h2>
) : (
  <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-7">
    
    <thead className='text-xs text-gray-700 uppercase bg-slate-900/50'>
      <tr>
        <th className="px-6 py-3 hidden lg:block">Rank</th>
        <th className="px-3 py-3">Name</th>
        <th className="px-3 py-3 hidden md:block">Symbol</th>
        <th className="px-3 py-3">Market Cap</th>
        <th className="px-3 py-3">Change</th>
        <th className="px-3 py-3">Price</th>
      </tr>
    </thead>
    <tbody>
      {data.map((crypto) => (
        <tr key={crypto.id} className='border-b bg-slate-400/10 dark:border-gray-700'>
          <td className="px-6 py-3 text-black hidden lg:block" >{crypto.rank}</td>
          <td className="px-3 py-4 font-medium whitespace-nowrap text-black">{crypto.name}</td>
          <td className="px-3 py-3 hidden md:block">{crypto.symbol}</td>
          <td className="px-3 py-3">${parseNumber(crypto.marketCapUsd)}</td>
          <td className="px-3 py-3">
            <span
              className={`${parseFloat(crypto.changePercent24Hr) >= 0 ? 'text-green-500' : 'text-red-500'} text-sm block`}
            >
              {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
            </span>
          </td>
          <td className="px-4 py-2">{parseFloat(crypto.priceUsd).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}
    </div>
 );
}

const parseNumber = (cryptoMarketCapUsd) => {
    let marketCapNumber = parseFloat(cryptoMarketCapUsd);
     
    if (marketCapNumber >= 1000000000) {
       marketCapNumber = (marketCapNumber / 1000000000).toFixed(2);
       return `${marketCapNumber}B`;
    } else if (marketCapNumber >= 1000000) {
       marketCapNumber = (marketCapNumber / 1000000).toFixed(2);
       return `${marketCapNumber}M`;
    } else {
       return `${marketCapNumber}`;
    }
}



export default TopCoins;