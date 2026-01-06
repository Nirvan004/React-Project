REST Countries API with Color Theme Switcher
Overview
The REST Countries API with Color Theme Switcher is a client-side, single-page application (SPA) built with React, TypeScript, and Vite. The app allows users to explore information about countries from the REST Countries API
and switch between light and dark color themes. This project demonstrates advanced React concepts including custom hooks, global state management with Context API, routing with React Router, and persistent theme state using localStorage.

Users can:
Browse all countries
Search countries by name
Filter countries by region
View detailed information for each country
Switch between light and dark themes

Features
Browse all countries with key details (population, region, capital, flag)
Search for countries by name
Filter countries by region
View detailed country information (native name, subregion, currencies, languages, borders, etc.)
Switch between light and dark themes (color theme persisted in localStorage)
Responsive and user-friendly UI
Graceful loading and error handling

Tech Stack
React
React Router (v7)
TypeScript
Vite
REST Countries API
Context API for theme management
CSS / CSS Modules for styling
State Management & Data Fetching
Uses useState and useEffect for component state and API interactions
Displays loading indicators while fetching data
Shows error messages when API requests fail

Custom Hooks

useFetch
Handles API requests to the REST Countries API
Manages loading and error states
Returns fetched data for use throughout the app (country lists, search results, country details)

useLocalStorage
Syncs React state with localStorage
Persists the selected theme across browser sessions

Global State – Theme Context
ThemeContext
Manages the app’s color theme globally
Provides:
theme: current theme (light or dark)
toggleTheme(): function to switch between themes
Internally uses useLocalStorage to persist theme preference

Routing
Implemented with React Router using dynamic routes.

Routes
Home (/) – Displays all countries with search and filter options
Country Detail (/country/:code) – Displays detailed information about a selected country

Components
Navbar – Contains site title and theme switcher button
CountryCard – Displays country flag, name, population, region, and capital
Spinner – Shown while loading data
ErrorMessage – Displays user-friendly error messages
Filter – Dropdown to filter countries by region
SearchBar – Input for searching countries by name

Styling
Fully responsive layout for desktop and mobile
Clean, visually appealing UI
Light and dark themes with smooth transitions
Reusable component-based styling

API Used
REST Countries API – https://restcountries.com/
Free public API
No API key required

Additional Notes
Built with Vite + TypeScript for a fast development workflow
Deployable to GitHub Pages or any static hosting service
Theme preference persists across page reloads and browser sessions
React Router uses HashRouter for GitHub Pages compatibility

https://nirvan004.github.io/React-Project/

Reflection:
In this project, I didn't face to many challenges with the actual building of the app/website. The website was fairly easy to create and interacting with the api was difficult but doable as it's been a while with the break and everything. Once I got a flow going everything went according to plan. My challenges really started when I had to start deploying. Because we were using react+vite there was a lot more that had to be done in order to get the deployment software (for me github pages) to actually interact with the website and show something. I ended up googling a lot of new things and learning about how github pages actually works in order to solve this and found that actually running npm install gh-pages into my application worked the best instead of doing all of the deployment on githubs website. I also had to change some things around also while I figured out what worked with github and what didn't like react router and browser router. For improvements I want to add more sorting capabilities as well as some fun facts. Also a "country of the day" or "random country button" would be kind of cool for informing people with general knowledge. I also would like to do a name all the countries tab where you are given all the flags and you have to type in all the nmaes that correspond with that as well as a timer to see how fast you can complete it. Overall, this was a fun activity and I am looking forward to the next one.  
