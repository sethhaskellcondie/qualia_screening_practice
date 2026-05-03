 ## Notes for ToDo project

- Store tasks as JSON in a "data" file
- CRUD functionality for each Todo item
- Task Object
  - id: number
  - Title: String
  - Complete: Boolean
  - Tags: String[]
- Three components
  - TaskList Component
  - TaskForm Component
  - FilterBar Component
- One Page (single screen app)

Also include a sort functionality (Title and Complete)
Include an empty state

## Plan
1. Start by create the Existing Tasks Page, with an empty state, include a button to create a new task.
2. When clicking on the button that will reveal the new task form, To start the new task form there will be a "cancel" button this will take us back to the existing Tasks Page
3. Start fleshing out the New Task Form, include fields for title, and tags
4. Create a task service to validate the input, (each task requires a title and at least one tag) and then store the newly created tasks in memory, new tasks will be created "incomplete"
5. Update the create and cancel buttons to clear the form
6. Flesh out the existing tasks page to read the data from memory and display the tasks correctly
7. Include the ability to edit the title, tags, and the complete state on existing tasks
8. Include a delete button for the existing tasks that will remove the task from memory
9. Include a count of the incomplete tasks versus the complete tasks at the top of the page
10. Start working on a filter bar that can filter the tasks to only include tasks with certain tags, wire this to a custom pipe that filters tasks by given task
11. Include a feature to sort the existing tasks by title, and complete (default to sort by id, group by incomplete) (unfinished)
