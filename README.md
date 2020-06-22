
## My E-Comm Site

This is an web based e-commerce application with a product list, cart and inventory management. Initial data has been loaded from mock api for showing sample product list on starting. Adding data to inventory is handled through store. No post api call has been done for saving data to server. Minimum required data validation has been implemented. Alert has been used for showing the same.

## Prerequisites

node js

Since the initial data is fetching from mock api, please connect internet while running else it will show empty product list. Also, Bootstrap CDN has been used for basic styling purpose.

## Design Structure

This project is implemented based on feature based structure. The store is using observer-listener design pattern since I have used Redux. Selector has been defined for interacting with data from component.

Assuming that Inventory is a different entity and separate end application (admin) in the program, the component for it has made class based (controlled component also).

## Technology used

    1. React JS
    2. Redux
    3. Redux-Thunk (middleware)

## Running the application

### `npm install`

Go to the root folder path and run "npm install" for installing the dependencies

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
