function reformatData() {
  var mySheet = SpreadsheetApp.getActive();
  var cellVal = '';
  var nextCell = '';
  var rowIndex= 0;
  var classType = '';
  var hpToCost = '';
  var resToInterval = '';
  var targetCount = '';
  var attackType = '';

  //1.a. Check each cell in Column A for any blank cell
  //1.b. Check as well if the succeeding cell is also blank
  //If yes, terminate the loop
  //2. Take note of the range of the relevant information
  //relative to the identified cell
  //3. Move relevant contents to their appropriate columns
  //aligned to the row of the operator's name
  //4. Delete excess rows
  for(var i = 1; i <= 1310; i++) {
    Logger.log('Evaluating Row ' + i);

    cellVal = mySheet.getRange('A' + i).getValue();
    nextCell = mySheet.getRange('A' + (i + 1)).getValue();

    if(cellVal == '') {
      Logger.log('Blank row: ' + i);

      if(nextCell == '') {
        Logger.log('Successive blanks detected!')
        break;
      } else {
        rowIndex = i - 2;
        classType = 'A' + (i - 1);
        hpToCost = 'A' + (i + 1) + ':D' + (i + 1);
        resToInterval = 'A' + (i + 3) + ':D' + (i + 3);
        targetCount = 'A' + (i + 5);
        attackType = 'A' + (i + 6);
        
        mySheet.getRange(classType).moveTo(mySheet.getRange('B' + rowIndex));
        mySheet.getRange(hpToCost).moveTo(mySheet.getRange('D' + rowIndex));
        mySheet.getRange(resToInterval).moveTo(mySheet.getRange('H' + rowIndex));
        mySheet.getRange(targetCount).moveTo(mySheet.getRange('L' + rowIndex));
        mySheet.getRange(attackType).moveTo(mySheet.getRange('M' + rowIndex));
        Logger.log('Relevant ranges: ' + classType + ' ' + hpToCost + ' ' + resToInterval + ' ' + targetCount + ' ' + attackType);

        mySheet.deleteRows((i - 1), 8); //8 = number of rows to be deleted
        Logger.log('Excess rows: ' + (i - 1) + ':' + (i + 6));
      }
    } else {
      Logger.log('Skipped');
    }
  }
}
