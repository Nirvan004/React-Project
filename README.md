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
