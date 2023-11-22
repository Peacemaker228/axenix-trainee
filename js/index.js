import filterAnagrams from "./FOO-2.js";

console.log(
  filterAnagrams("abba", ["aabb", "abcd", "bbaa", "dada"])
  // ['aabb', 'bbaa']
);

console.log(
  filterAnagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])
  // ['carer', 'racer']
);

console.log(
  filterAnagrams("laser", ["lazing", "lazy", "lacer"])
  // []
);
