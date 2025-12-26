# SkyCast: Glassmorphic Weather Dashboard 

A high-performance, responsive web application that provides real-time meteorological data and forecasts for over 200,000 cities worldwide.
The project features a modern **Glassmorphism** interface and leverages dynamic UI rendering to reflect current atmospheric conditions.

## Tech Stack

* **Language:** JavaScript (ES6+)
* **Framework:** React.js
* **Styling:** CSS3 (Advanced Backdrop Filters & Grid Layout)
* **API:** OpenWeatherMap API (Current & 5-Day Forecast)
* **Libraries:**
* `axios` for asynchronous API requests
* `react-icons` for weather-specific iconography
* `date-fns` for timestamp formatting and forecast calculation

<hr>

### 1. Prerequisites

* Node.js 16.x or higher
* npm or yarn package manager
* OpenWeatherMap API Key

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/devxnshsharma/weather-app
cd weather-app

# Install dependencies
npm install

# Configure environment
touch .env
# Edit .env with your API credentials (see Configuration section)

```

### 3. Run Application

```bash
npm start

```

The application will launch in development mode at `http://localhost:3000`.
<hr>

# Features

* **Global Meteorological Search:**
* Real-time data fetching for **200,000+ cities** using Asynchronous JavaScript and Fetch API.
* Search persistence using **LocalStorage** to remember the user's last queried location.


* **Dynamic UI Rendering:**
* Background visuals and icons change dynamically based on weather codes (e.g., Rain, Clouds, Clear).
* High-fidelity **Glassmorphism** design achieved through `backdrop-filter` and semi-transparent layers.


* **Optimized State Management:**
* Utilizes **React Hooks** (`useState`, `useEffect`) to manage API responses and error states.
* Implements robust error handling for invalid city names or network failures.


* **Data Visualization:**
* **Main Dashboard:** Displays temperature, condition description, and wind metrics.
* **Hourly Trends:** A stylized SVG-based chart visualizing temperature fluctuations for the next 6 hours.
* **Extended Forecast:** Processes 5-day forecast data to display consistent daily summaries.



## Project Structure

```
skycast/
├── src/
│   ├── components/       # Modular UI Components
│   │   ├── Sidebar.jsx   # Navigation and settings
│   │   ├── MainWeather.jsx # Current city condition
│   │   ├── Forecast.jsx  # 5-day list view
│   │   └── Statistics.jsx# Hourly trend visualization
│   ├── styles/           # CSS Architecture
│   │   ├── App.css       # Layout and spacing
│   │   └── glass.css     # Glassmorphism core styles
│   ├── utils/            # Helper logic
│   │   └── weatherIcons.js # API icon mapping
│   ├── App.js            # Main logic & State handling
│   └── index.js          # Entry point
├── public/               # Static assets
├── .env                  # API Key storage (ignored by git)
└── README.md             # Project documentation

```

## Configuration

### Environment Variables (.env)

Create a `.env` file in the root directory to store sensitive API credentials:

```text
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
REACT_APP_BASE_URL=https://api.openweathermap.org/data/2.5

```
<hr>

## Usage

### Main Dashboard

When the application loads:

* **Default View:** Displays weather for a pre-set city (e.g., Vancouver) or your last searched location.
* **Search Bar:** Enter any city name to fetch live data globally.

### UI Sections

1. **Current Stats:** View high-level temperature, wind speed, and direction.
2. **Dynamic Banner:** The top-left card changes its background image (Sunny, Cloudy, Rainy) to match the current condition.
3. **Trend Chart:** Observe the temperature "wave" for the coming hours.
4. **Forecast List:** Plan ahead with a summarized 5-day outlook.
<hr>

## Security & Performance Notes

* **API Security:** All API keys are managed via environment variables to prevent exposure in version control.
* **Optimization:** Utilizes `useEffect` cleanup functions to prevent memory leaks during rapid city switching.
* **Lighthouse Score:** Engineered for performance with optimized image assets and efficient CSS.

## Possible Improvements

* **Unit Testing:** Implement Jest/React Testing Library for component validation.
* **Unit Conversion:** Add a toggle for Celsius vs. Fahrenheit.
* **Geocoding API:** Integrate the Geolocation API to detect the user's current city automatically.
* **Advanced Charts:** Replace SVG-based waves with `Recharts` for interactive data points.

## Author

* **Devansh Sharma**
* B.Tech Computer Science and Engineering, VIT Vellore
* GitHub: [@devxnshsharma](https://github.com/devxnshsharma)

---

**Would you like me to generate the `SETUP_GUIDE.md` for this project to make it as detailed as your MedRep repository?**
