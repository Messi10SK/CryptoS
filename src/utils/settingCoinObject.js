export const settingCoinObject = (data, setCoin) => {
  if (data && data.id) {
    // Access data properties only if data is not undefined and has an id property
    setCoin({
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      image: data.image?.large || "", // Use optional chaining to handle potentially undefined properties
      desc: data.description?.en || "", // Use optional chaining to handle potentially undefined properties
      price_change_percentage_24h: data.market_data?.price_change_percentage_24h || 0, // Use optional chaining to handle potentially undefined properties
      total_volume: data.market_data?.total_volume?.usd || 0, // Use optional chaining to handle potentially undefined properties
      current_price: data.market_data?.current_price?.usd || 0, // Use optional chaining to handle potentially undefined properties
      market_cap: data.market_data?.market_cap?.usd || 0, // Use optional chaining to handle potentially undefined properties
    });
  } else {
    // Handle the case where data is undefined or does not have an id property
    console.error("Data is undefined or missing id property:", data);
  }
};
