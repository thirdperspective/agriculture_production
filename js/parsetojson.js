var fs = require('fs');//File system package
var fileData = "";

var inputFile = '../data/Production-Department_of_Agriculture_and_Cooperation_1.csv';
var outputFile = '../data/Production-Department_of_Agriculture_and_Cooperation_1.json';
var outputData = "";

/*Function to convert csv file to json format*/
function parseToJson(csv){
  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  for(var i=1;i<lines.length;i++)
  {
    var obj = {};
    var currentline=lines[i].split(",");
    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return JSON.stringify(result);
}


fs.readFile(inputFile , function (err, data) {
   if (err) {
      return console.error(err);
   }
   fileData = data.toString();
   outputData = parseToJson(fileData);
   fs.writeFile(outputFile, outputData);
});
