export const itemsPagination = (arr, itemsPerPage) => {
  let newArr = [];
  let items = Math.ceil(arr.length / itemsPerPage);
  for (let i = 1; i <= items; i++) {
    newArr.push(i.toString());
  }
  return newArr;
};
