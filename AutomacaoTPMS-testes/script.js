
//var csv is the CSV file with headers

csv = 'Module Name,PM,Planned Hours,Type,Tester,DtPlanStart,DtPlanEnd,Special Terminology,QA TVT?,Title,Special Info,Movement ID\
AN23DAA,Gustavo,5,DVT,Maria,28/08/2020,03/09/2020,No,No,TEST-AN23DAA_DVT-#1, ,1428917\
HM950AA,Gustavo,46,TVT,Roberto,26/08/2020,18/09/2020,No,No,TEST-HM950 TVT-#1, ,1425322\
I6023AB,Gustavo,2,DVT,Roberto,24/08/2020,26/08/2020,No,No,TEST-I6023_DVT-#1, ,1427700\
I7014AB,Gustavo,2,DVT,Roberto,24/08/2020,26/08/2020,No,No,TEST-I7014_DVT-#1, ,1427702\
IAC20AD,Gustavo,12,DVT,Maria,24/08/2020,28/08/2020,No,No,TEST-DVT01-#1, ,1418799\
KP020AA,Gustavo,3,TVT,ZAUM,26/08/2020,03/09/2020,No,No,TEST-KP020AA_TVT-#1, ,1417146\
QS741AB,Gustavo,8,DVT,Maria,25/08/2020,28/08/2020,No,No,TEST-QS741AB DVT-#1, ,1411101\
QS741AC,Gustavo,4,DVT,Maria,25/08/2020,28/08/2020,No,No,TEST-QS741AC DVT-#1, ,1427853'

var lines=csv.split("\n")

var result = []

// NOTE: If your columns contain commas in their values, you'll need
// to deal with those before doing the next step 
// (you might convert them to &&& or something, then covert them back later)
// jsfiddle showing the issue https://jsfiddle.net/
var headers=lines[0].split(",")

for(var i=1;i<lines.length;i++){
    var obj = {};
    var currentline=lines[i].split(",");
    for(var j=0;j<headers.length;j++){
        obj[headers[j]] = currentline[j];
    }
    result.push(obj);
}

//return result; //JavaScript object
listajson = JSON.stringify(result); //JSON
alert(listajson) 

