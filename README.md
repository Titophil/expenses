# Expense Tracker App

A simple React application for tracking and managing personal expenses.

## Features

* **Add Expenses:** Easily input new expenses with details like name, description, category, amount, and date.
* **View Expenses:** Displays a table of all recorded expenses.
* **Search Expenses:** Filter expenses by name or description using a search input.
* **Delete Expenses:** Remove individual expenses from the list.
* **Sort Expenses:** Click on the table headers (Expense, Description, Amount, Category, Date) to sort the expenses accordingly.
* **Data Persistence:** Expenses are saved in the browser's local storage, so your data persists across sessions.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **React Hooks:** Utilizes `useState` for managing component state and `useEffect` for handling side effects like local storage interaction.
* **CSS:** For styling the application.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd expense-tracker-app
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1.  **Adding Expenses:**
    * Enter the details of your expense in the form provided (Expense Name, Description, Category, Amount, Date).
    * Click the "Submit" button to add the expense to the tracker.

2.  **Viewing Expenses:**
    * All added expenses will be displayed in a table below the form. The table shows the expense name, description, amount, category, and date.

3.  **Searching Expenses:**
    * Use the "Search by name..." input field to filter the displayed expenses. The table will update to show only expenses whose name or description matches your search term (case-insensitive).

4.  **Deleting Expenses:**
    * Each row in the expense table has a "Delete" button. Click this button to remove the corresponding expense from the tracker.

5.  **Sorting Expenses:**
    * Click on the column headers ("Expense", "Description", "Amount", "Category", "Date") in the table to sort the expenses based on that column. Clicking again will toggle the sort order (though currently only ascending sort is implemented).

## Local Storage

The application uses the browser's local storage to save and retrieve expense data. This means that your expenses will be saved within your browser and will be available even if you close and reopen the page.

## Styling

The application is styled using a custom CSS file (`App.css`). The styles define the layout of the main components, the form, and the expense table.

## Contributing

Contributions are welcome! If you have any ideas for improvements or find any bugs, please feel free to open an issue or submit a pull request.

## Author

[Titus Kiprono]