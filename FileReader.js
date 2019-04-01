var fs = require('browserify-fs');
var NodeXls = require('node-xls');
data=[]
    var x= document.getElementsByClassName("item-blue");
    for(var i = 0;i < x.length; i++){
      var y = x[i].getElementsByClassName("ui-icon-arrowthick-2-n-s");
      var psName= y[0].innerText;
      var psId= y[0].attributes[1].nodeValue;
      var accomoPreference= "No"
      var place= psName.substring(psName.indexOf(','))
      console.log(psName);
      console.log(y[0].attributes[1].nodeValue);
      data.push({
        "psName":psName,
        "psId":psId,
        "accomoPreference":accomoPreference,
        "place": place
      })
    }

    console.log(JSON.stringify(data))
    console.log("Finished");
