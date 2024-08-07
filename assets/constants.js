export function getDaysBetweenDates(dateString1, dateString2) {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  const timeDifference = Math.abs(date2 - date1);
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

export function addOneDay(dateString) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const newDate = `${year}-${month}-${day}`;
  return newDate;
}
