var fs = require('fs');//File system package
var fileData = "";

var inputFile = '../data/Production-Department_of_Agriculture_and_Cooperation_1.csv';
var outputFile = '../data/parseddata.json';
var outputData = "";
var colIndex = {col1:["Particulars"," 3-2005"]};

/*Function to convert csv file to json format*/
function parseToJson(csv){
  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  var index = [];
  var colName = this.col1;

  for(var j=0;j<colName.length;j++)
  {
    for(var i=0;i<headers.length;i++)
    {

      if(headers[i].trim()==colName[j].trim())
      {
        index.push(i);
      }
      
    }
  }
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
   var funBind = parseToJson.bind(colIndex,fileData);
   outputData = funBind();
   fs.writeFile(outputFile, outputData);
   console.log(outputData);
});




 