/**
 * Converts a Unix timestamp to this date format (dd.mm.yyyy)
 * @param timestamp - The Unix timestamp to be converted
 * @returns The formatted date string in dd.mm.yyyy format
 */
export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};
