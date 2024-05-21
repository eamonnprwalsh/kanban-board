export const block = (duration = 500, title) => {
  console.log('block', title);
  const start = performance.now();
  while (performance.now() < start + duration) {}
};
