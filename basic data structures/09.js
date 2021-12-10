function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence =  ['learning', ...fragment, 'is', 'fun']; // Change his line
  return sentence;
}

console.log(spreadOut());
