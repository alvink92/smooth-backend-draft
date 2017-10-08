const processCrimeData = (rawData, crimeRateMap) => {
  const defaultHeader = Object.keys(rawData.meta.view.columns)
    .map(key => rawData.meta.view.columns[key])
    .map(colObj => colObj.name);

  const crimeRating = "crimeRating";
  const filterCols = ["X", "Y", "Category"];
  const exportColNamesMap = {
    X: "latitude",
    Y: "longitude",
    Category: "category"
  };

  const exportData = Object.keys(rawData.data)
    .map(key => rawData.data[key])
    .map(dataRow => {
      let retRow = [];
      filterCols.forEach(colName => {
        retRow.push(dataRow[defaultHeader.indexOf(colName)]);
      });
      retRow.push(crimeRateMap[dataRow[defaultHeader.indexOf("Category")]]);
      return retRow;
    });

  let exportHeader = filterCols
    .map(colName => exportColNamesMap[colName])
    .concat(crimeRating);

  return { header: exportHeader, data: exportData };
};

const CRIME_RATE_MAP = {
  WARRANTS: 3,
  BURGLARY: 3,
  "WEAPON LAWS": 3,
  "RECOVERED VEHICLE": 3,
  "LARCENY/THEFT": 3,
  "NON-CRIMINAL": 3,
  "OTHER OFFENSES": 3,
  ASSAULT: 3,
  FRAUD: 3,
  "MISSING PERSON": 3,
  "VEHICLE THEFT": 3,
  "SUSPICIOUS OCC": 3,
  "DISORDERLY CONDUCT": 3,
  TRESPASS: 3,
  "DRUG/NARCOTIC": 3,
  VANDALISM: 3,
  ROBBERY: 3,
  "SECONDARY CODES": 3,
  "DRIVING UNDER THE INFLUENCE": 3,
  "FAMILY OFFENSES": 3,
  DRUNKENNESS: 3,
  RUNAWAY: 3,
  "SEX OFFENSES": 3,
  FORCIBLE: 3,
  "STOLEN PROPERTY": 3,
  "BAD CHECKS": 3,
  ARSON: 3,
  KIDNAPPING: 3,
  "LIQUOR LAWS": 3,
  "FORGERY/COUNTERFEITING": 3,
  EXTORTION: 3,
  PROSTITUTION: 3,
  EMBEZZLEMENT: 3,
  LOITERING: 3,
  "NON FORCIBLE": 3,
  BRIBERY: 3,
  SUICIDE: 3,
  GAMBLING: 3,
  "PORNOGRAPHY/OBSCENE MAT": 3,
  TREA: 3
};

module.exports = {
  processCrimeData: processCrimeData,
  CRIME_RATE_MAP: CRIME_RATE_MAP
};
