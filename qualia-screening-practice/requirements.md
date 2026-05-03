# TODO App Requirements

## Core Features
- Display a list of tasks
- Add a new task via a form input
- Mark a task as complete/incomplete
- Delete a task
- Show a count of remaining incomplete tasks

---

## The Twist — Tag & Filter System
Each task must have one or more **tags** (e.g. Work, Personal, Urgent) and the user can **filter the list by tag**. This forces you to practice:

- **Reactive Forms** — for the add-task form with multi-select or tag input
- **Custom Pipes** — to filter the task list by selected tag
- **Component Communication** — a filter bar component passing selections up/down via `@Input()`/`@Output()`
- **Services** — a `TaskService` to manage state and keep components lean
- **Signals or RxJS BehaviorSubject** — to reactively drive the filtered list

---

## Technical Requirements
- Use **Reactive Forms** for task creation (not template-driven)
- Store tasks in a **TaskService** (no direct state in components)
- Build at least **3 components** — e.g. `TaskListComponent`, `TaskFormComponent`, `FilterBarComponent`
- Write a **custom pipe** for filtering tasks by tag
- Each task model should be a **TypeScript interface**

---

## Task Model
```typescript
interface Task {
  id: number;
  title: string;
  completed: boolean;
  tags: string[];
  createdAt: Date;
}
```

---

## Stretch Goals
- Sort tasks by date or alphabetically
- Persist tasks to `localStorage`
- Animate task additions/removals using Angular Animations
- Show an empty state message when no tasks match the filter
