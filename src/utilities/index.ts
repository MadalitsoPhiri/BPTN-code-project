export const getYear = (date: string) => {
  const date_instance = new Date(date);
  return date_instance.getFullYear();
};
