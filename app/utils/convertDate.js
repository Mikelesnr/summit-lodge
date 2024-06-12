export const convertDate = (date_str) => {
  const [y, m, d] = date_str.split(/-|\//); // splits "26-02-2012" or "26/02/2012"
  const date = new Date(y, m - 1, d);
  console.log(date.getTime());
  return date;
};
