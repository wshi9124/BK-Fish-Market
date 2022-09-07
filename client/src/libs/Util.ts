const currencyFormat = (x: number) => {
  x.toFixed(2);
  const result = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$${result}`;
};

export default currencyFormat;
