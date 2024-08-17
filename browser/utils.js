export const formatCash = num => {
  let numberWithCommas = num.toString()
      .split('')
      .reverse()
      .reduce((accum, curr, idx) => {
        if (idx > 2 && idx % 3 === 0) {
          return curr + ',' + accum;
        }
        return curr + accum;
      }, '');
  return `$${numberWithCommas}`;
};

export const isMillionDollarIdea = (weeklyRevenue, numWeeks) => {
  const totalMoney = Number(numWeeks) * Number(weeklyRevenue);
  if (!numWeeks || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000) {
    return false;
  } else {
    return true;
  }
}
