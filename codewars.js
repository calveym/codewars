var sum_pairs = function(ints, s){
  var tempAry = [];
  for(i = 0; i < ints.length; i++) {
    for(x = 1; x < ints.length - 1; x++) {
      if(ints[i] + ints[x] === s) {
        tempAry.push([i, x]);
      }
      if(i === ints.length - 1 && x === ints.length - 2) {
        for(y = 0; y < tempAry.length; y++) {
          
        }
      }
    }
  }
};

console.log(sum_pairs([10,5,2,3,7,5], 10));
