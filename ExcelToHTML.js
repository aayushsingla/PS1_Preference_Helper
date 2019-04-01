var XLSX=require('xlsx');
var FS = require('fs');

var workbook = XLSX.readFile('./psData.xlsx',{type: 'binary'});
//Fetch the name of First Sheet.
var firstSheet = workbook.SheetNames[0];
var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
FS.writeFileSync('./Code.js','', (err) => {
    // In case of a error throw err.
    if (err) throw err;
    console.log("File Created");
})
var stringToWrite = '<ul id="sortable_nav" class="item-list divMargin h5 m-t-20">';
var preferenceBeingFilled=0;
var lastPreferenceFilled=0;
for (preferenceBeingFilled = 1; preferenceBeingFilled <= excelRows.length; preferenceBeingFilled++) {
           //Add the data row.
     for(var i=0;i<excelRows.length;i++){
        if(preferenceBeingFilled==excelRows[i].preference){
          if(lastPreferenceFilled==(preferenceBeingFilled-1)){
            var psName = excelRows[i].psName;
            var psId = excelRows[i].psId;
            var preference = excelRows[i].preference;

            stringToWrite = stringToWrite +
            '<li class=\"col-sm-12 item-blue clearfix ui-state-default\"><span cls=\"'+preferenceBeingFilled+
            '\" spn=\"'+psId+'\" cname=\"'+psName+'\" class=\"spanclass uiicon ui-icon-arrowthick-2-n-s\">'+psName+
            '</span>&nbsp;&nbsp;&nbsp;&nbsp;<div class=\"ui-state-default sortable-number\"><span id=\"spnRank\" class=\"\">'+preferenceBeingFilled+
            '</span></div><input type=\"checkbox\" chkaccomo=\"'+preferenceBeingFilled+'\" class=\"accomo pull-right\" name=\"accomoPreference\" value=\"'+preferenceBeingFilled+'\"></li>';
            lastPreferenceFilled=preferenceBeingFilled;
            console.log('Filled preference: '+preferenceBeingFilled);
          }else throw new Error("You have filled preference "+lastPreferenceFilled+" twice.");
        }
     }
 }
FS.appendFileSync('Code.js',stringToWrite + '</ul>');
console.log("You have successfully created the file.Now copy the code from\nCode.js and replace it in the website's javascript code.");
