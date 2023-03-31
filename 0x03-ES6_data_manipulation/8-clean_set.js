export default function cleanSet(set, startString) {
  // Create a new Set containing only elements of `set` that start with `startString`
  const newSet = new Set([...set].filter((val) => val.startsWith(startString)));
  // Map over the elements of `newSet`, slicing off `startString` and joining with a dash separator
  return [...newSet].map((val) => val.slice(startString.length)).join('-');
}

// Call `cleanSet` twice with different inputs and log the results to the console
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
