var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapControllers();

app.Run();

Create WeatherController.cs in the Controllers folder

using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace WeatherAppAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public WeatherController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpGet("{city}")]
        public async Task<IActionResult> GetWeather(string city)
        {
            var apiKey = "your_openweathermap_api_key";
            var response = await _httpClient.GetAsync($"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric");

            if (!response.IsSuccessStatusCode)
                return NotFound("City not found");

            var weatherData = await response.Content.ReadAsStringAsync();
            return Ok(weatherData);
        }
    }
}