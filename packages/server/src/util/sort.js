export default value => {
  if (value == null || value.length === 0) return null;

  const [prop, side] = value.split(":");
  return { [prop]: side === "desc" ? -1 : 1 };
}