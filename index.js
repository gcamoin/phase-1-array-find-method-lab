// code your solution here
function superbowlWin(record) {
 const result = record.find(element => element["result"] === 'W') 
 if (result === undefined)
 { return undefined
 }
 return result["year"]
  }    
