# Weather-app
Weather App
A simple weather app that displays the current weather for a city using OpenWeatherMap API. This project fetches real-time weather data and updates the page dynamically with information like temperature, weather description, and an icon.

🚀 Features
Displays city name.

Shows the current weather temperature.

Shows the weather description (e.g., cloudy, sunny).

Uses an icon to represent the weather condition (sun, rain, cloud, etc.).

🛠️ Prerequisites
Text editor (e.g., Visual Studio Code, Sublime Text)

Web browser (e.g., Chrome, Firefox, Edge)

API Key from OpenWeatherMap.

⚙️ Setup Instructions
1. Get Your API Key
To fetch weather data, you'll need an API key from OpenWeatherMap:

Visit OpenWeatherMap.

Sign up or log in.

Go to the API keys section and generate a new key.

2. Clone or Download the Repository
Clone the repository or download the project files to your local machine.

bash
Copy
Edit
git clone https://github.com/yourusername/weather-app.git
3. Modify the script.js File
Open the script.js file.

Replace 'YOUR_API_KEY' with your OpenWeatherMap API key.

javascript
Copy
Edit
const apiKey = 'YOUR_API_KEY';
4. Run the App
Open the index.html file in any web browser.

The app should display the current weather for the specified city (default is Bhubaneswar).

🔧 Technologies Used
HTML for the structure.

CSS for the design.

JavaScript for fetching data from the API and updating the page dynamically.

📷 Example

❓ Troubleshooting
Invalid API key: Make sure you’ve copied the correct API key and that it’s valid.

CORS Error: If you get CORS errors, you may need to use a proxy server or test it on a local server like http-server (via Node.js).

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
