Expense Model
expense {
  description: string
  amount: number
  category: "work" | "play" | "misc"
  date: Date (use angular date pipe)
}

When adding expenses, the default date is today in the input
all fields are required, and the amount should be a positive number (display error if missing information)

Two components
New expense form (includes all input fields and space for an error message on input validation)
Existing expenses (shows a list of all the current expenses along with all data points)
- default sorting is more recent expense first
- There needs to be a way to filter the results, category, date range, and both
- At the bottom there should be a list of the running totals of all "visible expresses"

Implementation plan
1. Start by creating a service that will store the expenses in memory
2. Next create the ability to make new expenses in the service, expenses will be stored in an expenses array, and the expenses that can be seen in the upcoming UI will be stored in a "visible expenses" array, the visible expenses array will be used to calculate running totals, and used with the filters
3. Then create the form that will allow new expenses to be created in the UI, include validation upon "submit", the category can be a radio button, the date should default to today, also reset all form inputs on submit
4. Then create the component to display the created expenses that are currently in memory, include an empty state one line that says "create an expense to get started"
5. Update the expenses view component to have a delete option for each entry, this will delete the data from memory when clicked
6. Update the expenses view component to include the running totals of all visible expenses
7. Update the expenses view and expenses service to allow the results to be filtered by category, a date range, or both, make sure that the running totals update as well, also include a button to clear the active filters
