var evalRPN = function(tokens) {
  var stack = [];
  for (var i = 0; i < tokens.length; ++i) {
    if (isNaN(tokens[i])) {
      var op2 = stack.pop();
      var op1 = stack.pop();
      if (tokens[i] == '+') {
        stack.push(op1 + op2);
      } else if (tokens[i] == '-') { 
        stack.push(op1 - op2);
      } else if (tokens[i] == '*') {
        stack.push(op1 * op2);
      } else {
        stack.push(parseInt(op1 / op2));
      }
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }   
  return stack[0];
};

