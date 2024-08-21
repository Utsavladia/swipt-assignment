# Invoice Management System

## Overview

This project is an Invoice Management System built using Redux Toolkit. It allows you to manage invoices, including adding, deleting, and updating invoices and their items. It also features currency conversion to display item prices in different currencies.

## Features

- **Product Tab**: View and manage a list of products associated with invoices.
- **Currency Change**: Change the currency in which item prices are displayed.
- **Product Edit**: Edit product details anywhere in invoice or product tab and see updated prices reflected in invoices and products.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Utsavladia/swipt-assignment
   cd swipe-assignment
   ```

2. **Install Dependencies**

   Install the project dependencies using npm:

   ```bash
   npm install
   ```
3. **Environment Configuration**
Create a .env file in the root of the project and add your API key for currency conversion:
```bash
REACT_APP_API_KEY = your_freecurrency_api_key
```

4. **Start the Development Server**
```bash
npm start

```
The application will start on  [http://localhost:3000]( http://localhost:3000).

## Screenshots

### Product Tab

*Description*: This tab displays a list of products associated with invoices. You can view and manage the product details here.

![image](https://github.com/user-attachments/assets/35d53055-e1fe-4b2a-b9e5-fadcac9d8f69)


### Currency Change

*Description*: This feature allows you to select and change the currency in which item prices are displayed. The displayed prices will be updated based on the selected currency.

![image](https://github.com/user-attachments/assets/27dba685-3241-450b-9f32-853bb1841685)

### Product Edit

*Description*: Edit the details of a product, including name, description, and price. Changes will be reflected in the associated invoices.

![image](https://github.com/user-attachments/assets/07ec4df4-dee9-4126-85f7-935f97946044)


## Tech Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A library for efficient Redux development.
- **React-Redux**: The official React bindings for Redux.
- **JavaScript (ES6+)**: The programming language used for the project's logic.
- **CSS/SCSS**: For styling the application.
- **Axios**: A promise-based HTTP client for making API requests.
- **dotenv**: A module to load environment variables from a `.env` file.

## Thank You

Thank you for taking the time to explore this project! If you have any questions, suggestions, or feedback, please feel free to open an issue or submit a pull request. Your contributions and support are greatly appreciated.

Happy coding </>




