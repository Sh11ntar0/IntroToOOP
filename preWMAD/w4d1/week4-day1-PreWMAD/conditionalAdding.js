// write a function that returns the sum of all the numbers that are either 'even', or 'odd'

const conditionalAdding = function(values, condition) {
  // Your code here


  if (condition === "even") {
    let y = 0;
    for (i=0; i< values.length; i++ ) {
      if(values[i]%2===0){
        results += values[i]  
      }
    }
  }else if (condition ==="odd"){
    for (i=0; i< values.length; i++ ) {
      if(values[i]% 2 !== 0 ){
        results += values[i]  
      }
    }
  }
  return result


console.log(conditionalAdding([1, 2, 3, 4, 5], "even"));
console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));
console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));
console.log(conditionalAdding([], "odd"));