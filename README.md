# MariaKhmel - Camping Rentals

Camping Rentals is an application designed to make renting camping vehicles easy
and convenient.

## Features

- View details about each vehicle, including photos and features.
- Read the reviews from real users.
- Add the vehicles to Favorites.

## Installation

1.  Clone the repository
    ```sh
    git clone: https://github.com/MariaKhmel/camping-rentals
    ```
2.  Install dependencies
    ```sh
    npm install
    ```
3.  Launch the application
    ```sh
    npm run dev
    ```

## Routing

The application utilizes the react-router-dom library for managing routes. The
routes within the app are as follows:

1. / - HomePage

The homepage features the app's logo, app bar and the button whoch leads to the
Catalog Page.

2. /catalog - CatalogPage

The catalog page displayes all available camping vehicles with detailed features
and reviews.

3. /favorites - FavoritesPage

The favorites page allows to view the preferred camping vehicles.

## Technologies Used

# Front-end

- **HTML/CSS**: Fundamental technologies for creating and styling web pages.
  HTML (HyperText Markup Language) handles the structure of the content, while
  CSS (Cascading Style Sheets) controls its appearance and formatting.

- **Axios**: A library for making HTTP requests in JavaScript. Axios simplifies
  sending requests to servers and handling responses, supports asynchronous
  operations with promises, and includes built-in error handling.

- **React**: A JavaScript library for building user interfaces. React allows
  developers to create components that automatically update, making it easier to
  manage application state and rendering.

- **Redux Toolkit**: The official set of tools for simplifying the use of Redux,
  a popular state management library. Redux Toolkit offers a simpler syntax,
  automatic generation of actions and reducers, and support for asynchronous
  operations.

- **Pagination**: A method for dividing large sets of data into multiple pages,
  making navigation easier and improving the performance of web applications. It
  is commonly used for displaying search results or lists that do not fit on a
  single page.

# Back-end

- **MockAPI**: Use mockapi.io for backend. Create a resource with fields like
  \_id, name, price, rating, etc. Populate with at least 13 diverse listings.

## API

[Додаток Camping Rentals](https://camping-rentals.netlify.app/)
