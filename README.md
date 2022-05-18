### React Front-End

Create an React site in the client folder of your project

- Use routing
- Use your utility/fetch to interact with your API
- Use localStorage to handle front-end auth

#### Views

- /
  - Show a page welcoming the user to your book store
  - Have a link to your book listing
  - Have a link to login/register views
- /login
  - Show a page with input fields for email and password to login an existing user. It should send the user back to the list view upon success.
- /register
  - Show a page with input fields for email and password to register a user new user. It should send the user back to the list view upon success.
- /books
  - Show a page listing the books you have available. The listing should include the title, author, price (formatted as currency), and category name for each book.
  - Each item in the listing should have a link to the single view
- /books/new
  - Show a page with input fields for title, author, and price. You will also need to have a select (drop-down) box that shows all categories in the system, allowing the book to be assigned a category. The database will not allow a book to be created without a category.
  - Saving the new book successfully should send the user back to the list view.
  - Should require user to be logged in
- /books/:id/update
  - Show a page with input fields prepopulated with the specified book data. The page should include input fields for title, author, and price. You will also need to have a select (drop-down) box that shows all categories in the system, allowing the book to be assigned to a different category.
  - Saving the updated book successfully should send the user back to either the single view or the list view (your choice).
  - Should require user to be logged in.
- /books/:id
  - Show a page that displays information for just the indicated book. The page should include the title, author, price (formatted as currency), and category name for the book.
  - Should also contain Edit and Delete buttons/icons
  - Clicking the delete button should delete the book and send them to the book list
  - Clicking the edit button should send the user to the edit book component

## Submission Instructions

You may want to commit as you go along. When you are finished, make sure you have PUSHed to github. You will not be able to push to the repository once the assessment is finished.
