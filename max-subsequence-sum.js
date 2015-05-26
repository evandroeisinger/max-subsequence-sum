#!/usr/bin/env node

var n = eval(process.argv[2]);
var d = new Date().getTime();

function maximumSubsequenceSum(s) {
  var si   = 0;
  var sl   = s.length;
  var msi  = [];
  var ms   = 0;

  for(si=0; si < sl; si++) {
    var sbsi = 0;

    for(sbsi=si; sbsi <= sl; sbsi++) {
      var sbs = s.slice(si, sbsi).reduce(function(a,b) {
        return parseInt(a) + parseInt(b);
      }, 0);

      if(sbs > ms) {
        ms = sbs;
        msi = [si, sbsi - 1];
      }
    }
  }

  return msi;
}

console.log('\x1b[36mmaximum subsequence sum indexes:\x1b[0m \x1b[45m %s \x1b[0m', maximumSubsequenceSum(n));
console.log('\x1b[35m%s seconds\x1b[0m',(new Date().getTime() - d) / 1000);
