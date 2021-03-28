/*********************************************************************************************
*
* Search for a file in Google Drive by name and return that file URL. If it doesn't exist, 
*   create it and return the URL.
*
* @param filename {String} The name of the file to search
* @return {String} The URL(s) of the Google Drive file with that name
*
*********************************************************************************************/

function getGoogleDriveFile(filename) {

  // Declare variables  
  var filename = filename || "IF NOT PASSING IN A FILE NAME TO THIS FUNCTION, ENTER FILE NAME HERE";
  var collectedFileURLs = [];
  var file = "";
  var currentURL = "";
  var returnedFileURLs = "";

  // Search Google Drive files for all files with this name
  var collectFiles = DriveApp.getFilesByName(filename);

  // Check if file(s) found, if so get URL(s) and push to array
  while (collectFiles.hasNext()) {
    file = collectFiles.next();
    currentURL = file.getUrl();
    collectedFileURLs.push(currentURL);
  }

  // If file not found, create new Sheet and get URL
  if (file.length == 0) {
    file = SpreadsheetApp.create(filename);
    collectedFileURLs.push(file.getUrl());
  }

  // Return URL(s) as a String
  returnedFileURLs = collectedFileURLs.toString();
  console.log(returnedFileURLs);
  return returnedFileURLs;
}
