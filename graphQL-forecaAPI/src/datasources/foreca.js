const { RESTDataSource } = require("apollo-datasource-rest");

class ForecaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pfa.foreca.com/api/v1/";
  }
  willSendRequest(request) {
    request.headers.set("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTYxMjQxOTE3MywiZXhwIjoxNjEzMDIzOTczLCJuYmYiOjE2MTI0MTkxNzMsImp0aSI6ImJmNmNjNTEyYTgzYmRkZDMiLCJzdWIiOiJqaW1teS1jaGVuIiwiZm10IjoiWERjT2hqQzQwK0FMamxZVHRqYk9pQT09In0.HSKvG5E2SW1he3JMH8s6QRuS3q1NsMlHTsTC9mZcGAA");
  }
  async getCurrentWeather() {
    const response = await this.get("current/121.5712493,25.0777763");
    return response;
  }
}

module.exports = ForecaAPI;
