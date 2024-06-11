export const dateToString = ({ today }: { today: Date }) => {
  // Format the date to YYYY-MM-DD
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(today.getDate()).padStart(2, '0');
  // Create the date string in the format YYYY-MM-DD
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate
}

export const stringToDate = ({ today }: {today: string}) => {
  return new Date(today);
}