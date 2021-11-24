function rangeOfNumbers(startNum, endNum) {
  let array =  [];
  array.push(startNum);
  if (startNum<endNum){
    array= rangeOfNumbers(startNum+1, endNum)
    array.unshift(startNum);
  }
  console.log(array)
  return array
};
