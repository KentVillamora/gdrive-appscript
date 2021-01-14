/** @OnlyCurrentDoc */

function TestRun() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('9:9').activate();
  spreadsheet.getActiveSheet().deleteRows(spreadsheet.getActiveRange().getRow(), spreadsheet.getActiveRange().getNumRows());
  spreadsheet.getRange('6:6').activate();
  spreadsheet.getActiveSheet().deleteRows(spreadsheet.getActiveRange().getRow(), spreadsheet.getActiveRange().getNumRows());
  spreadsheet.getRange('4:7').activate();
  spreadsheet.getActiveSheet().deleteRows(spreadsheet.getActiveRange().getRow(), spreadsheet.getActiveRange().getNumRows());
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  spreadsheet.getActiveRangeList().setHorizontalAlignment('center')
  .setVerticalAlignment('middle');
  spreadsheet.getRange('D4').activate();
  spreadsheet.getRange('A6:D7').moveTo(spreadsheet.getActiveRange());
  spreadsheet.getRange('H4').activate();
  spreadsheet.getRange('A8:D9').moveTo(spreadsheet.getActiveRange());
  spreadsheet.getRange('H7').activate();
};

function Untitledmacro2() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A8').activate();
  spreadsheet.getCurrentCell().setValue('Testing');
  spreadsheet.getRange('A9').activate();
};

function myCode() {
  var mySheet = SpreadsheetApp.getActive();
  var cellName = "A1";
  var currVal = "";
  var newVal = "";

  for(var i = 1; i <= 10; i++) {
    cellName = "A" + i;
    currVal = mySheet.getRange(cellName).getValue();
    mySheet.getRange('B' + i).setValue(currVal);

    if(currVal == "") {
      newVal = "I'm blank";
      mySheet.getRange(cellName).setValue(newVal);
    }
  };
};
