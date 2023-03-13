export const getRandom = function (arr, count) {
  let newRandArr = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .filter((user, index, self) => self.findIndex((t) => t.name === user.name) === index)
    .slice(0, count);

  return newRandArr;
};
