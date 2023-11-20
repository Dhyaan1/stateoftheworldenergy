function generateCountryData(countryName, index, countryNamesMap) {
  return {
    CountryInfo: {
      name: `${countryNamesMap[countryName]}`,
      TemperatureAnomalies: 0.6 + index * 0.1,
      SeaLevelRise: `+${4 + index}`,
      CarbonEmissions: `${300 + index * 50}`,
      RenewableEnergyProduction: `${30 + index * 2}`,
    },
    CountryNews: Array.from({ length: 20 }, (_, i) => ({
      NewsSource: `Dummy Source from ${countryName} ${i + 1}`,
      NewsTitle: `Dummy News Title from ${countryName} ${i + 1}`,
      NewsLink: `https://www.dummylink.com/${i + 1}`,
      SentimentStatus:
        i % index === 0 ? 0.6 : i % 4 === 1 ? 0.4 : i % 4 === 2 ? -0.4 : -0.8,
      Description: `Description for Dummy Source ${i + 1} news`,
    })),
  };
}

const countries = [
  "Global",
  "Australia",
  "Brazil",
  "Canada",
  "Germany",
  "Japan",
  "India",
  "China",
  "Italy",
  "UK",
  "Spain",
  "Russia",
  "France",
  "USA",
  "SouthKorea",
  "Mexico",
];

const countryNames = [
  "GLOBAL",
  "AUSTRALIA",
  "BRAZIL",
  "CANADA",
  "GERMANY",
  "JAPAN",
  "INDIA",
  "CHINA",
  "ITALY",
  "UNITED KINGDOM",
  "SPAIN",
  "RUSSIA",
  "FRANCE",
  "UNITED STATES",
  "SOUTH KOREA",
  "MEXICO",
];

const countryNamesMap = {};
countries.forEach((country, index) => {
  countryNamesMap[country] = countryNames[index];
});

const countriesData = {};

countries.forEach((country, index) => {
  countriesData[country] = generateCountryData(country, index, countryNamesMap);
});

export default countriesData;
