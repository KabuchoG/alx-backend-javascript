export default function hasValuesFromArray(set, array) {
  for (const elem in array) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
