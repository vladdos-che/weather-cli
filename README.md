# Weather CLI

A simple and efficient command-line interface (CLI) application built with Node.js. This tool fetches real-time weather data and air quality information for a specified city using the [WeatherAPI](https://www.weatherapi.com/).

## Features

- 🌤 **Real-time Weather:** Fetches current weather conditions.
- 💨 **Air Quality Data:** Includes air quality index (AQI) in the response.
- 🚀 **Lightweight:** Built with standard Node.js modules and `dotenv`.
- ⚡ **ES Modules:** Utilizes modern JavaScript ES Module syntax (`import`/`export`).

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended).
- A free API Key from [WeatherAPI](https://www.weatherapi.com/).

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd weather-cli
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Configuration

1. **Set up environment variables:**
   The project includes a template file named `.env.example`. You need to create a `.env` file based on this template.

   You can rename the file or create a new one:
   ```bash
   cp .env.example .env
   # On Windows Command Prompt: copy .env.example .env
   ```

2. **Add your API Key:**
   Open the `.env` file in a text editor and paste your WeatherAPI key:
   ```env
   API_KEY=your_actual_api_key_here
   ```

## Usage

Run the application using Node.js, followed by the name of the city you want to check.

**Syntax:**
```bash
node index.js <City Name>
```

**Example:**
```bash
node index.js London
```

**Output:**
The application will output a raw JSON object containing:
- `location`: City name, region, country, and local time.
- `current`: Temperature (C/F), wind speed, humidity, and air quality data.

## Project Structure

```text
weather-cli/
├── node_modules/       # Dependencies
├── .env                # Environment variables (contains API Key)
├── .env.example        # Template for environment variables
├── .gitattributes      # Git configuration
├── .gitignore          # Files to ignore in Git
├── api.js              # Logic for fetching data from WeatherAPI
├── args.js             # Logic for parsing command-line arguments
├── index.js            # Entry point of the application
├── LICENSE.txt         # MIT License
├── package.json        # Project metadata and scripts
└── package-lock.json   # Dependency lock file
```

## License

This project is open-source and available under the [MIT License](LICENSE.txt).

Copyright (c) 2025 vladdos-che