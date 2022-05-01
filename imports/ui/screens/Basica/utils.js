export const buildOptionsOneToTen = ({ left, right }) => {
  const elements = [];

  for (let index = left; index < right + 1; index += 1) {
    elements.push({
      value: index,
      description: index,
    });
  }

  return elements;
};
