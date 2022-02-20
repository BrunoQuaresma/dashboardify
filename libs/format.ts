export const formatValue = (value: string | number) => {
  if (typeof value === "number") {
    return value.toLocaleString();
  }

  return value;
};
