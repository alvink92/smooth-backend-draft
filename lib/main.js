let fs = require("fs");
let path = require("path");
let processCrimeData = require("./process_crime_data.js");
let rawCrimeData = require(path.join(
  __dirname,
  "..",
  "data/raw/",
  "2017_crimes.json"
));

const crimesExportPath = path.join(
  __dirname,
  "..",
  "data/processed/",
  "crimes.json"
);
const processedCrimeData = processCrimeData.processCrimeData(
  rawCrimeData,
  processCrimeData.CRIME_RATE_MAP
);

fs.writeFile(crimesExportPath, JSON.stringify(processedCrimeData), function(
  err
) {
  err ? console.log(err) : console.log("Crimes data was sucessfully exported!");
});
