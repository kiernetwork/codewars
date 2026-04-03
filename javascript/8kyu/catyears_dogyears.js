var humanYearsCatYearsDogYears = function(n) {
   const cat = n === 1 ? 15 : n === 2 ? 24 : 24 + (n - 2) * 4;
   const dog = n === 1 ? 15 : n === 2 ? 24 : 24 + (n - 2) * 5;
   return [n, cat, dog];
}
    