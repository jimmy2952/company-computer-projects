module.exports = {
  Query: {
    current: (_, __, { dataSources }) =>
      dataSources.forecaAPI.getCurrentWeather()
  }
};
