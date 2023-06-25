const pathsAndTitles: { [key: string]: string } = {
  '/': 'Home',
  '/shop': 'Browse products',
};

const comparePathsAndTitles = (path: string) =>
  pathsAndTitles[path] ?? 'Unknown';

export default comparePathsAndTitles;
