var fs = require('fs');//File system package
var fileData = "";

var inputFile = '../data/Production-Department_of_Agriculture_and_Cooperation_1.csv';
var outputFile = '../data/Production-Department_of_Agriculture_and_Cooperation_1.json';
var outputData = "";
var col = [];

/*Function to convert csv file to json format*/
function parseToJson(csv,c1,c2){
  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  var index = [];

  /*for(var i=0;i<lines.length;i++)
  {
    if(headers[i])==c1)
    index.push(i);
  }

  for(var i=0;i<lines.length;i++)
  {
    if(headers[i])==c2)
    index.push(i);
  }*/
  index = [0,23];

  for(var i=1;i<lines.length;i++){
	  var obj = {};
	  var currentline=lines[i].split(",");
	  for(var j=0;j<index.length;j++){
		  obj[headers[index[j]]] = currentline[index[j]];
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
   outputData = parseToJson(fileData,"Particulars"," 3-2013");
   fs.writeFile(outputFile, outputData);
   console.log(outputData);
});





 