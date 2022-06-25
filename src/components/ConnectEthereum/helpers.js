export const round = (
  amount,
  decimals = 3,
) => Math.round((Number(amount) + Number.EPSILON) * 10 ** decimals) / 10 ** decimals;

export const truncateAddress = (address) => `${address.substring(0, 5)}...${address.substring(address.length - 5)}`;
