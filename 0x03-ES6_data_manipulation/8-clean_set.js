export default function cleanSet(set, startString) {
  const newSet = new Set([...set].filter((val) => val.startsWith(startString)));
  return [...newSet].map((val) => val.slice(startString.length)).join('-');
}
