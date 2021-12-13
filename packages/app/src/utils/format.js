export const formatDate = (data, format = "DD/MM/YYYY") => {
  let date = new Date(data);
  if (date.toString() === "Invalid Date") date = new Date();

  const put0 = (s) => (String(s).length === 1 ? `0${s}` : s);
  return format
    .replace("DD", put0(date.getDate()))
    .replace("MM", put0(date.getMonth() + 1))
    .replace("YYYY", date.getFullYear())
    .replace("YY", put0(date.getYear()));
};
