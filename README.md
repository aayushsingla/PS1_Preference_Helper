# PS1_Preference_Helper
Helps to fill station preferences in PS.
This project is created to help students of Bits Goa to fill their preferences for PS allotments.To use this,
<br /> <p align='center'>```git clone https://github.com/aayushsingla/PS1_Preference_Helper/``` </p> <br/>
This will create a folder name 'PS1_Preference_Helper' in your home directory.Now go to this directory and open psData.xlsx file.
Fill your preference in column named preference (for ex. fill 1 in front of that PS station you want to give top preference, 2 for 
second prefernce and simlarly).Now, save this file and <b> Make sure you donot change any content of first 3 columns (namely psName, psId, place) and donot repeat any preference number in preference column.</b>
Now open terminal in the same current directory and run
<br/> <p align='center'> ```js ExcelToHTML.js``` </p><br/>
If this command showed error: 'permission denied' try running ```chmod +777 ./ExcelToHTML.js```.This will generate a file named Code.js file in the same directory. Open this file and copy it's whole code. Next step is to visit PSMS page and open your 'Fill Station Preference' page.
Now Right click and click on inspect Element. This will open a side bar in chrome  and bottom bar in Mozilla. Find this line 
<br/> <p align='center'> ```<ul id="sortable_nav" class="item-list divMargin h5 m-t-20 ui-sortable">``` </p> <br/>
in Elements page and right click on it to select 'Edit as HTML option'. Replace the whole Element by the code you copied from Code.js file and close this side/bottom bar. You will see the changed list according to your preferences.
<b>Select your accomodation preference by checking the boxes </b>and then click on Save preferences Button.

