const { gql } = require("apollo-server");

const typeDefs = gql`
  type CurrentString {
    currentString: String
  }
  type Current {
    time: String
    symbol: String
    symbolPhrase: String
    temperature: Int
    feelsLikeTemp: Int
    relHumidity: Int
    dewPoint: Int
    windSpeed: Int
    windDirString: String
    windGust: Int
    precipProb: Int
    precipRate: Int
    cloudiness: Int
    thunderProb: Int
    uvIndex: Int
    pressure: Float
    visibility: Int
  }
  type Hourly {
    time: String
    symbol: String
    temperature: Int
    feelsLikeTemp: Int
    windSpeed: Int
    windGust: Int
    windDir: Int
    windDirString: String
    precipProb: Int
    precipAccum: Float
  }

  type Query {
    current: CurrentString
    hourly: [Hourly]
  }
`;

module.exports = typeDefs;
