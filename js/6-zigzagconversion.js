var convert = function(s, numRows) {
  if (numRows == 1) return s;
  ques = [];
  for (var k = 0; k < numRows; ++k) ques[k]="";
  for(var i = 0; i < s.length; ++i) {
    var j = i % (2*numRows-2) ;
    var cur = j * (j < numRows) + (2 * numRows - 2 - j) * (j >= numRows) ;
    ques[cur] += s[i];
  }
  return ques.join("");
};
