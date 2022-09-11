const currencyFormat = (x: number) => {
  const result = x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return `$${result}`;
};

export default currencyFormat;
