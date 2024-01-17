const range: (start: number, end: number) => number[] = (
  start: number,
  end: number
): number[] => {
  return new Array(end - start + 1).fill(0).map((_, i) => start + i);
};

export default range;
