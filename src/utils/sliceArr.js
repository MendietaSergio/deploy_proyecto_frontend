export const sliceArr = (currentPage, itemsPerPage, arr) => {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const sliceArr = [...arr].slice(start, end);
  return sliceArr;
};
