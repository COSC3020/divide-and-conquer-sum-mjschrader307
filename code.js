function divideAndConquerSum(a) {
  // Base Cases
  if (a.length === 0) return 0;
  if (a.length === 1) return a[0];

  let first_div = Math.floor(a.length / 3);
  let second_div = Math.floor((2 * a.length) / 3);

  let first = divideAndConquerSum(a.slice(0, first_div));
  let mid = divideAndConquerSum(a.slice(first_div, second_div));
  let last = divideAndConquerSum(a.slice(second_div));

  return first + mid + last;
}
