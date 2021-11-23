let count = 0;

function cc(card) {
switch (card) {
  case 2: 
  count++;
  break;
  case 3: 
  count++;
  break;
  case 4: 
  count++;
  break;
  case 5: 
  count++;
  break;
  case 6: 
  count++;
  break;
  case 10: 
  count--;
  break;
  case 'J': 
  count--;
  break;
  case 'Q': 
  count--;
  break;
  case 'K': 
  count--;
  break;
  case 'A': 
  count--;
  break;
  
}

  return count>0 ? count + " Bet" : count + " Hold";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
