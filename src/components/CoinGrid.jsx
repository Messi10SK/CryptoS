import React, { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star'; // Adjust the import path based on your setup
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
        <div className="grid bg-darkgrey p-8 rounded-lg border-2 border-darkgrey cursor-pointer hover:border-green transition-all duration-300">
            <a href={`/coin/${coin.id}`} className="block">
                <div className="img-flex flex justify-start items-center gap-4">
                    <img src={coin.image} className="coin-image h-12 w-12 rounded-full" alt={`${coin.name}`} />
                    <div className="icon-flex flex w-full justify-between items-center">
                        <div className="info-flex flex flex-col justify-between gap-1">
                            <p className="coin-symbol uppercase font-semibold m-0">{coin.symbol}</p>
                            <p className="coin-name m-0 font-medium text-grey text-sm">{coin.name}</p>
                        </div>
                        <div
                            className={`watchlist-icon flex justify-center items-center border-2 rounded-full p-2 h-6 w-6 ${
                                isCoinAdded ? 'border-green text-green' : 'border-red text-red'
                            }`}
                            onClick={(e) => {
                                if (isCoinAdded) {
                                    removeItemToWatchlist(e, coin.id, setIsCoinAdded);
                                } else {
                                    saveItemToWatchlist(e, coin.id);
                                    setIsCoinAdded(true);
                                }
                            }}
                        >
                            {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
                        </div>
                    </div>
                </div>
                <div className="chip-flex flex justify-start items-center gap-3">
                    <div className={`price-chip border-2 rounded-full px-4 py-1 font-semibold ${coin.price_change_percentage_24h < 0 ? 'border-red text-red' : 'border-green text-green'}`}>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className={`chip-icon border-2 p-1 flex justify-center items-center rounded-full ${coin.price_change_percentage_24h < 0 ? 'border-red text-red' : 'border-green text-green'}`}>
                        {coin.price_change_percentage_24h >= 0 ? <TrendingUpRoundedIcon /> : <TrendingDownRoundedIcon />}
                    </div>
                </div>
                <p className={`current-price font-semibold text-lg m-0 ${coin.price_change_percentage_24h < 0 ? 'text-red' : 'text-green'}`}>
                    ${coin.current_price.toLocaleString()}
                </p>
                <p className="coin-name m-0 font-medium text-grey text-sm">
                    Total Volume: {coin.total_volume.toLocaleString()}
                </p>
                <p className="coin-name m-0 font-medium text-grey text-sm">
                    Market Capital: ${coin.market_cap.toLocaleString()}
                </p>
            </a>
        </div>
    );
}
