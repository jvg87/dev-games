export const formattingRating = (rating: number) => {
  const formattedRating = rating / 10;
  return formattedRating.toFixed(1);
};
