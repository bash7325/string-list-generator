var fs = require("fs");

//add your list of values to this variable
var list = ""

function commaSeperateAndQuoteList() {
  listArray = [];
  var commaList = "'" + list.split(",").join(',');
  //create new array from commaList
    var newList = commaList.split(',');
    fs.writeFileSync('./list.txt', JSON.stringify(newList));

    //loop through newList and create a new object for each comma separated item
    for (var i = 0; i < newList.length; i++) {
      var newObject = {
        name: newList[i]
      };
      //push newObject to array
      listArray.push(newObject);
      //write listArray to new js file in thing folder
      fs.writeFileSync('./list.json', JSON.stringify(listArray));
      
//for each name in list.json create a new concatenated string. Update the newString variable to what the insert needs to contain. Left some code in as an example
      var newString = "";
      for (var i = 0; i < listArray.length; i++) {
        newString += "(@custom_lookup_values_id" + ', ' + "'" + listArray[i].name + "'" + ', ' + "'" + listArray[i].name + "'" + ', ' + "18001, 101, getdate(), 101, getdate(), 1), "
        fs.writeFileSync('./sqlinsert.txt', JSON.stringify(newString));
    }
}

}
commaSeperateAndQuoteList();



