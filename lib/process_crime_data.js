const processCrimeData = (rawData, crimeRateMap) => {
  const defaultHeader = Object.keys(rawData.meta.view.columns).map(
    key => rawData.meta.view.columns[key].name
  );

  const crimeRating = "crimeRating";
  const location = "location";
  const filterCols = ["X", "Y"];
  const exportColNamesMap = {
    X: "lat",
    Y: "lng",
    Category: "category"
  };

  const exportData = { meta: { name: "crimes" }, data: [] };

  Object.keys(rawData.data)
    .map(key => rawData.data[key])
    .forEach(dataRow => {
      let dataObj = {};

      let locationObj = {};
      filterCols.forEach(colName => {
        let targetObj;

        switch (colName) {
          case "X":
            targetObj = locationObj;
            break;
          case "Y":
            targetObj = locationObj;
            break;
          default:
            targetObj = dataObj;
        }

        const exportColName = exportColNamesMap[colName]
          ? exportColNamesMap[colName]
          : colName;
        targetObj[exportColName] = dataRow[defaultHeader.indexOf(colName)];
      });
      dataObj[location] = locationObj;
      dataObj[crimeRating] =
        CRIME_RATE_MAP[dataRow[defaultHeader.indexOf("Category")]];
      exportData.data.push(dataObj);
    });

  return exportData;
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
