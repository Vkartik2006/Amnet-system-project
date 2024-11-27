Shopping Cart API and Weather App API

This repository contains two separate projects developed using ASP.NET Core:

1. Shopping Cart API: A backend service for managing a basic shopping cart system.


2. Weather App API: A backend service to retrieve weather information for any city using the OpenWeatherMap API.




---

1. Shopping Cart API

Overview

The Shopping Cart API provides basic functionalities to manage a shopping cart for e-commerce platforms. Users can add, view, update, and remove items in the cart.

Features

Add items to the shopping cart.

View all items in the cart.

Update the quantity of specific items.

Remove items from the cart.


Tech Stack

Framework: ASP.NET Core

Programming Language: C#

Data Storage: In-memory storage (can be extended to a database like SQL Server or MongoDB).


How to Run

1. Clone the repository:

git clone <repository_url>
cd ShoppingCartAPI


2. Build and run the application:

dotnet run


3. Test the API using tools like Postman or Swagger.



API Endpoints

Sample Requests

1. Add an Item to the Cart
POST /api/cart
Request Body:

{
  "id": 1,
  "name": "Wireless Mouse",
  "price": 25.99,
  "quantity": 2
}


2. View All Items in the Cart
GET /api/cart


3. Update Item Quantity
PUT /api/cart/1
Request Body:

{
  "quantity": 3
}


4. Remove an Item from the Cart
DELETE /api/cart/1




---

2. Weather App API

Overview

The Weather App API fetches real-time weather data for a given city by integrating with the OpenWeatherMap API. Users can input a city name and retrieve weather information such as temperature, humidity, and conditions.

Features

Fetch current weather details for any city.

Provide meaningful error messages for invalid city names or API errors.

Simplified JSON responses for easy integration with frontend applications.


Tech Stack

Framework: ASP.NET Core

Programming Language: C#

API Integration: OpenWeatherMap API


How to Run

1. Clone the repository:

git clone <repository_url>
cd WeatherAppAPI


2. Obtain an API key from OpenWeatherMap.


3. Replace your_openweathermap_api_key in the code with your actual API key.


4. Build and run the application:

dotnet run


5. Test the API using tools like Postman or Swagger.



API Endpoint

Sample Request

1. Get Weather Data for a City
GET /api/weather/London

Response:

{
  "temperature": 15,
  "condition": "Cloudy",
  "humidity": 80
}




Error Handling

Returns 404 Not Found for invalid city names or API errors.
