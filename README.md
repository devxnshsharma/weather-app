# SkyCast: Glassmorphic Weather Dashboard

SkyCast is a high-performance, responsive web application that provides real-time weather analytics for over 200,000 cities. Built with **React.js**, it features a **Glassmorphism** UI, dynamic data rendering, and optimized API integration.

## Key Features

- **Real-time Global Data:** Fetches live weather metrics including temperature, wind speed, and humidity using the OpenWeather API.
- **Dynamic UI Rendering:** The interface dynamically updates background visuals and iconography based on real-time weather conditions (e.g., Overcast, Sunny, Stormy).
- **Asynchronous Data Handling:** Implemented using **Fetch API** and **Axios** to ensure non-blocking UI updates.
- **Advanced State Management:** Utilizes React Hooks (`useState`, `useEffect`) to manage global app states and search persistence.
- **Glassmorphic Design:** A sleek, semi-transparent UI built with custom **CSS3 Backdrop Filters** and Grid/Flexbox layouts.
- **Error Resilience:** Includes validation logic and user-friendly handling for invalid location queries.

## Tech Stack

- **Frontend Framework:** React.js (v18+)
- **Styling:** CSS3 (Advanced Backdrop-filters, Glassmorphism)
- **API:** OpenWeatherMap API (Current & 5-Day Forecast)
- **Icons:** React-Icons (Wi/Fi/Md sets)
- **Utilities:** Date-fns for timestamp formatting

## Development Highlights
Component-Based Architecture

The application is broken down into modular, reusable components:

- **MainWeather:** Handles the primary location and condition display.

- **WeatherDetails:** Displays core metrics like current temperature and wind.

- **StatisticsChart:** A custom SVG-based visualization for hourly trends.

- **ForecastCard:** Maps over the 5-day forecast data to provide a list view.

## State Persistence
**Leveraged localStorage** to ensure that a user's last searched city persists across browser refreshes, enhancing the overall User Experience (UX).
