import React, { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function saveItemToWatchlist(e, id) {
    e.preventDefault();
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (!watchlist.includes(id)) {
        watchlist.push(id);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
}

function removeItemToWatchlist(e, id, setIsCoinAdded) {
    e.preventDefault();
    if (window.confirm("Are you sure you want to remove this coin?")) {
        let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        const newList = watchlist.filter(coinId => coinId !== id);
        localStorage.setItem("watchlist", JSON.stringify(newList));
        setIsCoinAdded(false);
        window.location.reload();
    }
}

export default function CoinGrid({ coin, delay }) {
    const [isCoinAdded, setIsCoinAdded] = useState(false);

    useEffect(() => {
        const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        setIsCoinAdded(watchlist.includes(coin.id));
    }, [coin.id]);

    return (
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
            <div className="rounded-lg shadow-md bg-gray-900 p-6">
                <a href={`/coin/${coin.id}`}>
                    <div className="flex justify-between items-center mb-4">
                        <img src={coin.image} className="w-12 h-12 rounded-full" alt={`${coin.name}`} />
                        <div className={`watchlist-icon border-2 rounded-full p-2 h-6 w-6 ${isCoinAdded ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`} onClick={(e) => {
                                if (isCoinAdded) {
                                    removeItemToWatchlist(e, coin.id, setIsCoinAdded);
                                } else {
                                    saveItemToWatchlist(e, coin.id);
                                    setIsCoinAdded(true);
                                }
                            }}>
                            {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
                        </div>
                    </div>
                    <p className="text-gray-400 text-xs uppercase font-semibold">{coin.symbol}</p>
                    <p className="text-gray-100 text-lg font-semibold">{coin.name}</p>
                    <div className="flex items-center justify-between mt-4">
                        <div className={`text-xs font-semibold py-1 px-2 rounded-full ${coin.price_change_percentage_24h >= 0 ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'}`}>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                            {coin.price_change_percentage_24h >= 0 ? <TrendingUpRoundedIcon className="ml-1" /> : <TrendingDownRoundedIcon className="ml-1" />}
                        </div>
                        <p className={`text-lg font-semibold ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>${coin.current_price.toLocaleString()}</p>
                    </div>
                    <p className="text-gray-400 text-xs mt-2">Total Volume: {coin.total_volume.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">Market Capital: ${coin.market_cap.toLocaleString()}</p>
                </a>
            </div>
        </div>
    );
}
