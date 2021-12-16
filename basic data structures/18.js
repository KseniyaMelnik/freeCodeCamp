function countOnline(usersObj) {
  let result = 0
 for (let user in usersObj) {
  usersObj[user].online ? result++ : result
  }
return result
}

