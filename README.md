# Country Search App

## Description

The **Country Search App** is a simple React application that allows users to search for countries based on a given query. When a user enters a search term, a fetch request is made to an external API, returning a filtered list of countries that match the search criteria. For example, if a user inputs "nig," the app will display both Niger and Nigeria.

## Features

- **Search Functionality**: Users can input a search query to find countries.
- **API Integration**: The app makes a fetch request to a public API to retrieve country data.
- **Dynamic Filtering**: As users type their queries, the app dynamically filters and displays the list of countries.

## Technologies Used

- **React**: For building the user interface.
- **JavaScript**: For functionality and logic.
- **CSS (Tailwind CSS)**: For styling the application (if applicable).
- **REST API**: The app fetches country data from a public API.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm

### Installation

1. Clone the repository:
   `git clone https://github.com/your-username/country-search-app.git`

2. Navigate into the project directory:
    `cd lawpavilion-react`

3. Install the required dependencies:
    `npm install`

4. Start the development server:
    `npm run dev` 

5. Open your web browser and go to http://localhost:3000 to use the application

## Usage

* Type a search query into the input field (e.g., "Nig").
* Click the search button to fetch the list of countries that match your query.
* The application will display a list of countries that include the search term in their name.
* Example Input: Nig
* Output:
Niger,
Nigeria

## API Used

* The app uses the REST Countries API to fetch country data. 
* The API provides detailed information about countries, including names, flags, and regions.

## Acknowledgments

* Thanks to the creators of the REST Countries API for providing accessible country data.